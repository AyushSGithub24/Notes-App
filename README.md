# CRUD Notes Application

This is a simple CRUD (Create, Read, Update, Delete) web application that allows users to manage notes. The backend is powered by Node.js and Express, and the frontend handles user interactions and dynamically renders the notes.

## Features
- Add notes
- Edit notes
- Delete notes
- View all notes

## Getting Started
Follow the steps below to set up and run the application on your local machine.

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation Steps
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**
   Run the following command to install all required packages:
   ```bash
   npm install
   ```

3. **Start the Application**
   Launch the application with:
   ```bash
   npm start
   ```

4. **Access the Application**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Folder Structure
- `index.js`: Frontend logic for interacting with the notes.
- `server.js`: Backend server code for handling CRUD operations.
- `views/`: Contains EJS templates for rendering the frontend.
- `public/`: Static files such as CSS, JavaScript, and images.
- `db.js`: A simple in-memory storage for notes (replaceable with a database).

## API Endpoints
The application uses the following endpoints for managing notes:

### **GET /notes**
Fetch all notes.

### **POST /notes**
Create a new note.
- **Body:** `{ "id": "unique_id", "note": "Note content" }`

### **PUT /notes/:id**
Update an existing note.
- **Body:** `{ "note": "Updated content" }`

### **DELETE /notes/:id**
Delete a note by its ID.

## Example Usage
1. Add a new note by typing in the input box and clicking "Add Note."
2. Edit an existing note by clicking "Edit," making changes, and saving it.
3. Delete a note by clicking the "Delete" button.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

Enjoy managing your notes with the CRUD Notes Application! 🎉

