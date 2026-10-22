const a = require('assert'); const { vdaTax, tds } = require('./index');
a.strictEqual(vdaTax({ sale: 150000, cost: 100000 }).total, 15600); // matches the worked example on btcmedia.news
a.strictEqual(vdaTax({ sale: 80000, cost: 100000 }).total, 0);
a.strictEqual(tds({ consideration: 100000 }).tds, 1000);
a.strictEqual(tds({ consideration: 5000, specifiedPerson: false }).applies, false);
console.log('all tests pass');
