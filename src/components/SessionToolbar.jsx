import React, { Component } from 'react'
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

const toolStyle = {
    backgroundColor: '#8BC34A'
}

class SessionToolbar extends Component {
    render() {
        const copyLink = this.props.isHost ?
            <RaisedButton
                onTouchTap={() => {
                    document.querySelector('#share-link').select();
                    try {
                        var successful = document.execCommand('copy');
                        var msg = successful ? 'successful' : 'unsuccessful';
                        console.log('Copying text command was ' + msg);
                    } catch (err) {
                        alert('Oops, unable to copy!\nThis Browser does not support JS clipboard!\nPlease select it manually!');
                    }
                }}
                label="Copy Link!"
            /> : <div />;
        const disconnectString = (this.props.isHost) ? 'Stop Session' : 'Disconnect';
        return (this.props.show) ?
            <Toolbar style={toolStyle}>
                <ToolbarGroup>
                    <span>You are now Live!</span>
                    <FontIcon className="muidocs-icon-custom-sort" />
                    <ToolbarSeparator />
                    <TextField
                        id="share-link"
                        value={this.props.shareLink}
                    />
                    {copyLink}
                    <ToolbarSeparator />
                    <RaisedButton
                        onTouchTap={this.props.stopSession}
                        label={disconnectString}/>
                </ToolbarGroup>
            </Toolbar> :
            <div />;
    }
}

export default SessionToolbar;
