import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route, useParams } from "react-router-dom";

const HatsPage = () => {
  const id = useParams();
  console.log(id);
  return (
    <div>
      <h2>Hats page</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/:id" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
