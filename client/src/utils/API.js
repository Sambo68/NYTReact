import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getArticles(topic,startYear,endYear,n=5) {
    return axios.get(`/api/articles/${topic}/${startYear}/${endYear}/${n}`);
  }
};