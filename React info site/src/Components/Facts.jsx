import datas from "../Datas";
import ListItem from "./ListItem";

export default function Facts() {
  return (
    <ul className="facts">
      {datas.map((el, index) => (
        <ListItem key={index} content={el} />
      ))}
    </ul>
  );
}
