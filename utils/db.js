import * as dotenv from 'dotenv'
dotenv.config({path:'./config.env'})
import mongoose from "mongoose";

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { dbName: "elemento" })
        console.log('Connected to MongoDB')
    } catch (err) {
        throw Error(err);
    }
}

export default connectMongoDb()
