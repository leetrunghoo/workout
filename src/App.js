import React, { PureComponent } from 'react';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import theme from './theme/react-toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import WorkoutList from './components/WorkoutList/WorkoutList';
import WorkoutDetail from './containers/WorkoutDetail/WorkoutDetail';

import './theme/react-toolbox/theme.css';
import './theme/styles.css';

class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Layout >
            <Panel>
              <Header toggleDrawerActive={this.toggleDrawerActive} />
              <main>
                <Route exact path="/" component={WorkoutList} />
                <Route path="/:id"  component={WorkoutDetail} />
              </main>
            </Panel>
          </Layout>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
