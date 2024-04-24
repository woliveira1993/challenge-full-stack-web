const  express  =  require("express");
const  cors     =  require("cors");
const  logger   =  require("morgan");
const  dotenv   =  require("dotenv");
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

const port = process.env.PORT || 5000;

const  authRoutes      =  require("./routes/auth");
const  studentRoutes   =  require("./routes/students");

// authentication route
app.use("/v1/auth",  authRoutes );

// students route
app.use("/v1/students",  studentRoutes );

app.listen(port, () => {
    console.log(`Server online in port ${port}.`);
})




