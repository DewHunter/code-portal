import { SET_PEER_OBJ, SET_MY_ID, ADD_PEER_CONN, KILL_SESSION, DISCONNECT_PEER } from '../actions';

const _id = '?id=';
const _wacks = '//';

// TODO: Use an immutable hashmap in the future
const peers = (state = [], action) => {
    switch (action.type) {
        case ADD_PEER_CONN:
            return [
                ...state,
                {
                    pId: action.id,
                    conn: action.conn
                }
            ]
        case DISCONNECT_PEER:
            return state.slice().filter((peerCon) => {
                if (peerCon.pId === action.id) {
                    peerCon.conn.close();
                    return false;
                } else {
                    return true;
                }
            });
        case KILL_SESSION:
            state.forEach((p) => p.conn.close());
            return [];
        default:
            return state;
    }
}

const peerSystem = (state = {}, action) => {
    switch (action.type) {
        case KILL_SESSION:
            console.log('Killing Session...');
            return {
                peerObj: undefined,
                myId: undefined,
                peers: peers(state.peers, action),
                shareLink: undefined
            }
        case SET_PEER_OBJ:
            return {
                peerObj: action.peer,
                myId: undefined,
                peers: peers(undefined, action),
                shareLink: undefined
            }
        case SET_MY_ID:
            console.log((action.asHost && action.uObj !== undefined) ?
                    action.uObj.protocol.concat(_wacks, action.uObj.host, _id, action.id) :
                    'You are connected to your friend!');
            return Object.assign({}, state, {
                myId: action.id,
                shareLink: (action.asHost && action.uObj !== undefined) ?
                    action.uObj.protocol.concat(_wacks, action.uObj.host, _id, action.id) :
                    'You are connected to your friend!'
            });
        case DISCONNECT_PEER:
        case ADD_PEER_CONN:
            return Object.assign({}, state, {
                peers: peers(state.peers, action)
            });
        default:
            return state;
    }
}

export default peerSystem;
