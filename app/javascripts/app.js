// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import {
  default as Web3
} from 'web3';
import {
  default as contract
} from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import BikramSamvatArtifacts from '../../build/contracts/BikramSamvat.json'

// BikramSamvat is our usable abstraction, which we'll use through the code below.
var BikramSamvat = contract(BikramSamvatArtifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
var accounts, account, isMetaMask, prevHash, blockNumber;
var DAYS = ["&#x0906;&#x0908;&#x0924;&#x092C;&#x093E;&#x0930;", "&#x0938;&#x094B;&#x092E;&#x092C;&#x093E;&#x0930;", "&#x092E;&#x0902;&#x0917;&#x0932;&#x092C;&#x093E;&#x0930;", "&#x092C;&#x0941;&#x0927;&#x092C;&#x093E;&#x0930;", "&#x092C;&#x093F;&#x0939;&#x0940;&#x092C;&#x093E;&#x0930;", "&#x0936;&#x0941;&#x0915;&#x094D;&#x0930;&#x092C;&#x093E;&#x0930;", "&#x0936;&#x0928;&#x093F;&#x092C;&#x093E;&#x0930;"];
var MONTHS = ["&#x092C;&#x0948;&#x0936;&#x093E;&#x0916;", "&#x091C;&#x0947;&#x0937;&#x094D;&#x0920;", "&#x0905;&#x0937;&#x093E;&#x0922;", "&#x0936;&#x094D;&#x0930;&#x093E;&#x0935;&#x0923;", "&#x092D;&#x0926;&#x094C;", "&#x0905;&#x0938;&#x094B;&#x091C;", "&#x0915;&#x093E;&#x0930;&#x094D;&#x0924;&#x093F;&#x0915;", "&#x092E;&#x0902;&#x0938;&#x093F;&#x0930;", "&#x092A;&#x094C;&#x0937;", "&#x092E;&#x093E;&#x0918;", "&#x092B;&#x093E;&#x0932;&#x094D;&#x0917;&#x0941;&#x0928;", "&#x091A;&#x0948;&#x0924;&#x094D;&#x0930;"];
var _Y ,_M ,_D ,_h, _m, _s, _ts;
window.App = {
  start: function () {
    var self = this;
    _Y = document.getElementById("_year");
    _M = document.getElementById("_month");
    _D = document.getElementById("_date");
    _h = document.getElementById("_hour");
    _m = document.getElementById("_min");
    _s = document.getElementById("_sec");
    _ts = document.getElementById("_timestamp");
    // Bootstrap the BikramSamvat abstraction for Use.
    BikramSamvat.setProvider(web3.currentProvider);
    web3.eth.getBlock(0, function (error, result) {
      if (!error) {
        if (result.hash == '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3') {
          self.setStatus((!isMetaMask ? " Please <a href=\"https://metamask.io/\" target=\"_blank\"> Download Metamask</a> plugin." : "Please unlock and switch network to Rinkeby testnet on your Metamask plugin."));
        } else if (result.hash == "0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177") {
          self.update;
          self.setStatus('Connected to Rinkeby Testnet.. <br>' + (!isMetaMask ? " Please <a href=\"https://metamask.io/\" target=\"_blank\"> Download Metamask</a> plugin." : "Please unlock and switch network to Rinkeby testnet on your Metamask plugin."));
        }
      }
    });
    setInterval(self.update, 10000);
    setTimeout(self.update, 5000);
  },
  setStatus: function (message) {
    var status = document.getElementById("status");
    status.innerHTML = message;
  },
  setResult: function (message) {
    var status = document.getElementById("result");
    status.innerHTML += message;
  },
  bs2ts: function () {
    var self = this;
    this.setStatus("Retriving data from blockchain. (please wait)");

    var BS;
    BikramSamvat.deployed().then(function (instance) {
      BS = instance;
      return BS.convertNST2TS(_Y, _M, _D, _h, _m, _s);
    }).then(function (data) {
      self.setStatus("Converted!!");
      _ts.value = data[7];
      self.setResult('BS2TS : ' + data[0] + ', ' + MONTHS[data[1] - 1] + ' ' + data[2] + ' &#x0917;&#x0924;&#x0947;, ' + DAYS[data[6]] + ' || ' + data[3] + ':' + data[4] + ':' + data[5] + ' ||' + data[7] + '<br>');
    }).catch(function (e) {
      console.log(e);
      self.setStatus("Error: " + e.message);
    });
  },
  ts2bs: function () {
    var self = this;
    var _ts = document.getElementById("_timestamp").value;
    this.setStatus("Retriving data from blockchain. (please wait)");
    var BS;
    BikramSamvat.deployed().then(function (instance) {
      BS = instance;
      return BS.convertTS2BS(_ts);
    }).then(function (data) {
      self.setStatus("Converted!!");
      self.setResult('TS2BS : ' + data[0] + ', ' + MONTHS[data[1] - 1] + ' ' + data[2] + ' &#x0917;&#x0924;&#x0947;, ' + DAYS[data[6]] + ' || ' + data[3] + ':' + data[4] + ':' + data[5] + ' ||' + data[7] + '<br>');
      _Y.value = data[0];
      _M.value = data[1];
      _D.value = data[2];
      _h.value = data[3];
      _m.value = data[4];
      _s.value = data[5];
    }).catch(function (e) {
      console.log(e);
      self.setStatus("Error: " + e.message);
    });
  },
  update: function () {
    web3.eth.getBlock('latest', function (error, block) {
      if (!error && prevHash != block.hash) {
        prevHash = block.hash;
        blockNumber = block.number;
        var BS;
        BikramSamvat.deployed().then(function (instance) {
          BS = instance;
          return BS.nowBS();
        }).then(function (data) {
          document.getElementById("now").innerHTML = 'Rinkeby Block '+blockNumber+' : ' + data[0] + ', ' + MONTHS[data[1] - 1] + ' ' + data[2] + ' &#x0917;&#x0924;&#x0947;, ' + DAYS[data[6]] + ' || ' + data[3] + ':' + data[4] + ':' + data[5] + ' || ' + data[7] + '';
        }).catch(function (e) {
          console.log(e);
          self.setStatus("Error: " + e.message);
        });
      }
    });
  }
};

window.addEventListener('load', function () {
  var self = this;
  if (typeof web3 !== 'undefined') {
    window.web3 = new Web3(web3.currentProvider);
    isMetaMask = true;
  } else {
    isMetaMask = false; //'';
    window.web3 = new Web3(new Web3.providers.HttpProvider("https://api.danphe.network/"));
  }
  App.start();
});