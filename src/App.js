import "./index.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { useParams } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import Home from "./components/Home";
import singlecountry from "./components/SingleCountry";
import SingleCountry from "./components/SingleCountry";

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
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
