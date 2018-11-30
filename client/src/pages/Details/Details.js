import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";

class Details extends React.Component {
  render() {
    return (
      <div className="details-wrapper">
        <h3 id="title">Boba Fett</h3>
        <div className="info">
          <div className="details">
            <h4>Details</h4>
            <hr />
          </div>
          <div className="movies">
            <h4>Movies</h4>
            <hr />
          </div>
        </div>
        <Link to={"./"}>
          <button id="back-btn" variant="raised">
            Back to Search
          </button>
        </Link>
      </div>
    );
  }
}

export default Details;
