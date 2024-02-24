import "./App.css";
//import { Header } from './Components/Header/Header.jsx'
import { WelcomePage } from "./Pages/WelcomePage/WelcomePage.jsx";
import { MainPage } from "./Pages/MainPage/MainPage.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
    </>
  );
}

export default App;
