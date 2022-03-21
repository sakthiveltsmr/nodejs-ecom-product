exports.connect = () => {
  try {
    const mongoose = require("mongoose");
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connetion established");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
