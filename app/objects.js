if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        var ownProps = [];

        for (var propName in obj) {
            if (obj.hasOwnProperty(propName)) {
                ownProps.push(propName + ': ' + obj[propName]);
            }
        }

        return ownProps;
    }
  };
});
