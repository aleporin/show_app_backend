const { User } = require('../models')
const middleware = require('../middleware')

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  CheckSession
}
