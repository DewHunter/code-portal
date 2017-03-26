import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import Editor from './components/Editor';
import FlatButton from 'material-ui/FlatButton';
import CodeIcon from 'material-ui/svg-icons/action/code';

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
        <div className="container">
          <AppBar
            title="Code Portal"
            showMenuIconButton={false}
            iconElementRight={
                <FlatButton
                    href="https://github.com/DewHunter/code-portal"
                    target="_blank"
                    icon={<CodeIcon />}
                    style={{margin: 5}}
                />
            }
          />
          <Editor />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
