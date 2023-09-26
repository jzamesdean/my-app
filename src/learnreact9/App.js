import { sculptureList } from "./data";
import { useState } from 'react';

function FeedbackForm() {
    function handleClick() {
        //리렌더링이 필요하지 않은 작업.....
        const names = prompt('What is your name?');
        alert('Hello, ' + names);
    }

    return (
        <button onClick={handleClick}>
            Great
        </button>
    );
}

/*
function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');

    if(isSent){
        return <h1>Thank you!</h1>;
    } else {
        return (
            <form onSubmit={e => {
                e.preventDefault();
                alert(`Sending : "${message}"`);
                setIsSent(true);
            }}>
                <textarea 
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <br />
                <button type="submit">Send</button>
            </form>
        );
    }
}



function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
    }

    function handleReset() {
        setFirstName('');
        setLastName('');
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hi, {firstName} {lastName} </h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
}



function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
  
    function handleNextClick() {
        if(index >= (sculptureList.length)-1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function handlePerviousClick() {
        if(index <= 0) {
            setIndex(sculptureList.length-1);
        } else {
            setIndex(index - 1);
        }
    }
  
    function handleMoreClick() {
        setShowMore(!showMore);
    }
    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <button onClick={handlePerviousClick}>
                Pervious
            </button>
            <h2>
                <i>{sculpture.name} </i> 
                by {sculpture.artist}
            </h2>
            <h3>  
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img 
                src={sculpture.url} 
                alt={sculpture.alt}
            />
        </>
    );
}

function Page() {
    return (
        <div className="Page">
            <Gallery />
            <Gallery />
        </div>
    );
}


function Gallery0() {
    const [index,setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index+1);
    }

    function handleMoreClick() {
        setShowMore(!showMore)
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}
*/

export default FeedbackForm