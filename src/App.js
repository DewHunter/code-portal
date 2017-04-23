import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import Editor from './components/ReduxEditor';
import FlatButton from 'material-ui/FlatButton';
import CodeIcon from 'material-ui/svg-icons/action/code';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import docStore from './redux/reducers';

// Thunk lets us nest acions...
let store = createStore(docStore, applyMiddleware(thunkMiddleware));

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme(darkBaseTheme, {
  palette: {
    primary1Color: lightBlue500
  },
  appBar: {
    height: 50
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="Code Portal"
            style={{
              width: '100%',
              height: 50
            }}
            showMenuIconButton={false}
            iconElementRight={
                <FlatButton
                    icon={<CodeIcon />}
                    style={{margin: 5}}
                />
            }
          />
          <Provider store={store}>
            <Editor />
          </Provider>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
