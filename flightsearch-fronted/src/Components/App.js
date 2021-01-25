import React from "react";
import Header from "./Header";
import FlightList from "./FlightList";
import FlightSearch from "./FlightSearch";
import "./../styles/App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      data: null,
    };
  }

  // _getState = async (state) => {
  //   const response = await axios.get("http://localhost:3000/flightsearch", {
  //     params: {
  //       Source_city: state.SourceCity,
  //       Destination_city: state.DestinationCity,
  //     },
  //   });
  //   this.setState({ response: response.data });
  //   if (response.data.length === 0) {
  //     this.setState({ data: false });
  //   } else {
  //     this.setState({ data: true });
  //   }
  // };
  // _content = () => {
  //   if (this.state.response.length === 0) {
  //     return "";
  //   } else return <FlightList />;
  // };
  // _noDataFound = () => {
  //   return this.state.data === false ? (
  //     <h3 className="d-flex justify-content-center">No data found</h3>
  //   ) : (
  //     ""
  //   );
  // };

  render() {
    return (
      <div className="App">
        <Header title="Flight Search" />
        <div className="p-3">
          <FlightSearch pushData={this._getState} />
        </div>
        {/* {this._noDataFound()}
        {this._content()} */}
        <FlightList />
      </div>
    );
  }
}
export default App;

// classs for camelCase
