import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route, useParams } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/signinandsignup/SignInAndSignUp";

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
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
