// import { create } from "domain";
import fs, { realpath } from "fs";

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
    fs.promises.writeFile(`${realPath}app/db/db.json`,
    JSON.stringify([...newNotes,noteText])
    );
  },
  async del(noteText){
    const notesArray = await this.index();
    const noteIndex = notesArray.indexOf(noteText);
    if (noteIndex > -1){
      notesArray.splice(noteIndex,-1);
    }

    fs.promises.writeFile(`${realPath}app/db/db.json`,
    JSON.stringify([...notesArray])
    )
  }
}
