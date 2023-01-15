import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import AnaliseT from "./routes/analise-tributaria/analise-tributaria.component";

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='at' element={<AnaliseT />} />
    </Routes>

  );
}

export default App;
