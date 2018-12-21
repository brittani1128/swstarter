import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main/Main.js";
import Details from "../pages/Details/Details.js";
import "./App.css";
import API from "../utils/API";
import { AppContext } from "../utils/AppContext";

class App extends React.Component {
  handleSelect = event => {
    this.setState({
      searchQuery: event.target.value
    });
  };

  handleDetails = event => {
    this.setState({ resultIndex: Number(event.target.dataset.index) });
  };

  selectQuery = () => {
    const params = { search: this.state.resultSearchQuery };
    switch (this.state.searchQuery) {
      case "people":
        API.getPeople(params).then(res =>
          this.setState({ searchResults: res.data })
        );
        break;
      case "movies":
        API.getMovies(params).then(res =>
          this.setState({ searchResults: res.data })
        );
        break;
      case "planets":
        API.getPlanets(params).then(res =>
          this.setState({ searchResults: res.data })
        );
        break;
      case "species":
        API.getSpecies(params).then(res =>
          this.setState({ searchResults: res.data })
        );
        break;
      default:
        alert("Please select a search option!");
    }
  };

  handleInputChange = event => {
    this.setState({
      resultSearchQuery: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.selectQuery();
  };

  state = {
    searchResults: [],
    resultSearchQuery: "",
    resultIndex: null,
    searchQuery: "people",
    detailsSelection: "",
    handleSelect: this.handleSelect,
    selectQuery: this.selectQuery,
    handleInputChange: this.handleInputChange,
    handleSubmit: this.handleSubmit,
    handleDetails: this.handleDetails
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <h2>Star Wars Search</h2>
        </header>
        <div className="container">
          <AppContext.Provider value={this.state}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/details" component={Details} />
            </Switch>
          </AppContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
