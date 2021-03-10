import React from 'react';
import './App.css';
import { useHistory } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { TestPage } from 'pages/Test';

function App() {
  const history = useHistory();

  React.useEffect(() => {
    /**
     * checking window location pathname
     * when the location changes with OUTER code, updates the
     * internal state of location history
     *
     * this allows the react app/module to listen to route changes
     * when living alongisde with e.g. VUE app
     */
    const locationCheckInterval = setInterval(() => {
      if (window.location.pathname !== history.location.pathname) {
        console.log('pathanme diff');
        history.push(window.location);
      }
    }, 10);

    return () => {
      clearInterval(locationCheckInterval);
    };
  }, [history]);

  return (
    <>
      <Switch>
        <Route path="/test" component={TestPage} />
      </Switch>
    </>
  );
}

export default App;
