import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Detail from "../components/Detail";
const Router = ({ searchpoke }: any) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home pageName="home" search={searchpoke} />}
        />
        <Route
          path="/homeshiny"
          element={<Home pageName="home/shiny" search={searchpoke} />}
        />
        <Route
          path="/dreamworld"
          element={<Home pageName="dream-world" search={searchpoke} />}
        />
        <Route
          path="/officialart"
          element={<Home pageName="official-artwork" search={searchpoke} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
};
export default Router;
