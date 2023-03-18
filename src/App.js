import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import HomePage from "./Pages/HomePage";
import SingleCoinPage from "./Pages/SingleCoinPage";

function App() {
  return (
    <BrowserRouter>
    <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins/:CoinName" element={<SingleCoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
