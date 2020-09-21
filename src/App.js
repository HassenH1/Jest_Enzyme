import React, { Component } from "react";
import Header from "./components/header";
import "./App.scss";
import Headline from "./components/headline";
import ListItem from "./components/listitem/index";
import SharedButton from "./components/button/index";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/index";

const temp = [
  {
    fName: "hasse",
    lName: "hassen",
    email: "hassen@yahoo.com",
    age: 27,
    onlineStatus: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: "get posts",
      emitEvent: this.fetch,
    };

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            description="click the button to render posts"
            tempRay={temp}
          />
          <SharedButton {...configButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  description: body,
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);

//video 6 - at 44:38
