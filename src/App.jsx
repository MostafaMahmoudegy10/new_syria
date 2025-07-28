import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import NewsContextProvider from "./store/NewsContextProvider";

import About from "./pages/About.jsx";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col"> 
      <NewsContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </NewsContextProvider>
    </div>
  );
}

export default App;
