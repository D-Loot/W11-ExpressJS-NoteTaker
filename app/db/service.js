// import { create } from "domain";
import fs, { read, realpath } from "fs";

let realPath = "";

init()
function init(){
  async ()=>{
    realPath = await fs.promises.realPath("./");
  };
}

// Create and export the functions "index()", "create()", and "delete()"
export default {
  async index(){
    return JSON.parse(await fs.promises.readFile(`${realPath}app/db/db.json`,`utf8`));
  },

  async create(noteText){
    const newNotes = await this.index();
    // TODO:
    // take the "newNotes", read each id,
    // create a new id (sort it and grab the last one) and
    noteText.id = newNotes.length + 1

    // assign it to the "noteText" to create (id + noteText) = element, then
    // add it to the new notes => [...newNotes,element]

    fs.promises.writeFile(`${realPath}app/db/db.json`,
    JSON.stringify([...newNotes,noteText])
    ).then(()=>{message: "Notes Added"});
  },
  async del(noteText){
    const notesArray = await this.index();

    // REF: https://stackoverflow.com/questions/34336633/remove-object-from-array-knowing-its-id
    let index = notesArray.map(idElem => {
      return idElem.id;
    }).indexOf(noteText)

    notesArray.splice(index,1);

    fs.promises.writeFile(`${realPath}app/db/db.json`,
    JSON.stringify([...notesArray])
    )
  }
}
