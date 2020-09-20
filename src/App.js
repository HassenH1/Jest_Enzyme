import React from "react";
import Header from "./components/header";
import "./App.scss";
import Headline from "./components/headline";

const temp = [
  {
    fName: "hasse",
    lName: "hassen",
    email: "hassen@yahoo.com",
    age: 27,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          description="click the button to render posts"
          tempRay={temp}
        />
      </section>
    </div>
  );
}

export default App;
