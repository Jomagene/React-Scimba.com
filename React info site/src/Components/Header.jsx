import reactLogo from "../assets/react.svg";

export default function Header() {
  return (
    <header className=" header pad20">
      <nav className="flex-space-between">
        <img src={reactLogo} className="logo" />
        <ul className="nav-items flex-space-between">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
