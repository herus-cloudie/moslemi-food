import mongoose from "mongoose";

export default async function DBconnection(){
    console.log('connecting DB')
    const URI = process.env.DB_URL
    if(mongoose.connections[0].readyState) return console.log('DB have already connected')
    await mongoose.connect(URI)
    console.log('DB connected')
}