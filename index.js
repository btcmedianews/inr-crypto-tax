// inr-crypto-tax: India crypto (VDA) tax and 1% TDS maths. MIT licence. By BtcMedia (https://btcmedia.news/tools/crypto-tax-calculator-india/).
// Education only, not tax advice. Rules: 30% on VDA gains (s.115BBH, IT Act 1961; carried into IT Act 2025 from 1 Apr 2026),
// 4% health & education cess, no deductions except cost of acquisition, no loss set-off; 1% TDS on consideration (s.194S from 1 Jul 2022, s.393 from 1 Apr 2026).
'use strict';
const SURCHARGE = [[5e7, 0.37], [2e7, 0.25], [1e7, 0.15], [5e6, 0.10]]; // capped rates apply by total income; caller supplies totalIncome
function surchargeRate(totalIncome) { for (const [t, r] of SURCHARGE) if (totalIncome > t) return r; return 0; }
/** Tax on one VDA transfer. Losses are taxed as zero and cannot be set off. */
function vdaTax({ sale, cost, totalIncome = 0, includeSurcharge = false }) {
  const gain = Math.max(0, sale - cost);
  const base = gain * 0.30;
  const surcharge = includeSurcharge ? base * surchargeRate(totalIncome) : 0;
  const cess = (base + surcharge) * 0.04;
  return { gain, base: Math.round(base), surcharge: Math.round(surcharge), cess: Math.round(cess), total: Math.round(base + surcharge + cess) };
}
/** 1% TDS. Threshold per financial year: Rs 50,000 for specified persons, Rs 10,000 for others. */
function tds({ consideration, yearToDate = 0, specifiedPerson = true }) {
  const limit = specifiedPerson ? 50000 : 10000;
  const applies = yearToDate + consideration > limit;
  return { applies, tds: applies ? Math.round(consideration * 0.01) : 0, limit };
}
module.exports = { vdaTax, tds, surchargeRate };
