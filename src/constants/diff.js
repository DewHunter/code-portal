const diff = (a,b) => {
    var leftLimit,change,i;
    var cMode = b.length <= a.length ? 'delete' : 'add';
    var big = b.length <= a.length ? a : b;
    var small = big === a ? b : a;
    for (i=0; i <= big.length; i++) {
        if (small[i] !== big[i]) {
            leftLimit = i;
            break;
        }
    }
    change = big.substring(leftLimit, leftLimit+big.length-small.length);
    return {left: leftLimit, mode: cMode, change: change};
}

export default diff;
