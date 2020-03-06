

var a = ['a', 'b', 'c'];
var b = [1, 2, 3];

function combine(a, b) {
    var c = [];
    for (var i = 0, j = 0; i < a.length, j < b.length; i++ , j++) {
        c.push(a[i]);
        c.push(b[j]);
    }

    return c;
}

var result = combine(['a', 'b', 'c'], [1, 2, 3])

console.log(result);

