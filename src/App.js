import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import Editor from './components/Editor';
import EditorSettings from './constants/editor-settings';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import DropDownMenu from 'material-ui/DropDownMenu';
import Toggle from 'material-ui/Toggle';
import AutoComplete from 'material-ui/AutoComplete';

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

const themeStyle = {
    float: 'right',
    padding: 0,
    width: 180
};

const themeLabel = {
    float: 'left',
    margin: 5
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettingsMenu: false,
      editorTheme: 'monokai',
      editorMode: "javascript",
      editorFontSize: 16,
      editorWrap: true,
      editorShowGutter: true,
      editorShowInvisibles: false,
      editorDisplayIndentGuides: true,
      editorHighlightActiveLine: true
    };
  }

  handleSettingsToggle = () => {
    this.setState({showSettingsMenu: !this.state.showSettingsMenu});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">
          <AppBar
            title="Code Portal"
            showMenuIconButton={false}
            iconElementRight={
              <IconButton
                tooltip='Editor Settings'
                onTouchTap={this.handleSettingsToggle}
                touch={true}
                tooltipPosition="bottom-left"
                iconClassName="muidocs-icon-custom-github" />
            }
          />
          <Editor
            mode={this.state.editorMode}
            theme={this.state.editorTheme}
            fontSize={this.state.editorFontSize}
            wrap={this.state.editorWrap}
            autoComp={this.state.autoComp}
            showGutter={this.state.editorShowGutter}
            showInvisibles={this.state.editorShowInvisibles}
            displayIndentGuides={this.state.editorDisplayIndentGuides}
            highlightActiveLine={this.state.editorHighlightActiveLine}
          />
          <Drawer
            width={300}
            openSecondary={true}
            open={this.state.showSettingsMenu}>
            <AppBar
                title='Settings'
                iconElementLeft={
                <IconButton>
                    <NavigationClose onTouchTap={this.handleSettingsToggle}/>
                </IconButton>
                }
            />
            <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                    <TableRow>
                    <TableRowColumn>
                        <AutoComplete
                            onNewRequest={(chosenRequest, index) => {
                                this.setState({editorMode: chosenRequest});
                            }}
                            searchText={this.state.editorMode}
                            floatingLabelText="Syntax Highlighter"
                            filter={AutoComplete.fuzzyFilter}
                            dataSource={EditorSettings.langs}
                            maxSearchResults={10}
                        />
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                    <TableRowColumn>
                        <span style={themeLabel}><h3>Theme</h3></span>
                        <DropDownMenu
                            style={themeStyle}
                            autoWidth={false}
                            value={this.state.editorTheme}
                            onChange={(event, index, value) => {this.setState({editorTheme: value});}}>
                            {EditorSettings.themes}
                        </DropDownMenu>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>
                            <Toggle
                                labelPosition="left"
                                label="Line Wrap"
                                toggled={this.state.editorWrap}
                                onToggle={(event, isInputChecked) => {
                                  this.setState({editorWrap: isInputChecked});
                                }}
                            />
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>
                            <Toggle
                                labelPosition="left"
                                label="Show Indent Lines"
                                toggled={this.state.editorDisplayIndentGuides}
                                onToggle={(event, isInputChecked) => {
                                  this.setState({editorDisplayIndentGuides: isInputChecked});
                                }}
                            />
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>
                            <Toggle
                                labelPosition="left"
                                label="Highlight Active Line"
                                toggled={this.state.editorHighlightActiveLine}
                                onToggle={(event, isInputChecked) => {
                                  this.setState({editorHighlightActiveLine: isInputChecked});
                                }}
                            />
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>
                            <Toggle
                                labelPosition="left"
                                label="Show Invisibles"
                                toggled={this.state.editorShowInvisibles}
                                onToggle={(event, isInputChecked) => {
                                  this.setState({editorShowInvisibles: isInputChecked});
                                }}
                            />
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>
                            <Toggle
                                labelPosition="left"
                                label="Show Gutter"
                                toggled={this.state.editorShowGutter}
                                onToggle={(event, isInputChecked) => {
                                  this.setState({editorShowGutter: isInputChecked});
                                }}
                            />
                        </TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
