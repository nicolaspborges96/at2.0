import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import AnaliseT from "./routes/analise-tributaria/analise-tributaria.component";
import Folha from "./routes/folha/folha.component";

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='at' element={<AnaliseT />} />
      <Route path='folha' element={<Folha/>} />
    </Routes>

  );
}

export default App;
