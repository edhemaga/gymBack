import PurchaseModel from '../models/purchaseModel.js';

export const postPurchase = async(req, res) =>{
    var post = req.body;
        
    var newPost = new PurchaseModel(post);
    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch(error){
        res.status(409).json({error: error});
    }
};