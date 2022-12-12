import mongoose from "mongoose";

const connectDB = (url) => {   //7รับค่า url = connection string ที่เอามาจาก atlas MGDB
    return mongoose.connect(url)//8
}
export default connectDB