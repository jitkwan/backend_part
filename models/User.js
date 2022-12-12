import mongoose from "mongoose";  //23
import validator from 'validate'  //27

const UserSchema = new mongoose.Schema({  //24
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true,  //25.เพิ่มspace ที่start or end
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate:{                                 //27
            validator: validator.isEmail,
            message:'Please provide valid email'
            },
        unique: true //26.เป็นสิ่งที่ Mongoose มี จะช่วยเช็ค ไม่ใช่validator แต่เป็นการใช้ index เช็คว่าต้องมีอีเมลเท่านั้นถึงจะยอมรับได้
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
    },
    lastName: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'lastName',
    },
    lastName: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'lastName',
    },
    gender: {
        type: String,
        required: [true, 'Please select gender'],
        enum: ["male", "female", "not specified"]
      },
    location: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'lastName',
    },
})

export default mongoose.model('User',UserSchema) //ตัวแรกคือชื่อcollection ที่จะเอาไปใส่ใน mongodb