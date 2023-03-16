import mongoose from "mongoose";

let productSchema = mongoose.Schema({}, { collection: "" });

let productModel = mongoose.model("productModel", productSchema, "products");

export default productModel;
