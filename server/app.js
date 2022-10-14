const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/connection");
const app = express();

//all file will be json
app.use(express.json());
//check test
// const addItem = require("./controller/categories");

const service = require("./service/render");
const clientRoute = require("./routes/client");
const adminRoute = require("./routes/admin");
const testDemo = require("./routes/testapi");
app.use(
  cors({
    origin: "*",
  })
);

//connect mongoose
connectDB();
// app.use("/api/add-categories", adminRoute);
//api middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/fetch-data", service.addUser);
app.use(adminRoute);
app.use(clientRoute);
app.use(testDemo);

//server
dotenv.config({ path: "config.env" });
const Port = process.env.port || 8000;

app.listen(Port, () => {
  console.log(`server running on http://localhost:${Port}`);
});
