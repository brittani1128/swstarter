import axios from "axios";

// API routes
export default {
  getPeople: function(params) {
    return axios.get("/api/people", { params });
  },
  getPerson: function(id) {
    return axios.get("/api/person/", { params: id });
  },
  getMovies: function(params) {
    return axios.get("/api/movies", { params });
  },
  getMovie: function(id) {
    return axios.get(`/api/movie/${id}`);
  },
  getPlanets: function(params) {
    return axios.get("/api/planets", { params });
  },
  getSpecies: function(params) {
    return axios.get("/api/species", { params });
  }
};
