import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchFlight, fetchFlights } from "../actions";
import { Button, Form, Col } from "react-bootstrap";

class FlightSearch extends React.Component {
  state = {
    SourceCity: "",
    DestinationCity: "",
    TravelDate: "",
    ReturnDate: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.SourceCity === "" || this.state.DestinationCity === "") {
      alert("Please fill mandatory fileds");
    } else {
      // this.props.pushData(this.state);
      this.props.searchFlight(this.state);
      this.props.fetchFlights(this.state);
    }
  };

  render() {
    return (
      <div data-test="component-search">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="SourceCity">
              <Form.Label>
                Source City
                <span className="text-danger"> *</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Source city"
                value={this.state.SourceCity}
                onChange={(e) => this.setState({ SourceCity: e.target.value })}
                required
              />
              <Form.Text className="text-muted">
                Please enter the Source City name
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId=" DestinationCity">
              <Form.Label>
                Destination city
                <span className="text-danger"> *</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Destination City"
                value={this.state.DestinationCity}
                onChange={(e) =>
                  this.setState({ DestinationCity: e.target.value })
                }
              />
              <Form.Text className="text-muted">
                Please enter the Destination City name
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="TravelDate ">
              <Form.Label>Travel Date</Form.Label>
              <Form.Control
                type="Date"
                placeholder="dd-mm-yyyy"
                value={this.state.TravelDate}
                onChange={(e) => this.setState({ TravelDate: e.target.value })}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="ReturnDate">
              <Form.Label>Return Date</Form.Label>
              <Form.Control
                type="Date"
                value={this.state.ReturnDate}
                onChange={(e) => this.setState({ ReturnDate: e.target.value })}
              />
            </Form.Group>
          </Form.Row>
          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" onClick={this.onFormSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

FlightSearch.propTypes = {
  SourceCity: PropTypes.string,
  DestinationCity: PropTypes.string,
  TravelDate: PropTypes.string,
  ReturnDate: PropTypes.string,
};
const mapStateToProps = (state) => {
  return { search: state.search, flightList: state.flightList };
};
export default connect(mapStateToProps, { searchFlight, fetchFlights })(
  FlightSearch
);
