import mongoose from 'mongoose';


const itemSchema = mongoose.Schema({
    name: String, 
    gender: String,
    price: Number,
    description: String, 
    sizes: [String],
    colors: [String], 
    selectedFile: [String]
});


const ItemModel = mongoose.model('ItemModel', itemSchema);

export default ItemModel;