const request = require('request');

const { fetchMyIP } = require('./practise1');

const { fetchCoordsByIP } = require('./iss');

const { fetchISSFlyOverTimes } = require('./flyOverTime');


const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    fetchCoordsByIP(ip, (error, loc) => {
      if (error) {
        return callback(error, null);
      }

      fetchISSFlyOverTimes(loc, (error, nextPasses) => {
        if (error) {
          return callback(error, null);
        }

        callback(null, nextPasses);
      });
    });
  });
};

 

  module.exports = {nextISSTimesForMyLocation};