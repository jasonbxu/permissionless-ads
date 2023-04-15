var svg = document.getElementById('svg');
var curve = document.getElementById('curve');

/* N - size of hilbert curve,
 * N must be power of 2;
 *
 * hindex - number between 0..(N*N-1)
 *
 * returns coords [x, y] of hindex'th point of the curve
 */
function hindex2xy(hindex, N) {
    var positions = [
    /* 0: */ [0, 0],
    /* 1: */ [0, 1],
    /* 2: */ [1, 1],
    /* 3: */ [1, 0]
    ];

    var tmp = positions[last2bits(hindex)];
    hindex = (hindex >> 2);

    var x = tmp[0];
    var y = tmp[1];

    for (var n = 4; n <= N; n *= 2) {
        var n2 = n / 2;

        last2 = last2bits(hindex);

        if (0 == last2) { // left-bottom 
            tmp = x; x = y; y = tmp;
        }
        else if (1 == last2) { //left-top
            x = x;
            y = y + n2;
        }
        else if (2 == last2) { //right-top
            x = x + n2;
            y = y + n2;
        }
        else if (3 == last2) { //right-bottom
            tmp = y;
            y = (n2-1) - x;
            x = (n2-1) - tmp;
            x = x + n2;
        }

        hindex = (hindex >> 2);
    }

    return [x, y];

    function last2bits(x) { return (x & 3); }
}

function hilbertDemo(canvas, size, N, I) {
    var prev = [0, 0],
        curr;

    var blockSize = Math.floor(size / N);
    var offset = blockSize/2;

    for (var i = 0; i < N*N && i < I; i += 1) {
        var color = 'hsl(' + Math.floor(i*360/(N*N)) + ', 100%, 50%)';

        curr = hindex2xy(i, N);

        line(prev, curr);
        dot(curr, color);

        prev = curr;
    }

    function dot(point, color) {
        var r = 5;
        var x = point[0], y = point[1];

        circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
        circle.setAttribute('cx',x*blockSize+offset);
        circle.setAttribute('cy',y*blockSize+offset);
        circle.setAttribute('r',2);
        circle.setAttribute('style','fill:'+color+';stroke:none');
        svg.appendChild(circle);
    }

    function line(from, to) {
        var off = offset;
        curve.setAttribute('points', curve.getAttribute('points')+' '+(to[0]*blockSize+off)+','+(to[1]*blockSize+off));
    }
}
