import Gallery from "./Gallery";
import { Profile } from "./Profile";

function Profile1() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}

function Gallery1() {
    return (
        <section>
            <h1>Amazing Scientists</h1>
            <Profile1/>
            <Profile1/>
            <Profile1/>
        </section>
    );
}

function App() {
    return (
        <>
            <Profile />
            <Gallery />
        </>
    );
}

export default App