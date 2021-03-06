'use strict'

let _ = require('lodash')

function requiredProcessEnv (name) {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable')
  }
  return process.env[name]
}

// All configurations will extend these options
// ============================================
let all = {
  env: process.env.NODE_ENV, // Server port
  port: process.env.PORT || 9000,

  // MongoDB connection options
  mongo: {
    options: {
      useMongoClient: true,
      db: {
        safe: true
      }
    }
  }
}

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {})
