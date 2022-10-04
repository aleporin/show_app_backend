// const admin = require('../config/firebase.config')

// const verifyToken = (req, res, next) => {
//   const { token } = res.locals
//   let payload
//   getAuth()
//     .verifyIdToken(token)
//     .then((decodedToken) => {
//       payload = decodedToken.uid
//       // ...
//       return next()
//     })
//     .catch((error) => {
//       res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
//     })
//   if (payload) {
//     res.locals.payload = payload
//     return next()
//   }
// }

// const stripToken = async (req, res, next) => {
//   const token = req.headers['authorization'].split(' ')[1]
//   try {
//     const decodeValue = await admin.auth().verifyIdToken(token)
//     if (decodeValue) {
//       req.user = decodeValue
//       return next()
//     }
//     return res.json({ message: 'Un authorize' })
//   } catch (e) {
//     return res.json({ message: 'Internal Error' })
//   }
// }

// module.exports = {
//   verifyToken,
//   stripToken
// }
