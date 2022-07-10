require("dotenv").config();

const productData = require("./data/product");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany({});
    console.log("Data import sucess");
    process.exit();
  } catch (error) {
    console.error("Data import failed", error);
    process.exit(1);
  }
};

importData();
