import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import EditorSettings from '../constants/editor-settings';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import DropDownMenu from 'material-ui/DropDownMenu';
import Toggle from 'material-ui/Toggle';

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
                                <span style={{float: 'left', margin: 2}}><h3>Coloring</h3></span>
                                <DropDownMenu
                                    style={{float:'right',padding:0,width:180}}
                                    autoWidth={false}
                                    value={this.props.mode}
                                    onChange={this.props.onModeThemeChange}>
                                        {EditorSettings.langsMenu}
                                </DropDownMenu>
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>
                                <span style={{float: 'left', margin: 2}}><h3>Theme</h3></span>
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