import { FC, useEffect, useState } from 'react';
import { readNotes, saveNotes } from '../localstorage';

interface NotesProps {
  title: string
}

const Notes: FC<NotesProps> = ({ title }) => {
  const [notes, setNotes] = useState<any>('');

  useEffect(() => {
    const local = readNotes();
    setNotes(local);
  }, []);

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-zinc-900 gap-4'>
      <h1 className="text-2xl text-zinc-200 font-black">{ title }</h1>
      <textarea
        value={notes}
        name="notes"
        onChange={ ({ target: { value }}) => {
          setNotes(value);
          saveNotes(value)
        }}
        className="resize-none h-1/2 w-1/2 p-2 focus:border-zinc-500 focus:outline-none focus:bg-zinc-100"
        placeholder="Digite a sua nota aqui!"
      />
    </div>
  );
}

export default Notes;