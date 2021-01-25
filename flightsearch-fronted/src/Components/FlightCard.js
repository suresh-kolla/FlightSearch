import React from "react";

export default function flightCard({ flight, SNO }) {
  return (
    <tr>
      <th scope="row">{SNO}</th>
      <td>{flight.Flight_Name}</td>
      <td>{flight.Airline_Name}</td>
      <td>{flight.Duration}</td>
      <td>{flight.Price}</td>
    </tr>
  );
}
