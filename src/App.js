import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
      <Portfolio/>

      <SocialLink/>
    </div>
  );
}

export default App;
