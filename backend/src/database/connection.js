import mongoose from "mongoose";

const connection = await mongoose.connect('mongodb+srv://demo:Josue1806@cluster0.7xbmjew.mongodb.net/chordsApp?retryWrites=true&w=majority').then(
    console.log('connected to the database')
).catch(
    (err)=>{
        console.error(err);
    }
)
export default connection