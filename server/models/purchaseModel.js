import mongoose from 'mongoose';


const purchaseSchema = mongoose.Schema({
    name: String, 
    number: String, 
    price: Number,
    items: []
});


const PurchaseModel = mongoose.model('PurchaseModel', purchaseSchema);

export default PurchaseModel;