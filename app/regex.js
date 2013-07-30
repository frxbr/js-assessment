if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (/\d/).test(str);
    },

    containsRepeatingLetter : function(str) {
        // Since this is a *JavaScript* assessment and not a RegEx one.
        // I shamelessly cheated looking for the corrent expression for this one.
        // http://stackoverflow.com/questions/178837/how-can-i-find-repeated-letters-with-a-perl-regex
        return (/([a-zA-Z])\1+/).test(str);
    },

    endsWithVowel : function(str) {
        return (/[aAeEiIoOuU]$/).test(str);
    },

    captureThreeNumbers : function(str) {
        var ret = false;
        var regex = (/\d{3}/);

        if (regex.test(str)) {
            ret = regex.exec(str)[0];
        }

        return ret;
    },

    matchesPattern : function(str) {
        var pattern = (/^\d{3}-\d{3}-\d{4}$/);

        return pattern.test(str);
    },
    isUSD : function(str) {
        // This can probably be made better.
        var usdPattern = /^(\$\d{1,3},?)(\d{3},?)*(\.\d{2})?$/

        return usdPattern.test(str);
    }
  };
});
