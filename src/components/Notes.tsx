import { FC, useEffect, useState } from 'react';
import { readNotes, saveNotes } from '../localstorage';

interface NotesProps {}

const Notes: FC<NotesProps> = ({}) => {
  const [notes, setNotes] = useState<any>('');

  useEffect(() => {
    const local = readNotes();
    setNotes(local);
  }, []);

  return (
    <div className='h-screen flex justify-center items-center bg-zinc-900'>
      <textarea
        value={notes}
        name="notes"
        onChange={ ({ target: { value }}) => {
          setNotes(value);
          saveNotes(value)
        }}
        className="resize-none h-1/2 w-1/2 p-2"
        placeholder="Digite a sua nota aqui!"
      />
    </div>
  );
}

export default Notes;