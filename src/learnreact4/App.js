import Avatar1 from "./Avatar";
import Profile2 from "./Profile";
import { getImageUrl } from "./utils";

function Card1( {children} ) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

function Profile1() {
    return (
        <Card>
            <Avatar1
                size={100}
                person={{ 
                    name: 'Katsuko Saruhashi', 
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    );
}

function Clock({ color,time }) {
    return (
        <h1 style={{ color:color }}>
            {time}
        </h1>
    );
}

function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile 
                name={'Maria Skłodowska-Curie'}
                imgSrc={'szV5sdG'}
                size={70}
                profession={'physicist and chemist'}
                award={4}
                awards={'(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'}
                discovered={'polonium (element)'}
            />
            <Profile 
                name={'Katsuko Saruhashi'}
                imgSrc={'YfeOqp2'}
                size={70}
                profession={'geochemist'}
                award={2}
                awards={'(Miyake Prize for geochemistry, Tanaka Prize)'}
                discovered={'a method for measuring carbon dioxide in seawater'}
            />
        </div>
    )
}

function Avatar({ person,size }) {
    let sizepx = 'b';
    if(size < 90) {
        sizepx = 's';
    }


    return (
        <img
            className="avatar"
            src={getImageUrl(person,sizepx)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Profile3(){
    return (
        <Avatar
            size={40}
            person={{
                name: 'Gregorio Y. Zara', 
                imageId: '7vQD0fP'
            }}
        />
    );
}

function Card ({ children }) {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    {children}
                </div>
            </div>
        </>
    ) ; 
}

function Profile() {
    return (
        <div>
            <Card>
                <h1>Photo</h1>
                <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={70}
                    height={70}
                />
            </Card>
            <Card>
                <h1>About</h1>
                <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
            </Card>
        </div>
    );
}


export default Profile