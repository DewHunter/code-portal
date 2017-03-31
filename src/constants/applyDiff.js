const applyDiff = (diff,value) => {
    var second;
    var first = value.substring(0, diff.left);
    if (diff.mode === 'add') {
        second = value.substring(diff.left, value.length);
        return first.concat(diff.change, second);
    } else if (diff.mode === 'delete') {
        second = value.substring(diff.left+diff.change.length, value.length);
        return first.concat(second);
    } else if (diff.mode === 'replace') {
        return diff.change;
    }
}

export default applyDiff;
