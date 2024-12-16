const noteTextarea = document.getElementById("note");
const saveButton = document.getElementById("saveButton"); // Updated to match the correct ID
const saveTxtButton = document.getElementById("saveTxtButton");
const clearButton = document.getElementById("clearButton");

// Save note to local storage
saveTxtButton.addEventListener("click", () => { // Updated to use saveTxtButton ID
  const note = noteTextarea.value;
  const filename = "note.txt";
  const blob = new Blob([note], { type: "text/plain;charset=utf-8" });
  saveAs(blob, filename);
});

// Save note as txt file
saveTxtButton.addEventListener("click", () => {
  const note = noteTextarea.value;
  const filename = "note.txt";
  const blob = new Blob([note], { type: "text/plain;charset=utf-8" });
  saveAs(blob, filename);
});

// Load note from local storage
window.addEventListener("load", () => {
  const note = localStorage.getItem("note");
  if (note) {
    noteTextarea.value = note;
  }
});

// Clear note
clearButton.addEventListener("click", () => {
  noteTextarea.value = "";
  localStorage.removeItem("note");
});

// SaveAs function
function saveAs(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

