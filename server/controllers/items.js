import ItemModel from '../models/itemsModel.js';


export const getItems = async (req, res) =>{
    try{
        const items = await ItemModel.find();
        res.status(200).json(items);
    } catch(error){
        res.status(404).json({error: error});
    }
};

export const getItem = async (req, res) =>{
    try{
        const id = req.params.id;
        const item = await ItemModel.findById(id);
        res.status(200).json(item);
    } catch(error){
        res.status(404).json(error.message);
    }
};

export const postItem = async(req, res) =>{
    var post = req.body;
        
    var newPost = new ItemModel(post);
    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch(error){
        res.status(409).json({error: error});
    }
};