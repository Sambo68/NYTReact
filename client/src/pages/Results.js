import React, { Component } from "react";
import API from "../utils/API";

class Results extends Component {
  state = {
    topic: "",
    startYear: (new Date()).getFullYear(),
    endYear: (new Date()).getFullYear(),
    articles: []
  };

  componentDidMount() {
    // Run search and assign results
    console.log("props: " + JSON.stringify(this.props, null, 2));
    console.log("props: " + this.props.match.params.topic);

    const topic = this.props.match.params.topic;
    const startYear = this.props.match.params.startYear;
    const endYear = this.props.match.params.endYear;

    API.getArticles(topic, startYear, endYear)
      .then(res => {
          this.setState(
            {
              articles: res.data,
              topic: topic,
              startYear: startYear,
              endYear: endYear
            })
        }
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // this.setState({ Results: event.target.value });
    console.log("name:  " + event.target.name);
    console.log("value: " + event.target.value);
  };
  // <List>
  //   {this.state.articles.map(article => (
  //     <ListItem key={article._id}>
  //       <Link to={"/articles/" + article._id}>
  //         <strong>
  //           {article.headline}
  //         </strong>
  //       </Link>
  //       {/*<DeleteBtn onClick={() => this.deleteArticle(article._id)} />*/}
  //     </ListItem>
  //   ))}
  //
//  {/*</List>*/}

  render = () => {
    return (
      <div>
        <p>state: {JSON.stringify(this.state, null, 2)}</p>
      </div>);
  }
}

export default Results;