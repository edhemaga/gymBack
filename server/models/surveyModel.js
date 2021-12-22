import mongoose from 'mongoose';


const surveySchema = mongoose.Schema({
    key: Number
});


const SurveyModel = mongoose.model('SurveyModel', surveySchema);

export default SurveyModel;