import "./index.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { useParams } from "react-router-dom";
import CountriesList from "./components/Countries/CountriesList";
import Home from "./components/Home/Home";
import SingleCountry from "./components/SingleCountry/SingleCountry";
import Favourites from "./components/Favourites/Favourites";

const RouterWrapper = (props) => {
  const params = useParams();
  return <SingleCountry params={params} {...props} />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="countries" element={<CountriesList />} />
        <Route path="countries/:singlecountry" element={<RouterWrapper />} />
        <Route path="favourites" element={<Favourites />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
