import datas from "../Datas";
import ListItem from "./ListItem";

export default function Facts() {
  return (
    <ul>
      {datas.map((el) => (
        <ListItem content={el} />
      ))}
    </ul>
  );
}
