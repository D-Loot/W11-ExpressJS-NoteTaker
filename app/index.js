import express from "express";

import router from "./routes/api.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("app/public"))

app.use(express.json());
app.use("/api",router);

app.listen(PORT,()=>{
  console.log(`Server Running: PORT: http://localhost:${PORT}/`);
});