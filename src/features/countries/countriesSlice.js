import { createSlice } from "@reduxjs/toolkit";
import countriesData from "../../services/countries";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    isLoading: true,
    search: "",
    favourites: JSON.parse(localStorage.getItem("favItem")) || [],
  },

  reducers: {
    countriesGet: (state, action) => {
      state.countries = action.payload;
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    search: (state, action) => {
      state.search = action.payload;
    },
    addFav: (state, action) => {
      state.favourites.push(action.payload);
      // localStorage.setItem("favItem", JSON.stringify(state.favourites));
    },
    removeFav(state, action) {
      state.favourites = state.favourites.filter(
        (item) => item.countryName !== action.payload.countryName
      );
      // localStorage.setItem("favItem", JSON.stringify(state.favourites));
    },
  },
});

export const allCountries = () => {
  return async (dispatch) => {
    const countries = await countriesData.getApiData();
    dispatch(countriesGet(countries));
    dispatch(isLoading(false));
  };
};

export const updateLocalStorage = (data) => {
  localStorage.setItem("favItem", JSON.stringify(data));
};

export const { countriesGet, isLoading, search, addFav, removeFav } =
  countriesSlice.actions;
export default countriesSlice.reducer;
