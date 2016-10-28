'use strict';

require('dotenv').config({
  silent: true
})

module.exports.processData = (event, context, callback) => {
  console.log("env:", process.env.SERVERLESS_STAGE);

  event.Records.forEach(function (record) {
    console.log('dyna:', record.dynamodb);
  });

};