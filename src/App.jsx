import "./stylesheets/All.scss";
import Banner from "./components/Banner";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div id={"app"}>
        <Banner/>
        <Menu/>
    </div>
  );
}

export default App;
