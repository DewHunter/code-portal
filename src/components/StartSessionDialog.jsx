import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class StartSessionDialog extends Component {
    render() {
        return <Dialog
                    title="You are about to start a live session..."
                    actions={[
                        <FlatButton
                            label="I don't want that!"
                            onTouchTap={this.props.onAbort}
                        />,
                        <FlatButton
                            label="Let's Go!"
                            primary={true}
                            onTouchTap={this.props.onGo}
                        />
                    ]}
                    modal={true}
                    open={this.props.open}>
                    Use the link that will show up to let your friends join in!
                </Dialog>
    }
}

export default StartSessionDialog;
