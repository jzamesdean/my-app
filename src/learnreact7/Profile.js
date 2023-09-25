import { useState } from 'react';
import { getImageUrl } from './utils.js';

let currentPerson;

function Panel({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen(!open)}>
        {open ? 'Collapse' : 'Expand'}
      </button>
      {open && children}
    </section>
  );
}
export default function Profile({ person }) {
    currentPerson = person;
    return (
      <Panel>
        <Header currentPerson={currentPerson}/>
        <Avatar currentPerson={currentPerson}/>
      </Panel>
    )
  }
  
  function Header({currentPerson}) {
    return <h1>{currentPerson.name}</h1>;
  }
  
  function Avatar({currentPerson}) {
    return (
      <img
        className="avatar"
        src={getImageUrl(currentPerson)}
        alt={currentPerson.name}
        width={50}
        height={50}
      />
    );
  }
  