const {Router}=require("express")
const noteRoute=Router();
const {
    createNote,readNote,updateNote,deleteNote
} =require("../Controller/notesLogic")


noteRoute.get("/",readNote)
//create
noteRoute.post("/",createNote)
//update
noteRoute.put("/:id",updateNote)
//delete
noteRoute.delete("/:id", deleteNote);



module.exports={noteRoute}