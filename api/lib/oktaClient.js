const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-353320.okta.com',
  token: '008oG1VNkwGi8EHGOfknbjGbq_A--jNvMcu0bq0a2i'
});

module.exports = client;


