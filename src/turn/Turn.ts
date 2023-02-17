import { Player } from "../models/player/Player";

interface TurnProps {
  playerList: Player[];
  currentTurn?: boolean;
}

export default function Turn(props: TurnProps) {
  const { currentTurn, playerList } = props;

  const numberOfPlayers = playerList.length;

  return console.log("what");
}
