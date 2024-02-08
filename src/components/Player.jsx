import {useState, useRef} from "react";

export default function Player() {
  
  const refPlayerName = useRef();
  const [playerName, setPlayerName] = useState("");

  function handleClick(){
    setPlayerName(refPlayerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? `${playerName}!` : "unkown entity!"}</h2>
      <p>
        <input ref={refPlayerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
