import { useState, useEffect } from 'react';

function Clock({time}) {
    return (
        <>
            <h1>{time}</h1>
            <input />
        </>
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

function  App() {
    const time = useTime();
    return(
        <Clock time={time.toLocaleTimeString()} />
    );
}

function Gallery() {
    return (
        <section>
            <h1>Inspring Sculptures</h1>
            <Image />
            <Image />
            <Image />
        </section>
    );
}

function Image() {
    return (
        <img
            src="https://i.imgur.com/ZF6s192.jpg"
            alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
        />
    );
}

export default App