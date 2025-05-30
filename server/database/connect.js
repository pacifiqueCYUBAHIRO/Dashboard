import mongoose from 'mongoose'

const connectDB = () =>{
    try{
        mongoose.set('strictQuery',false);
        const con = mongoose.connect(process.env.MONGO_URI="mongodb://localhost:27017/admindashboard",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useCreateIndex:true,
            // useFindAndModify:false,
        })
    }
    catch(error){
        console.log(error || `connection error.`)
    }
}

export default connectDB