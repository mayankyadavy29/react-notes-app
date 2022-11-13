import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNotes] = useState([]);

  function addNote(note) {
    updateNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    updateNotes((prevNotes) => {
      return prevNotes.filter((note, idx) => {
        return id !== idx;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, idx) => {
        return (
          <Note
            key={idx}
            id={idx}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
