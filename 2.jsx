function Komponen(props) {
    const [counter, setCounter] = React.useState(0);
  
    return (
      <div>
        <h1>{props.judul}</h1>
        <button onClick={() => setCounter(counter + 1)}>Klik {counter} kali</button>
      </div>
    );
  }
  