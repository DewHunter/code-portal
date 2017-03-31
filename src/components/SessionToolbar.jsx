import React, { Component } from 'react'
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

const toolStyle = {
    backgroundColor: '#8BC34A'
}

class SessionToolbar extends Component {
    render() {
        return (
            <Toolbar style={toolStyle}>
                <ToolbarGroup>
                <span>You are now Live!</span>
                <FontIcon className="muidocs-icon-custom-sort" />
                <ToolbarSeparator />
                <span>{this.props.shareLink}</span>
                <ToolbarSeparator />
                <RaisedButton
                    onTouchTap={this.props.stopSession}
                    label="Stop"/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default SessionToolbar;