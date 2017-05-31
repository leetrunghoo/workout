import React, { Component } from 'react';
import Header from './components/Header/Header';
import WorkoutList from './components/WorkoutList/WorkoutList';
import theme from './theme/react-toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './theme/react-toolbox/theme.css';
import './theme/styles.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div >
          <Header />
          <WorkoutList />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
