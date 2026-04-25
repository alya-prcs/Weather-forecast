import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <HashRouter>
      <Header userName={userName} setUserName={setUserName} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={<SignupPage setUserName={setUserName} />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;