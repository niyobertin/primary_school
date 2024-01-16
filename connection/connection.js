import mongoose from "mongoose";

const connection =()=>{
    mongoose.connect('mongodb+srv://bertin:fzLDQN2TYVrwlveW@cluster0.ckhlajt.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>console.log('connection successiful'));
}

export default connection;