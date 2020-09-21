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

const initialState = {
  hideBtn: false,
};

class App extends Component {
  constructor(props) {
    super(props); //@deprecated
    this.state = {
      ...initialState,
    };
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updateState();
  }

  exampleMethod_updateState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn,
    });
  }

  exampleMethod_returnsValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;
    const configButton = {
      buttonText: "get posts",
      emitEvent: this.fetch,
    };

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            description="click the button to render posts"
            tempRay={temp}
          />
          {!hideBtn && <SharedButton {...configButton} />}
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
