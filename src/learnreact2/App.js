function TodoList() {
    return (
        <>
            <h1>Hedy Lamarr's Todos</h1>
            <img 
                src="https://i.imgur.com/yXOvdOSs.jpg" 
                alt="Hedy Lamarr" 
                class="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </>
    );
}

function Bio() {
    return (
        <>
            <div className="intro">
                <h1>Welcome to my website!</h1>
            </div>
            <p className="summary">
                You can find my thoughts here.
                <br /><br />
                <b>And <i>pictures</i></b> of scientists!
            </p>
        </>
    );
}

export default TodoList