import React from "react";

interface LobbyScreenProps {
  players: string[];
}

export default function LobbyScreen(props: LobbyScreenProps) {
  const { players } = props;
  return (
    <>
      <ul>
        {players.map((name) => {
          return <li style={{ fontSize: "50px", color: "white" }}>name</li>;
        })}
      </ul>
    </>
  );
}
