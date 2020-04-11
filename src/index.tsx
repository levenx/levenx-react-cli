import React from 'react';
import ReactDom from 'react-dom';
import Button from './components/Button';
import './index.less';

interface AppProps {

}

interface AppState {

}

class App extends React.Component<AppProps, AppState>{
    state = {

    }

    render() {
        return (
            <Button text="乐闻世界" size="24px" color="gray" />
        )
    }
}

ReactDom.render(<App />, document.getElementById("app"));