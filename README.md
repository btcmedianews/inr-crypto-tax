# inr-crypto-tax

Small, dependency-free JavaScript for India's crypto (virtual digital asset, VDA) tax maths: the flat 30% tax plus 4% cess, optional surcharge, and the 1% TDS with its ₹50,000 / ₹10,000 yearly thresholds.

Maintained by [BtcMedia](https://btcmedia.news/). Try it in the browser: [Crypto tax calculator India](https://btcmedia.news/tools/crypto-tax-calculator-india/) · [1% TDS calculator](https://btcmedia.news/tools/crypto-tds-calculator-india/).

```js
const { vdaTax, tds } = require('inr-crypto-tax');
vdaTax({ sale: 150000, cost: 100000 }); // { gain: 50000, base: 15000, surcharge: 0, cess: 600, total: 15600 }
tds({ consideration: 100000 });         // { applies: true, tds: 1000, limit: 50000 }
```

Rules and sources are explained in [How crypto is taxed in India](https://btcmedia.news/guides/crypto-tax-itr-schedule-vda/) and [1% TDS on crypto](https://btcmedia.news/guides/crypto-tds-194s-explained/).

**Education only, not tax advice.** Surcharge is simplified (rates by total income, no marginal relief). Check with a chartered accountant.

## Attribution
MIT licensed. If you use it on a website, a link to https://btcmedia.news/ is appreciated (not required).
