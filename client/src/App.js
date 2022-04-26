import "./App.css";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">TEST</header> */}
      <Routes>
        <Route path="/" element={<Chat />}></Route>
      </Routes>
    </div>
  );
}

export default App;
