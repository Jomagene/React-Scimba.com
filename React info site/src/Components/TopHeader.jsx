import {
  redDot,
  greenDot,
  orangeDot,
  leftArrow,
  rightArrow,
  reload,
  menu,
} from "./picsAndIcons";

export default function TopHeader() {
  return (
    <div className="top-header">
      <img src={redDot} />
      <img src={orangeDot} />
      <img src={greenDot} />
      <img src={leftArrow} />
      <img src={rightArrow} />
      <img src={reload} />
      <input value={"/index.html"} />
      <img src={menu} />
    </div>
  );
}
