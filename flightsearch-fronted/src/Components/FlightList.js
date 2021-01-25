import React, { useState } from "react";
import "./../styles/FlightList.css";
import FlightCard from "./FlightCard";
import { connect } from "react-redux";

const FlightList = ({ List, noDataFlag }) => {
  console.log(noDataFlag);
  const [Flag, setFlag] = useState("Flight_Name");

  const renderList = () => {
    return List.sort((a, b) => (a[{ Flag }] > b[{ Flag }] ? 1 : -1)).map(
      (flight, index) => {
        return <FlightCard key={flight._id} flight={flight} SNO={index + 1} />;
      }
    );
  };
  const _showNodata = () => {
    if (noDataFlag === false) {
      return <h3 className="d-flex justify-content-center">No data found</h3>;
    }
  };
  const _render = () => {
    if (List.length > 0) {
      return (
        <div>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th
                  scope="col"
                  className="pointer"
                  onClick={() => setFlag("Flight_Name")}
                >
                  Flight Number
                </th>
                <th
                  scope="col"
                  className="pointer"
                  onClick={() => setFlag("Airline_Name")}
                >
                  Flight Name
                </th>
                <th
                  scope="col"
                  className="pointer"
                  onClick={() => setFlag("Duration")}
                >
                  Duration
                </th>
                <th
                  scope="col"
                  className="pointer"
                  onClick={() => setFlag("Price")}
                >
                  price
                </th>
              </tr>
            </thead>
            <tbody>{renderList()}</tbody>
          </table>
        </div>
      );
    } else {
      return <div />;
    }
  };

  return (
    <div>
      <div>{_render()}</div>
      <div className="">{_showNodata()}</div>;
    </div>
  );
};

const mapStateToProps = (state) => {
  return { List: state.flightList, noDataFlag: state.noDataFlag };
};

export default connect(mapStateToProps)(FlightList);
