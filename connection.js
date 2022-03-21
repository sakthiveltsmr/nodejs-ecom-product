exports.connect = () => {
  try {
    const mongoose = require("mongoose");
    mongoose.connect(
      "mongodb+srv://sakthi123:sakthi123@cluster0.ydepc.mongodb.net/e-com?authSource=admin&replicaSet=atlas-xjhrrz-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
