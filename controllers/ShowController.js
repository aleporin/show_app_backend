const { Show, User } = require('../models')

const CreateShow = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const createdShow = await Show.create({
      title: req.body.title,
      description: req.body.description,
      source: req.body.source,
      watched: req.body.watched,
      image: req.body.image,
      userId: userId
    })
    res.send(createdShow)
  } catch (e) {
    throw e
  }
}

module.exports = {
  CreateShow
  // GetAllShows,
  // GetUserShows,
  // DeleteShow
}
