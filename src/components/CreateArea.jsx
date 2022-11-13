import React, { useState } from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isClicked, updateIsClicked] = useState(false);

  const [note, updateNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    updateNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(event) => {
          props.onAdd(note);
          updateNote({ title: "", content: "" });
          event.preventDefault();
        }}
      >
        {isClicked && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={() => {
            updateIsClicked(true);
          }}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isClicked}>
          <Fab type="submit">
            <PostAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
