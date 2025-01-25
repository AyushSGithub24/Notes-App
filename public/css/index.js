const input = document.querySelector(".add-note textarea");
const addButton = document.querySelector(".add-note button");
const container = document.querySelector(".container");
const port=3000;
function createNoteElement(id, note) {
  const div = document.createElement("div");
  div.classList.add("note");
  div.dataset.id = id;
  div.innerHTML = `
<textarea rows="6" readonly>${note}</textarea>
<div>
<button onclick="toggleEditMode(this)">Edit</button>
<button onclick="deleteNote(this)">Delete</button>
</div>
`;
  return div;
}

async function renderAllNotes(){
  try {
    const response=await fetch(`http://localhost:${port}/notes`,{
      method:"GET",
      headers: { "Content-type": "application/json" },
    })
    if (response.ok) {
      const newNote = await response.json();
      renderNotes(newNote);
    }

  } catch (error) {
    
  }
}


function renderNotes(notes) {
  container.innerHTML = "";
  Object.entries(notes).forEach(([id, note]) => {
    container.appendChild(createNoteElement(id, note));
  });
}

async function addNote() {
  const noteText = input.value.trim();
  if (!noteText) return alert("Note cannot be empty!");

  const id = uuid.v4();
  try {
    const response = await fetch(`http://localhost:${port}/notes`, {
      method: "POST",
      body: JSON.stringify({ id, note: noteText }),
      headers: { "Content-type": "application/json" },
    });

    if (response.ok) {
      const newNote = await response.json();
      renderNotes(newNote);
      input.value = "";
    } else {
      alert("Failed to add note. Try again!");
    }
  } catch (error) {
    console.error("Error adding note:", error);
  }
}

addButton.addEventListener("click", addNote);

async function toggleEditMode(button) {
  const note = button.closest(".note");
  const textarea = note.querySelector("textarea");
  const noteId = note.dataset.id;

  if (textarea.readOnly) {
    textarea.readOnly = false;
    textarea.classList.add("edit-mode");
    button.textContent = "Save";
  } else {
    textarea.readOnly = true;
    textarea.classList.remove("edit-mode");
    button.textContent = "Edit";

    const updatedText = textarea.value.trim();
    try {
      await fetch(`http://localhost:${port}/notes/${noteId}`, {
        method: "PUT",
        body: JSON.stringify({ note: updatedText }),
        headers: { "Content-type": "application/json" },
      });
    } catch (error) {
      console.error("Error updating note:", error);
    }
  }
}

async function deleteNote(button) {
  const note = button.closest(".note");
  const noteId = note.dataset.id; // Get the ID of the note
  console.log("Deleting note with ID:", noteId);

  try {
    const res = await fetch(`http://localhost:${port}/notes/${noteId}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });

    if (res.ok) {
      // Remove the note directly from the DOM
      note.remove();
      console.log(`Note with ID ${noteId} deleted successfully.`);
    } else {
      console.error(
        "Failed to delete note. Response status:",
        res.status
      );
      alert("Failed to delete the note. Please try again.");
    }
  } catch (error) {
    console.error("Error deleting note:", error);
  }
}
renderAllNotes()