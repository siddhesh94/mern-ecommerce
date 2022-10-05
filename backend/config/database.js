const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`Database connected with: ${data.connection.host}`);
  });
  // .catch((err) => {
  //   console.log(err);
  // });
};

module.exports = connectDatabase;

//{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}
