import express from 'express';
const app = express();
import dotenv from 'dotenv' //4.
dotenv.config()//5.

//db and authenticateUser
import connectDB from './db/connect.js';

//routers
import authRouter from './routes/authRoutes.js'
import activityRouter from './routes/activityRoutes.js'    //22

// middleware
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';  //อย่าลืมใส่ .js

app.use(express.json())  //19.สร้างข้อมูล json ใน controller ทันทีที่ใช้ฟังก์ชัน post req //middleware hel

app.get('/', (req, res) => {
    //throw new Error(err) //3. ไม่ต้องใส่ค่าในวงเล็บก้อได้ อันนี้จะไปโชว์ค่าใน console.log แต่เราสร้าง errorHandlerMiddlewareให้มันโชว์ค่าหน้าเว็บเเล้ว
    res.send('Welcome!');
  });

app.use('/api/v1/auth',authRouter) //18. dummy to check in postman
app.use('/api/v1/activity',activityRouter)  ///22 dummy to check in postman



app.use(notFoundMiddleware)    //1.app.use จะเอาreqไปเช็คกับ HTTP method ว่าตรงมั้ย ถ้าไม่มีตัวไหนตรงก้จะมาทำ middleware ด้านใน
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;   //ไม่เข้าใจว่าเซตทำไมนะ ??



const start = async () => {   //9.
    try {                     //10. ถ้าเชื่อ MGDB สำเร็จ ทำในวงเล็บ try
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })  
    } catch (error) {
        console.log(error);
    }
}

start()  //11.invoke function เพื่อเรียกใช้งาน