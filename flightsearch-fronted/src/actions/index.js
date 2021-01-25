import FetchFlights from "../apis/FetchFlights";

export const searchFlight = (response) => {
  return {
    type: "SEARCH_FLIGHT",
    payload: response,
  };
};

export const fetchFlights = (state) => async (dispatch) => {
  const response = await FetchFlights.get("", {
    params: {
      Source_city: state.SourceCity,
      Destination_city: state.DestinationCity,
    },
  });
  dispatch({ type: "FETCH_FLIGHTS", payload: response.data });
};
