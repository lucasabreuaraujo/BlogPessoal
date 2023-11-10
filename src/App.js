import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SobreMim from "./Pages/SobreMim";
import Menu from "./Components/Menu";
import Rodape from "./Components/Rodape";
import PaginaPadrao from "./Components/PaginaPadrao";
import Post from "./Pages/Post";
import Notfound from "./Pages/NotFound";




function App() {
  return (
    
    <BrowserRouter>
      <Menu/>


      <Routes>
        <Route path="/" element={ < PaginaPadrao />}>
          <Route path="/" element={<Home />}/>
          <Route path="/Sobremim" element={<SobreMim/>}/>
          
        </Route>
        <Route path='posts/:id' element= {<Post />}/>
        <Route path="*" element={ <Notfound /> }/>
      </Routes>

      <Rodape />

    </BrowserRouter>
    )
}

export default App;
