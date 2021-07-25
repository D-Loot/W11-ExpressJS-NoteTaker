import { request, response, Router } from "express";
import db from "../db/service.js";

const router = new Router();

// Whenever "/notes" is sent, ask the server to return all of the characters by using the imported index function from "express"
router.get("/notes", async(req,res)=>{
  // send back the "200" status code with all of the characters as JSON
  const indexDb = await db.index();
  res.status(200).json(indexDb);
});

// "router.post" comes from the imported express file
router.post("/notes",({body},res)=>{
  // use the information received from the "index()" function from before
  // then add in the information from the "req.body" and send it back
  db.create(body).then(() => {
    res.status(201).json({ message: "Notes Added" });
  });
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id

// https://www.tabnine.com/code/javascript/functions/express/Router/delete
router.delete("/notes/:id",(req,res)=>{
// console.log(req)
  db.del(req.params.id).then(() => {
    res.status(201).json({ message: "Notes Deleted" });
  });
  // const notesId = req.params.id;
  // request.db.get("notes").remove({"id":id},function(error,document){
  //   if (error) response.send(error);
  //   return res.send("deleted");
  // })
});

export default router;