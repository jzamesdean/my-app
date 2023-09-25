import "./styles.css";
import { useState } from 'react';

function ColorSwitch({
    onChangeColor
  }) {
    return (
      <button onClick={e => {
        e.stopPropagation();
        onChangeColor();
      }}>
        Change color
      </button>
    );
  }
  
 function App() {
    const [clicks, setClicks] = useState(0);
  
    function handleClickOutside() {
      setClicks(c => c + 1);
    }
  
    function getRandomLightColor() {
      let r = 150 + Math.round(100 * Math.random());
      let g = 150 + Math.round(100 * Math.random());
      let b = 150 + Math.round(100 * Math.random());
      return `rgb(${r}, ${g}, ${b})`;
    }
  
    function handleChangeColor() {
      let bodyStyle = document.body.style;
      bodyStyle.backgroundColor = getRandomLightColor();
    }
  
    return (
      <div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
        <ColorSwitch onChangeColor={handleChangeColor} />
        <br />
        <br />
        <h2>Clicks on the page: {clicks}</h2>
      </div>
    );
  }




function LightSwitch() {
    function handleClick(){
        let bodyStyle = document.body.style;
        if(bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
        }
    }

    return (
        <button onClick={() => handleClick()}>
            Toggle the lights
        </button>
    );
}

function Signup() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submitting!')
        }}>
            <input />
            <button>Send</button>
        </form>
    );
}

function Button({onClick,children}) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

function Toolbar() {
    return (
        <div className="Toolbar" onClick={() => {
            alert('U clickerd opn the toolbar!');
        }}>
            <Button onClick={() => alert('Playing!')}>
                Play Moviess
            </Button>
            <Button onClick={() => alert('Uploading!')}>
                Upload Imagess
            </Button>
        </div>
    );
}

function App1() {
    return (
        <Toolbar
            onPlayMovie={() => alert('Playing!')}
            onUploadImage={() => alert('Uploading!')}
        />
    );
}

function Toolbar2({onPlayMovie, onUploadImage}) {
    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play MOvie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        
        </div>
    );
}

function Button3({onClick,children}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function Button2({onSmash,children}) {
    return (
        <button onClick={onSmash}>
            {children}
        </button>
    );
}

function App0() {
    return (
        <div>
            <Button onSmash={() => alert('Playing!')}>
                Play Movie
            </Button>
            <Button onSmash={() => alert('Uploading!')}>
                Upload Image
            </Button>
        </div>
    );
}

function Button1({onClick,children}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({movieName}) {
    function handlePlayClick() {
        alert(`Playing ${movieName}`);
    }
    return (
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadButton () {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    );
}

function ToolBar1() {
    return (
        <div>
            <PlayButton movieName="KiKi's Delivery Service" />
            <UploadButton />
        </div>
    );
}

function AlertButton({message,children}) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

function ToolBar0() {
    return (
        <div>
            <AlertButton message="Playing!">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton>
        </div>
    );
}

function Button0() {
    function handleClick() {
        alert('U Clicked me!');
    }

    return (
        <button onClick={handleClick}>
            I don't do anything
        </button>
    );
}

export default App