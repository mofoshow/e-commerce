import "./App.css";
import Ecommerce from "./Ecommerce";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Ecommerce />
        </Provider>
      </header>
    </div>
  );
}

export default App;
