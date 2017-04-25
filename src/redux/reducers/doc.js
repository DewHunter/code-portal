import { _UPDATE_, COMPLETE_UPDATE } from '../actions';
import { newDocFromStr, str2Doc } from '../../constants/DocFuncs';

const WELCOME_DOC_STR = [
    "/**",
    " * Hello and welcome to Code Portal!",
    " *",
    " * Paste your code here, and work on it with your friends",
    " * Use the Gear button to change settings about the editor",
    " * Use the play button to start a session...",
    " * ... and share the link with people to join you and edit this document, LIVE!",
    " *",
    " * @author Jorge",
    " */",
    "export const sayHello = () => {",
    "    console.log('Hello, Welcome to code-portal!');",
    "}",
    ""
].join('\n');

const initialState = newDocFromStr(WELCOME_DOC_STR);

const doc = (state = initialState, action) => {
    switch (action.type) {
        case COMPLETE_UPDATE:
            return str2Doc(action.newDocStr);
        case _UPDATE_:
            var idx = 0;
            switch(action.data.type) {
                case 'lineUpdate':
                    idx = 0;
                    return state.map((item) => {
                        if ((action.data.diff[idx] !== undefined && action.data.diff[idx] !== null) && item.id === action.data.diff[idx].id) {
                            return {
                                id: item.id,
                                line: action.data.diff[idx++].newLine
                            };
                        } else {
                            return item;
                        }
                    });
                case 'lineDelete':
                    idx = 0;
                    return state.map((item) => {
                        if ((action.data.diff[idx] !== undefined && action.data.diff[idx] !== null) && item.id === action.data.diff[idx].id) {
                            if (action.data.diff[idx].line !== undefined && action.data.diff[idx].line !== null) {
                                return {
                                    id: item.id,
                                    line: action.data.diff[idx++].line
                                };
                            } else {
                                idx++;
                                return undefined;
                            }
                        } else {
                            return item;
                        }
                    }).filter((item) => item !== undefined);
                case 'lineAdd':
                    let topIdx;
                    let nLines = [];
                    for (let i = 0; i < state.length; i++) {
                        if (action.data.diff[0].id === undefined || action.data.diff[0].id === null || state[i].id === action.data.diff[0].id) {
                            topIdx = i;
                            break;
                        }
                    }
                    idx = 0;
                    for (let i = 0; i < action.data.diff.length; i++) {
                        if (action.data.diff[i].id !== undefined && action.data.diff[i].id !== null) {
                            nLines[idx++] = {
                                id: action.data.diff[i].id,
                                line: action.data.diff[i].line
                            };
                        }
                    }
                    if (action.data.diff[0].id !== undefined && action.data.diff[0].id !== null) {
                        return [
                            ...state.slice(0, topIdx),
                            ...nLines,
                            ...state.slice(topIdx+1)
                        ];
                    } else {
                        return [
                            ...nLines,
                            ...state.slice(0)
                        ];
                    }
                default:
                    return state;
            }
        default:
            return state;
    }
}

export default doc;
