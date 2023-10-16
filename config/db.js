const mongoose = require("mongoose");
const dotenv= require("dotenv")

dotenv.config()

const mongoDbConnection = async () => {
  try {
    await mongoose.connect('mongodb+srv://saeed:20954284Abc@cluster0.bppagvz.mongodb.net/doctorapp');
    console.log(`'db connected '`);
  } catch (error) {
    console.log(`connection error ${error}`);
  }
};

module.exports = mongoDbConnection;
