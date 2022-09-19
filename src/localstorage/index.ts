export const readNotes = () => {
  const response = localStorage.getItem('notes');
  if (response) {
    return JSON.parse(response);
  } return null;
};

export const saveNotes = (notes: any) => {
  const respNotes = readNotes();
  if (respNotes) {
    localStorage.setItem('notes', (
      JSON.stringify(notes)
    ));
  } else {
    localStorage.setItem('notes', JSON.stringify([notes]));
  }
};