// 1
import express from "express"

import Router from "./routes/api.js"

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("app/public"))

app.use(express.json());
app.use("/api",Router);

app.listen(PORT,()=>{
  console.log(`Server Running: PORT: ${PORT}`);
});