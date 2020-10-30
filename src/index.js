import React from "react";
import ReactDom from "react-dom";
import "./index.less";

function App() {
  return (
    <div className='app'>
      <p>乐闻世界</p>
      <p>
        <a href='https://blog.levenx.com'>https://blog.levenx.com</a>
      </p>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
