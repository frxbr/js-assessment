if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var idx = -1;

        for (var i = 0, len = arr.length; i < len; i++) {
            var cur = arr[i];

            if (cur === item) {
                idx = i;
            }
        }

        return idx;
    },

    sum : function(arr) {
        // This will not work if the browser does not implement Array#reduce.
        return arr.reduce(function (prev, curr) {
            return prev + curr;
        });
    },

    remove : function(arr, item) {
        // According to the test I should remove ALL repetitions of the item.
        for (var i = 0, len = arr.length; i < len; i++) {
            var curr = arr[i];

            if (curr === item) {
                arr.splice(i, 1);
            }
        }

        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        arr.forEach(function (curr, idx) {
            if (curr === item) {
                arr.splice(idx, 1);
            }
        });
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);

        return arr;
    },

    truncate : function(arr) {
        arr.pop();

        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);

        return arr;
    },

    curtail : function(arr) {
        arr.shift();

        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);

        return arr;
    },

    count : function(arr, item) {
        var cnt = 0;

        arr.forEach(function (curr) {
            if (curr === item) {
                cnt ++;
            }
        });

        return cnt;
    },

    duplicates : function(arr) {
        var dups = [];

        arr.forEach(function (curr, idx) {
            var withOutCurr = arr.splice(idx, 1);

            var hasSomeLikeCurr = withOutCurr.some(function (c) {
                return curr === c;
            });

            var currInDups = dups.some(function (c) {
                return curr === c;
            });

            if (hasSomeLikeCurr && !currInDups) {
                dups.push(curr);
            }
        });

        return dups;
    },

    square : function(arr) {
        return arr.map(function (curr) {
            return curr * curr;
        });
    },

    findAllOccurrences : function(arr, target) {
        // It should return an array with the index of all occurrences of target.
        var occs = [];

        arr.forEach(function (curr, idx) {
            if (curr === target) {
                occs.push(idx);
            }
        });

        return occs;
    }
  };
});
