var mongoose = require("mongoose")

function dbConnection() {
  mongoose.connect(
    `mongodb+srv://faisal205:testapp484@cluster0.lmb61.mongodb.net/test-app?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err) {
      if (err) {
        console.log("err", err)
      } else {
        console.log("successfully connected")
      }
    }
  )
}

module.exports = dbConnection