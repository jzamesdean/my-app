import { useState } from 'react';
import { getFinalState } from './processQueue.js';

function increment(n) {
    return n + 1;
}
increment.toString = () => 'n => n+1';

function App() {
    return (
        <>
            <TestCase
                baseState={0}
                queue={[1, 1, 1]}
                expected={1}
            />
            <hr />
            <TestCase
                baseState={0}
                queue={[
                    increment,
                    increment,
                    increment
                ]}
                expected={3}
            />
            <hr />
            <TestCase
                baseState={0}
                queue={[
                    5,
                    increment,
                ]}
                expected={6}
            />
            <hr />
            <TestCase
                baseState={0}
                queue={[
                    5,
                    increment,
                    42,
                ]}
                expected={42}
            />
        </>
    );
}

function TestCase({baseState,queue,expected}) {
    const actual = getFinalState(baseState, queue);
    return (
        <>
            <p>Base state: <b>{baseState}</b></p>
            <p>Queue: <b>[{queue.join(', ')}]</b></p>
            <p>Expected result: <b>{expected}</b></p>
            <p style={{
                color: actual === expected ?
                    'green' :
                    'red'
            }}>
            Your result: <b>{actual}</b>
                {' '}
            ({actual === expected ?
                'correct' :
                'wrong'
            })
            </p>
        </>
    );
}



function RequestTracker() {
    const[pending, setPending] = useState(0);
    const[completed, setCompleted] = useState(0);

    async function handleClick(){
        setPending(p => p + 1);
        await delay(3000);
        setPending(p => p - 1);
        setCompleted(c => c + 1);
    }

    return (
        <>
            <h3>
                Pending: {pending}
            </h3>
            <h3>
                Completed: {completed}
            </h3>
            <button onClick={handleClick}>
                Buy
            </button>
        </>
    );
}

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve,ms);
    });
}

function Counter() {
    const [number,setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number+1);
                setNumber(number+1);
                setNumber(number+1);
            }}>+3</button>
            <br/><br/><br/>
            <button onClick={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
            }}>+3</button>
            <br/><br/><br/>
            <button onClick={() => {
                setNumber(number + 5);
                setNumber(n => n + 1);
                setNumber(42);
            }}>+313</button>
        </>
    );

}

export default App