import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import EditorSettings from '../constants/editor-settings';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import DropDownMenu from 'material-ui/DropDownMenu';
import Toggle from 'material-ui/Toggle';
import AutoComplete from 'material-ui/AutoComplete';

class SettingsDrawer extends Component {
    render() {
        return (
            <Drawer width={300} openSecondary={true} open={this.props.open}>
                <AppBar
                    title='Settings'
                    iconElementLeft={
                        <IconButton>
                            <NavigationClose onTouchTap={this.props.onCloseDrawer}/>
                        </IconButton>
                    }
                />
                <Table selectable={false}>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow>
                            <TableRowColumn>
                                <span style={{margin: 0,'marginBottom':0}}><h3>Search for your language</h3></span>
                                <AutoComplete
                                    searchText={this.props.mode}
                                    onNewRequest={this.props.onModeEnter}
                                    style={{margin:0, padding: 0}}
                                    floatingLabelText="javascript by default..."
                                    filter={AutoComplete.fuzzyFilter}
                                    dataSource={EditorSettings.langs}
                                    maxSearchResults={10}
                                />
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>
                                <span style={{float: 'left', margin: 5}}><h3>Theme</h3></span>
                                <DropDownMenu
                                    style={{float:'right',padding:0,width:180}}
                                    autoWidth={false}
                                    value={this.props.editorTheme}
                                    onChange={this.props.onEditorThemeChange}>
                                        {EditorSettings.themes}
                                </DropDownMenu>
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>
                                <Toggle
                                    labelPosition="left"
                                    label="Line Wrap"
                                    toggled={this.props.editorWrap}
                                    onToggle={this.props.onEditorWrapToggle}
                                />
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>
                                <Toggle
                                    labelPosition="left"
                                    label="Show Indent Lines"
                                    toggled={this.props.editorDisplayIndentGuides}
                                    onToggle={this.props.onIndentLinesToggle}
                                />
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>
                                <Toggle
                                    labelPosition="left"
                                    label="Highlight Active Line"
                                    toggled={this.props.editorHighlightActiveLine}
                                    onToggle={this.props.onHighlightLineToggle}
                                />
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>
                                <Toggle
                                    labelPosition="left"
                                    label="Show Invisibles"
                                    toggled={this.props.editorShowInvisibles}
                                    onToggle={this.props.onShowInvisiblesToggle}
                                />
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>
                                <Toggle
                                    labelPosition="left"
                                    label="Show Gutter"
                                    toggled={this.props.editorShowGutter}
                                    onToggle={this.props.onShowGutterToggle}
                                />
                            </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Drawer>
        );
    }
}

export default SettingsDrawer;