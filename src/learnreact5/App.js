function Item1({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " ✔"}
            </del>
        );
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

function Item2({ name, isPacked }){

    return (
        <li className="item">
            {name} {isPacked ? " ✔" : " ❌"}
        </li>
    )
}


function PackingList2() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf" 
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam" 
                />
            </ul>
        </section>
    );
}

function Item({ name,importance }) {
    return (
        <li className="item">
            {name} {importance > 0 &&  <i>(Importance: {importance})</i>}
        </li>
    );
}

function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item 
                    importance={9} 
                    name="Space suit" 
                />
                <Item 
                    importance={0} 
                    name="Helmet with a golden leaf" 
                />
                <Item 
                    importance={6} 
                    name="Photo of Tam" 
                />
            </ul>
        </section>
    );
}

function Drink({ name }) {
    let plant = 'leaf';
    let content = '15–70 mg/cup';
    let age = '4,000+ years';

    if(name === 'coffee') {
        plant = 'bean';
        content = '80–185 mg/cup';
        age = '1,000+ years';
    }


    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{plant}</dd>
                <dt>Caffeine content</dt>
                <dd>{content}</dd>
                <dt>Age</dt>
                <dd>{age}</dd>
            </dl>
        </section>
    );
}

function  DrinkList() {
    return (
        <div>
            <Drink name="tea" />
            <Drink name="coffee" />
        </div>
    );
}

export default DrinkList