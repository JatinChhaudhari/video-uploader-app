import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Connection from './database/db.js';
import Routes from './routes/route.js';
import path from 'path'


const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(cors(
    origin: ["https://deploy-mern-lwhq.vercel.app"],
    methods: ["POST","GET","DELETE"],
    credentials: true
));
app.use(express.json())

//Routes
app.use("/",Routes)

// serve static files
app.use('/public',express.static(path.join(process.cwd(),'public')))

const server = () => {
    Connection();
    app.listen(PORT, () => {
        console.log(`Server is listening to ${PORT}`);
    })
}

server();
