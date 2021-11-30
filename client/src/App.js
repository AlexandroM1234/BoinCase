import "./App.css";
import CryptoLists from "./Components/CryptoList";
import { Route, Routes } from "react-router-dom";
import CryptoDetails from "./Components/CryptoDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CryptoLists />} />
        <Route path="/:id" element={<CryptoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
