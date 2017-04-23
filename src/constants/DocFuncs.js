import randStr from './randStr';
/**
 * Functions related to Document manipulation
 * NOT DONE!! PLEASE FIX
 * @author Jorge Ramos
 */

export const newDocFromStr = (str) => {
    return str.split('\n').map((line) => {
        return {
            id: randStr(5),
            line: line
        };
    });
}

export const str2Doc = (str) => {
    let lines = str.split('\n');
    let doc = [];
    console.log(lines);
    for (let i = 0; i < lines.length/2; i++) {
        doc[i] = {
            id: lines[i*2],
            line: lines[(i*2)+1]
        };
    }
    return doc;
}

export const doc2Str = (docStruct) => {
    var docStr = '';
    for (let i = 0; i < docStruct.length; i++) {
        docStr = docStr + docStruct[i].id + '\n' + docStruct[i].line + '\n';
    }
    return docStr.substring(0, docStr.length-1);
}

/**
 * Takes the current document in data structure form and the whole new one
 * in string form, and gets the difference.
 * 
 * Could be prettier...
 *
 * @param {*} currStruct
 * @param {*} newDocStr
 */
export const docDiff = (currStruct, newDocStr) => {
    let dIdx = 0;
    let diff = [];
    let docArr = newDocStr.split('\n');
    let type;
    // line change
    if (currStruct.length === docArr.length) {
        type = 'lineUpdate';
        for (let i = 0; i < docArr.length; i++) {
            if (currStruct[i].line !== docArr[i]) {
                diff[dIdx++] = {
                    id: currStruct[i].id,
                    newLine: docArr[i]
                };
            }
        }
    } else if (currStruct.length > docArr.length) { // delete line
        type = 'lineDelete';
        let lineCountDiff = currStruct.length - docArr.length;
        for (let i = 0; i < currStruct.length; i++) {
            if (currStruct[i].line !== docArr[i]) {
                if (currStruct[i+lineCountDiff] !== undefined && currStruct[i+lineCountDiff].line !== docArr[i]) {
                    diff[dIdx++] = {
                        id: currStruct[i].id,
                        line: docArr[i]
                    };
                    i++;
                }
                for (let j = i; j < i+lineCountDiff; j++) {
                    diff[dIdx++] = {
                        id: currStruct[j].id
                    };
                }
                break;
            }
        }
    } else { // new line
        type = 'lineAdd';
        let lineCountDiff = docArr.length - currStruct.length;
        for (let i = 0; i < docArr.length; i++) {
            if (currStruct[i] === undefined || currStruct[i].line !== docArr[i]) {
                if (currStruct[i] !== undefined && currStruct[i].line !== docArr[i+lineCountDiff]) {
                    diff[dIdx++] = {
                        id: currStruct[i].id,
                        line: docArr[i]
                    };
                    i++;
                } else {
                    diff[dIdx++] = {
                        id: (i-1 < 0) ? undefined : currStruct[i-1].id,
                        line: (i-1 < 0) ? undefined : docArr[i-1]
                    };
                }
                for (let j = i; j < i+lineCountDiff; j++) {
                    diff[dIdx++] = {
                        id: randStr(5),
                        line: docArr[j]
                    };
                }
                break;
            }
        }
    }
    return {
        type: type,
        diff: diff
    };
}
