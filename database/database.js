const mongoose = require("mongoose")

exports.connectDatabase = async () => {
  // connecting to database
  // until the database is connected, the server must wait.
  await mongoose
    .connect(
      "mongodb+srv://sujan:sujan%40123@scluster.kq8aude.mongodb.net/?retryWrites=true&w=majority&appName=SCluster"
    )
    console.log("connected to database")
};
