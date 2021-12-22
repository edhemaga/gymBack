import express from 'express';
import SurveyModel from '../models/surveyModel.js';

const router = express.Router();

router.post('/', async(req,res)=>{
    var post = req.body;
        
    var newPost = new SurveyModel(post);
    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch(error){
        res.status(409).json({error: error});
    }
});

export default router;