import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';

const App = () => {
    return(
        <React.Fragment>
            <Header></Header>
            This is my App
        </React.Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))