var BikramSamvat = artifacts.require("./BikramSamvat.sol");
var BS;
contract('BikramSamvat', function (accounts) {
  var BS, ts2bs, bs2ts;
  var _start = 8878500;
  for (var i = 0; i < 100; i++) {
    it("should check " + i + " at TS " + _start, function () {
      return BikramSamvat.deployed().then(function (instance) {
        BS = instance;
        return BS.convertTS2BS(_start);
      }).then(function (X1) {
        ts2bs = X1;
        return BS.convertNST2TS((ts2bs[0]), (ts2bs[1]), (ts2bs[2]), (ts2bs[3]), (ts2bs[4]), (ts2bs[5]));
      }).then(function (X2) {
        bs2ts = X2;
        for (var j = 0; j < bs2ts.length; j++) {
          assert.equal(ts2bs[j].valueOf(), bs2ts[j].valueOf(), i + "Check" + j);
        }
      });
    });
    _start += (86400 * Math.floor(Math.random() * 1337)) + i * 1337;
  }
});