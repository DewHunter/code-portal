import { combineReducers } from 'redux';
import doc from './doc';
import peerSystem from './peerSystem';
// import cursors from './cursors';

const docStore = combineReducers({
    doc,
    peerSystem
});

export default docStore;
