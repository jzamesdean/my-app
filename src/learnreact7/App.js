import Profile from './Profile.js';
import { useState, useEffect } from 'react';
import "./styles.css";

import StoryTray from './StoryTray.js';

let initialStories = [
  {id: 0, label: "Ankit's Story" },
  {id: 1, label: "Taylor's Story" }
];

function App() {
  let [stories, setStories] = useState([...initialStories])
  let time = useTime();

  // HACK: Prevent the memory from growing forever while you read docs.
  // We're breaking our own rules here.
  if (stories.length > 100) {
    stories.length = 100;
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <h2>It is {time.toLocaleTimeString()} now.</h2>
      <StoryTray stories={stories} />
    </div>
  );
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function App2() {
    return (
      <>
        <Profile person={{
          imageId: 'lrWQx8l',
          name: 'Subrahmanyan Chandrasekhar',
        }} />
        <Profile person={{
          imageId: 'MK3eW3A',
          name: 'Creola Katherine Johnson',
        }} />
      </>
    )
  }

function Clock({time}) {
    let hours = time.getHours();
    let classStyle;

    if(hours >= 0 && hours <= 6) {
        classStyle = 'night';
    } else {
        classStyle = 'day';
    }

    return (
        <h1 id="time" className={classStyle}>
            {time.toLocaleTimeString()}
        </h1>
    );
}

function useTime0() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(id);
    }, []);
    return time;
  }
  
function App1() {
    const time = useTime();
    return (
        <Clock time={time} />
    );
}


function Cup({guest}) {
    return <h2>Tea cup for guest #{guest}</h2>
}

function TeaGathering() {
    let cups = [];
    for (let i = 1; i <= 12; i++){
        cups.push(<Cup key={i} guest={i} />);
    }
    return cups;
}

function Cup1({guest}) {
    return <h2>Tea cup for guest #{guest}</h2>
}

function TeaSet1() {
    return (
        <>
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
        </>
    );
}


let guest=0;
function Cup0() {
    guest = guest + 1;
    return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet0() {
    return (
        <>
            <Cup />
            <Cup />
            <Cup />
        </>
    );
}

function Recipe({drinkers}) {
    return (
        <ol>
            <li>Boil {drinkers} cups of water.</li>
            <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
        </ol>
    );
}

function App0() {
    return (
        <section>
            <h1>Spiced Chai Recipe</h1>
            <h2>For two</h2>
            <Recipe drinkers={2} />
            <h2>For a gathering</h2>
            <Recipe drinkers={4} />
        </section>
    )
}


export default App