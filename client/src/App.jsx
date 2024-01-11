import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowData from "./components/ShowData";
import Content from "./Content";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/gallery" element={<ShowData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
