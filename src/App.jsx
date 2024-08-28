import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlansPage from "./views/PlansPage";
import HomePage from "./views/HomePage";
import Registro from "./views/Registro";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";


const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/planes" element={<PlansPage></PlansPage>}></Route>
        <Route path="/registro" element={<Registro></Registro>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
