import "./App.css";
import Facts from "./Components/Facts";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Title from "./Components/Title";
import TopHeader from "./Components/TopHeader";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <main className="pad20">
        <Title />
        <Facts />
      </main>
      <Footer />
    </>
  );
}

export default App;
