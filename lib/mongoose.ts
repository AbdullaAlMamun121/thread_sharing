import mongoose from 'mongoose';

let isConnected = false

export const connectToDB = async ()=>{
    mongoose.set('strictQuery', true);
    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL Not found')

    if(isConnected) return console.log('already connected to MONGODB');
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log('connected to mongodb')
    }catch(error){
        console.log(error)
    }
}

