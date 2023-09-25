import { people } from './data.js';
import { getImageUrl } from './utils.js';
import { Fragment } from 'react';
import { recipes } from './data.js';

const poem ={
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

function Poem() {
    return (
        <article>
            {poem.lines.map((line,index) =>
                <Fragment  key={index}>
                    <p>
                        {line} 
                    </p>
                    { index < 2 ? <hr/> : ''}
                </Fragment>
            )}
        </article>
    );
}

function Recipe( {id,name,ingredients} ) {
    return (
        <div id={id}>
            <h2>{name}</h2>
            <ul>
            {ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
            </ul>
        </div>
    );
}
function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {
                recipes.map(recipe =>
                    <Recipe 
                        key={recipe.id}
                        id={recipe.id}
                        name={recipe.name}
                        ingredients={recipe.ingredients}
                    />
                )
            }
        </div>
    );
}


function List() {
    const chemist = people.filter(person =>
        person.profession === 'chemist'
    );

    const others = people.filter(person =>
        person.profession !== 'chemist'
    );

    const listChemists = chemist.map(person =>
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
    );

    const listOthers = others.map(person =>
        <li key={person.id}>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
      );

    return (
      <article>
        <h1>Chemist</h1>
        <ul>{listChemists}</ul>
        <h1>Others</h1>
        <ul>{listOthers}</ul>
      </article>
    );
  }
  

function List2() {
    //const chemist = people.filter(person =>
        //person.profession === 'chemist'
    //);
    const listItems = people.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>
}



const people1 = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

function List1() {
    const listItems = people.map(person => 
        <li>{person}</li>
    );
    return <ul>{listItems}</ul>;
}


export default Poem
