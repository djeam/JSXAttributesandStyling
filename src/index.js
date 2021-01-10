import React from "react";
import ReactDOM from "react-dom";

const pic1 = "https://picsum.photos/200";
const pic2 = "https://picsum.photos/200/300";

ReactDOM.render(
  <div>
    <h1>Two from Lorem Picsum</h1>
    <img alt="Random" className="random-img" src={pic1 + "?grayscale"} />
    <img alt="Random" className="random-img" src={pic2 + "?blur=2"} />
  </div>,
  document.getElementById("root")
);
