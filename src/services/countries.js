import axios from "axios";

const getApiData = async () => {
  const countryCall = await axios("https://restcountries.com/v3.1/all").catch(
    (err) => {
      console.log(err);
    }
  );
  return countryCall.data;
};

export default { getApiData };
