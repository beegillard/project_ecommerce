//Mounts each individual router into main application
const users = require('./user');
const photos = require('./photos');
 
module.exports = (app) => {
  app.use('/users', users)
  app.use('/photos', photos)
  // etc..
}