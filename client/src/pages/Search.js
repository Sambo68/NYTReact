import React, {Component} from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    topic: "",
    startYear: (new Date()).getFullYear(),
    endYear: (new Date()).getFullYear(),
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    // API.getBaseBreedsList()
    //   .then(res => this.setState({ breeds: res.data.message }))
    //   .catch(err => console.log(err));
  }

  handleInputChange = event => {
    // this.setState({ search: event.target.value });
    console.log("name:  " + event.target.name);
    console.log("value: " + event.target.value);

    this.setState({[event.target.name]: event.target.value});
  };

  handleFormSubmit = event => {
    console.log("handleFormSubmit");
    event.preventDefault();
  };

  render()
  {
    return (
      <Container style={{minHeight: "80%"}}>
        <Alert
          type="danger"
          style={{opacity: this.state.error ? 1 : 0, marginBottom: 10}}>
          {this.state.error}
        </Alert>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          state={this.state}
        />
      </Container>
    );
  }
};

export default Search;