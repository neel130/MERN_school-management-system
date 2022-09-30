const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
const connectDatabase = require("./mongodb/connection");
const student = require("./routes/student");

dotenv.config();
connectDatabase();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/students", student);

app.listen(process.env.PORT, () => {
    console.log(`server is running on port no ${process.env.PORT}`);
});
