let BikramSamvat = artifacts.require("./BikramSamvat.sol");
let BS;
module.exports = function (deployer) {
  deployer.then(function () {
    return BikramSamvat.new();
  }).then(function (instance) {
    BS = instance;
    return BS.devSetBS(2029, [1, 1, 2, 1, 2, 0, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2030, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  }).then(function () {
    return BS.devSetBS(2031, [0, 2, 1, 2, 1, 0, 0, 0, -1, 0, -1, 1]);
  }).then(function () {
    return BS.devSetBS(2032, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2033, [1, 1, 2, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2034, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  }).then(function () {
    return BS.devSetBS(2035, [0, 2, 1, 2, 1, 1, -1, 0, 0, -1, -1, 1]);
  }).then(function () {
    return BS.devSetBS(2036, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2037, [1, 1, 2, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2038, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  }).then(function () {
    return BS.devSetBS(2039, [1, 1, 1, 2, 1, 1, -1, 0, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2040, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2041, [1, 1, 2, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2042, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  }).then(function () {
    return BS.devSetBS(2043, [1, 1, 1, 2, 1, 1, -1, 0, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2044, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2045, [1, 2, 1, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2046, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  }).then(function () {
    return BS.devSetBS(2047, [1, 1, 1, 2, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2048, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2049, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2050, [1, 2, 1, 2, 1, 0, 0, 0, -1, 0, -1, 1]);
  }).then(function () {
    return BS.devSetBS(2051, [1, 1, 1, 2, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2052, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2053, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2054, [1, 2, 1, 2, 1, 0, 0, 0, -1, 0, -1, 1]);
  }).then(function () {
    return BS.devSetBS(2055, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2056, [1, 1, 2, 1, 2, 0, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2057, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  }).then(function () {
    return BS.devSetBS(2058, [0, 2, 1, 2, 1, 0, 0, 0, -1, 0, -1, 1]);
  }).then(function () {
    return BS.devSetBS(2059, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2060, [1, 1, 2, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2061, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  }).then(function () {
    return BS.devSetBS(2062, [0, 2, 1, 2, 1, 1, -1, 0, -1, 0, -1, 1]);
  }).then(function () {
    return BS.devSetBS(2063, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2064, [1, 1, 2, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2065, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  }).then(function () {
    return BS.devSetBS(2066, [1, 1, 1, 2, 1, 1, -1, 0, 0, -1, -1, 1]);
  }).then(function () {
    return BS.devSetBS(2067, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2068, [1, 1, 2, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2069, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  }).then(function () {
    return BS.devSetBS(2070, [1, 1, 1, 2, 1, 1, -1, 0, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2071, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2072, [1, 2, 1, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2073, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  }).then(function () {
    return BS.devSetBS(2074, [1, 1, 1, 2, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2075, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2076, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2077, [1, 2, 1, 2, 1, 0, 0, 0, -1, 0, -1, 1]);
  }).then(function () {
    return BS.devSetBS(2078, [1, 1, 1, 2, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2079, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2080, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2081, [1, 1, 2, 2, 1, 0, 0, 0, -1, 0, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2082, [0, 2, 1, 2, 1, 0, 0, 0, -1, 0, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2083, [1, 1, 2, 1, 1, 0, 0, 0, -1, 0, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2084, [1, 1, 2, 1, 1, 0, 0, 0, -1, 0, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2085, [1, 2, 1, 2, 0, 1, 0, 0, -1, 0, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2086, [0, 2, 1, 2, 1, 0, 0, 0, -1, 0, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2087, [1, 1, 2, 1, 1, 1, 0, 0, -1, 0, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2088, [0, 1, 2, 2, 0, 1, 0, 0, -1, 0, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2089, [0, 2, 1, 2, 1, 0, 0, 0, -1, 0, 0, 0]);
  }).then(function () {
    return BS.devSetBS(2090, [0, 2, 1, 2, 1, 0, 0, 0, -1, 0, 0, 0]);
  });
};
/*
function setBSDATA(BS) {
  return BS.devSetBS(2029, [1, 1, 2, 1, 2, 0, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2030, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  return BS.devSetBS(2031, [0, 2, 1, 2, 1, 0, 0, 0, -1, 0, -1, 1]);
  return BS.devSetBS(2032, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2033, [1, 1, 2, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2034, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  return BS.devSetBS(2035, [0, 2, 1, 2, 1, 1, -1, 0, 0, -1, -1, 1]);
  return BS.devSetBS(2036, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2037, [1, 1, 2, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2038, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  return BS.devSetBS(2039, [1, 1, 1, 2, 1, 1, -1, 0, 0, -1, 0, 0]);
  return BS.devSetBS(2040, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2041, [1, 1, 2, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2042, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  return BS.devSetBS(2043, [1, 1, 1, 2, 1, 1, -1, 0, 0, -1, 0, 0]);
  return BS.devSetBS(2044, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2045, [1, 2, 1, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2046, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  return BS.devSetBS(2047, [1, 1, 1, 2, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2048, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2049, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 0]);
  return BS.devSetBS(2050, [1, 2, 1, 2, 1, 0, 0, 0, -1, 0, -1, 1]);
  return BS.devSetBS(2051, [1, 1, 1, 2, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2052, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2053, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 0]);
  return BS.devSetBS(2054, [1, 2, 1, 2, 1, 0, 0, 0, -1, 0, -1, 1]);
  return BS.devSetBS(2055, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2056, [1, 1, 2, 1, 2, 0, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2057, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  return BS.devSetBS(2058, [0, 2, 1, 2, 1, 0, 0, 0, -1, 0, -1, 1]);
  return BS.devSetBS(2059, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2060, [1, 1, 2, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2061, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  return BS.devSetBS(2062, [0, 2, 1, 2, 1, 1, -1, 0, -1, 0, -1, 1]);
  return BS.devSetBS(2063, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2064, [1, 1, 2, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2065, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  return BS.devSetBS(2066, [1, 1, 1, 2, 1, 1, -1, 0, 0, -1, -1, 1]);
  return BS.devSetBS(2067, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2068, [1, 1, 2, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2069, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  return BS.devSetBS(2070, [1, 1, 1, 2, 1, 1, -1, 0, 0, -1, 0, 0]);
  return BS.devSetBS(2071, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2072, [1, 2, 1, 2, 1, 0, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2073, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 1]);
  return BS.devSetBS(2074, [1, 1, 1, 2, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2075, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2076, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 0]);
  return BS.devSetBS(2077, [1, 2, 1, 2, 1, 0, 0, 0, -1, 0, -1, 1]);
  return BS.devSetBS(2078, [1, 1, 1, 2, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2079, [1, 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
  return BS.devSetBS(2080, [1, 2, 1, 2, 1, 0, 0, 0, -1, -1, 0, 0]);
  return BS.devSetBS(2081, [1, 1, 2, 2, 1, 0, 0, 0, -1, 0, 0, 0]);
  return BS.devSetBS(2082, [0, 2, 1, 2, 1, 0, 0, 0, -1, 0, 0, 0]);
  return BS.devSetBS(2083, [1, 1, 2, 1, 1, 0, 0, 0, -1, 0, 0, 0]);
  return BS.devSetBS(2084, [1, 1, 2, 1, 1, 0, 0, 0, -1, 0, 0, 0]);
  return BS.devSetBS(2085, [1, 2, 1, 2, 0, 1, 0, 0, -1, 0, 0, 0]);
  return BS.devSetBS(2086, [0, 2, 1, 2, 1, 0, 0, 0, -1, 0, 0, 0]);
  return BS.devSetBS(2087, [1, 1, 2, 1, 1, 1, 0, 0, -1, 0, 0, 0]);
  return BS.devSetBS(2088, [0, 1, 2, 2, 0, 1, 0, 0, -1, 0, 0, 0]);
  return BS.devSetBS(2089, [0, 2, 1, 2, 1, 0, 0, 0, -1, 0, 0, 0]);
  return BS.devSetBS(2090, [0, 2, 1, 2, 1, 0, 0, 0, -1, 0, 0, 0]);
}*/