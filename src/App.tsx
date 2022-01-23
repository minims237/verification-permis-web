import "./App.css";
import { Provider } from "mobx-react";
import { appRootStore } from "./stores/root.store";
import Liste from "./Liste";
import Formulaire from "./Formulaire";
import { BrowserRouter, HashRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Provider {...appRootStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Formulaire />} />
          <Route path="liste" element={ <Liste />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
