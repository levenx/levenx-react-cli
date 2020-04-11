import React from 'react';
import ReactDom from 'react-dom';
import './index.less';


function App() {
    return (
        <div className="app">乐闻世界</div>
    )
}

ReactDom.render(<App />, document.getElementById("app"));