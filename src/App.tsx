import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "react-bootstrap";
import Formulaire from "./Formulaire";
import { Provider } from "mobx-react";
import { appRootStore } from "./stores/root.store";
function App() {
  return (
    <div>
      <Provider {...appRootStore}>
        <Formulaire />
      </Provider>
    </div>
  );
}

export default App;
