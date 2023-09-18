function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
        />
    );
}

function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    );
}

function Profile1() {
    return (
      <img
        src="https://i.imgur.com/lICfvbD.jpg"
        alt="Aklilu Lemma"
      />
    );
  }

function Profile2() {
    return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}

function Profile3() {
    return (
        <img
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
        />
    );
}

function Gallery1() {
    return (
        <section>
        <h1>Amazing Scientists</h1>
        <Profile3 />
        <Profile3 />
        <Profile3 />
        </section>
    )
}

function Congratulations() {
    return <h1>Good Job!!!</h1>
}


export default Congratulations
