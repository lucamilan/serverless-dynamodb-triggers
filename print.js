'use strict';

module.exports.processData = (event, context, callback) => {
  console.log("trigger start");
  event.Records.forEach(function (record) {
    console.log('dyna:', record.dynamodb);
  });
  console.log("trigger end");
};