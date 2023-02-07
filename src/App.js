import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
// import About from "./component/About";
// import Contact from "./component/Contact";
// import Product from "./component/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
