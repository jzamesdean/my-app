function Avatar() {
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const description = "Gregorio Y.zara";
    return (
        <img
            className="avatar"
            src={avatar}
            alt={description}
        />
    );
}

function TodoList0() {
    const name = 'Hedy Lamarr';
    return (
        <h1>{name}'s To Do List</h1>
    );
}

const person1 = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

function TodoList1() {
    return (
        <div style={person.theme}>
            <h1>{person.name}</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}

const person2 = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    },
    imgSrc: "https://i.imgur.com/7vQD0fPs.jpg"
}

function TodoList2() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src={person.imgSrc}
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
      </div>
    );
}

const baseUrl = 'https://i.imgur.com/';
const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src={baseUrl+person.imageId+person.imageSize+".jpg"}
                alt={person.name}
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}

export default TodoList