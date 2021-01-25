import { combineReducers } from "redux";

const flightSearch = (flight = {}, action) => {
  if (action.type === "SEARCH_FLIGHT") {
    return {
      SourceCity: action.payload.SourceCity,
      DestinationCity: action.payload.DestinationCity,
      TravelDate: action.payload.TravelDate,
      ReturnDate: action.payload.ReturnDate,
    };
  }
  return flight;
};

const noDataFlag = (noDataFlag = null, action) => {
  if (action.type === "FETCH_FLIGHTS") {
    if (action.payload.length === 0) {
      return false;
    } else {
      return true;
    }
  }
  return noDataFlag;
};
const listofFlights = (flightList = [], action) => {
  if (action.type === "FETCH_FLIGHTS") {
    return action.payload;
  } else return flightList;
};
export default combineReducers({
  search: flightSearch,
  flightList: listofFlights,
  noDataFlag: noDataFlag,
});
