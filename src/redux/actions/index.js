/**
 * This is the actions file!
 * 
 * @author Jorge Ramos
 */
import EditorSettings from '../../constants/editor-settings';
import { doc2Str, docDiff } from '../../constants/DocFuncs';
// TODO: migrate out of Peerjs
import Peer from 'peerjs';

export const SET_PEER_OBJ = 'SET_PEER_OBJ';
export const setMePeer = (mePeer) => {
    return {
        type: SET_PEER_OBJ,
        peer: mePeer
    }
}

export const SET_MY_ID = 'SET_MY_ID';
export const setMyId = (id, uObj, asHost) => {
    return {
        type: SET_MY_ID,
        id: id,
        uObj: uObj,
        asHost: asHost
    }
}

export const ADD_PEER_CONN = 'ADD_PEER_CONN';
export const addPeer = (id, conn) => {
    return {
        type: ADD_PEER_CONN,
        id: id,
        conn: conn
    }
}

export const _UPDATE_ = '_UPDATE_';
export const documentUpdate = (data, id) => {
    return {
        type: _UPDATE_,
        id: id,
        data: data
    }
}

export const COMPLETE_UPDATE = 'COMPLETE_UPDATE';
export const updateFromPeer = (id, data) => {
    switch (data.type) {
        case 'completeUpdate':
            return {
                type: COMPLETE_UPDATE,
                id: id,
                newDocStr: data.newDocStr
            }
        case 'updateMe':
            return (dispatch, getState) => {
                getState().peerSystem.peers.forEach((peer) => {
                    if (peer.pId === id) {
                        console.log('Sending full update!');
                        peer.conn.send({
                            type: 'completeUpdate',
                            newDocStr: doc2Str(getState().doc)
                        });
                    }
                });
            }
        default:
            return (dispatch, getState) => {
                // relay data to other members if I am the host!
                if (getState().peerSystem.peers.length > 1) {
                    getState().peerSystem.peers.forEach((peer) => {
                        if (peer.pId !== id) {
                            peer.conn.send(data);
                        }
                    });
                }
                dispatch(documentUpdate(data, id));
            }
    }
}

export const KILL_SESSION = 'KILL_SESSION';
export const killSession = () => {
    return {
        type: KILL_SESSION
    }
}

export const DISCONNECT_PEER = 'DISCONNECT_PEER';
export const disconnectPeer = (peerId) => {
    return {
        type: DISCONNECT_PEER,
        id: peerId
    }
}

export const startSession = (uObj, asHost) => {
    return (dispatch) => {
        var peer = new Peer({key: EditorSettings.peerKey});
        dispatch(setMePeer(peer));
        peer.on('open', function(id) {
            console.log('My peer ID is: ' + id);
            dispatch(setMyId(id, uObj, asHost));
        });
        if (asHost) {
            // Peer requesting to connect
            peer.on('connection', (conn) => {
                console.log('Accepted Connection!', conn);
                conn.on('open', () => {
                    var pId = conn.peer;
                    dispatch(addPeer(pId, conn));
                    conn.on('data', (data) => {
                        dispatch(updateFromPeer(pId, data));
                    });
                    conn.on('close', () => {
                        console.log('Peer disconnected!');
                        dispatch(disconnectPeer(pId));
                    });
                    conn.on('error', (err) => {
                        console.log('Error with peer: '.concat(pId));
                        console.log(err);
                        dispatch(disconnectPeer(pId));
                    });
                });
            });
        }
        // Error with our peer obj
        peer.on('error', (err) => {
            console.log('Error with peer object!');
            console.log(err);
            dispatch(killSession());
        });
        // This is if we are joining a session!
        if (!asHost) {
            var connectTo = uObj.parameters.id;
            var newConn = peer.connect(connectTo);
            newConn.on('open', () => {
                newConn.on('data', (data) => {
                    dispatch(updateFromPeer(connectTo, data));
                });
                newConn.send({type: 'updateMe'});
            });
            newConn.on('close', () => {
                console.log('Peer disconnected!');
                dispatch(disconnectPeer(connectTo));
            });
            newConn.on('error', (err) => {
                console.log('Error with peer: '.concat(connectTo));
                console.log(err);
                dispatch(disconnectPeer(connectTo));
            });
            dispatch(addPeer(connectTo, newConn));
        }
    }
}

export const localUpdate = (newDocStr) => {
    return (dispatch, getState) => {
        let currDoc = getState().doc;
        let data = docDiff(currDoc, newDocStr);
        console.log(data);
        dispatch(documentUpdate(data, undefined));
        if (getState().peerSystem.peers !== undefined &&
            getState().peerSystem.peers.length > 0) {
            getState().peerSystem.peers.forEach((peer) => {
                peer.conn.send(data);
            });
        }
    }
}
