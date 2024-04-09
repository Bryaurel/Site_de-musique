import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MonCompte from './mon_compte';
import Cours from './cours';
import Exercices from './exercices';
import Opportunites from './opportunities';
import Messages from './messages';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MonCompte} />
                <Route exact path="/cours" component={Cours} />
                <Route exact path="/exercices" component={Exercices} />
                <Route exact path="/opportunites" component={Opportunites} />
                <Route exact path="/messages" component={Messages} />
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));