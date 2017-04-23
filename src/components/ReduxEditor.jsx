import { connect } from 'react-redux';
import Editor from './Editor';
import {localUpdate, startSession, killSession} from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        isLive: state.peerSystem.myId !== undefined,
        shareLink: state.peerSystem.shareLink,
        docStr: state.doc.map((item) => item.line).join('\n')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLocalDocumentChange: (newDoc) => {
            dispatch(localUpdate(newDoc));
        },
        onStartSession: (uObj, asHost) => {
            dispatch(startSession(uObj, asHost));
        },
        onKillSession: () => {
            dispatch(killSession());
        }
    }
}

const ReduxEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor);

export default ReduxEditor;
