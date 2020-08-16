import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import EnquiryDetail from './components/EnquiryManager/EnquiryDetail/EnquiryDetail';
import EnquiryManager from './components/EnquiryManager/EnquiryManager';
import Home from './components/Home/Home';
import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header';
import PageNotFound from './components/shared/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <Header />
            </div>
        </div>

        <div className="col">
            <Switch>
                <Route path="/" exact render={() => <Redirect to="/home" />} />                        
                <Route path="/home" component={ Home } />                        
                <Route path="/enquiries" component={ EnquiryManager } />
                <Route path="/enquiries/:id" component={ EnquiryDetail } />
                <Route path="/**" component={ PageNotFound } />
            </Switch>
        </div>

        <div className="row">
            <div className="col">
                <Footer />
            </div>
        </div>
    </div>
  );
}

export default App;
