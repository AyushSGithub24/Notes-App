const {Notes}=require("../models/db")
const createNote=(req,res)=>{
    const { id, note } = req.body;
    if (!id || !note) {
        console.error("Invalid request: Missing `id` or `note`");
        return res.status(400).send({ error: "Missing `id` or `note` in the request body." });
      }
      // Add the note to the Notes object
      Notes[id] = note;
      console.log("Create new Note:", Notes);
      // Respond with the updated Notes object
      res.status(201).send(Notes);
}
const updateNote=(req,res)=>{
    const { id } = req.params; // Use req.params instead of req.query
    const { note } = req.body;
    if (Notes[id]) {
        Notes[id] = note; // Fix object assignment
        console.log("Notes updated successfully:", Notes);
        res.status(200).send(Notes); // Send the updated Notes object
      } else {
        console.error("Note ID not found:", id);
        res.status(404).send({ error: "Note not found" }); // Handle cases where the ID does not exist
      }
}
const deleteNote=(req, res) => {
    const { id } = req.params;
    if (Notes[id]) {
      delete Notes[id]; // Properly delete the note
      console.log("Notes after deletion:", Notes);
      res.status(200).send(Notes); // Send the updated Notes object
    } else {
      console.error("Note ID not found:", id);
      res.status(404).send({ error: "Note not found" }); // Handle cases where the ID does not exist
    }
  }
const readNote=(req,res)=>{
    res.send(Notes)
}
module.exports={
    createNote,readNote,updateNote,deleteNote
}