var mongoose = require("mongoose")

function dbConnection() {
  mongoose.connect(
    `connection string`,
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