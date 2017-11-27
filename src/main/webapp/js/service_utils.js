var utilsService = function() {
    return {
        findName: function(name, target) {
          for (var i = 0; i < target.length; i++)
            if (target[i].name == name)
              return target[i];
        },
        getRandomElement: function(array) {
          return array[Math.floor(Math.random() * array.length)];
        },
        id2String: function(id) {
          var result = "";
          jQuery.each(id, function() {
            if (typeof this == 'object')
              result += this;
          });
          return result;
        },
        isArray: function(obj) {
          return obj instanceof Array;
        },
        isValue: function(obj) {
          return !isArray(obj);
        },
        range: function(from, to, step) {
          step = typeof step == 'undefined' ? 1 : step;
          var result = [];
          for (var i = from; i <= to; i += step)
            result.push(i);
          return result;
        },
        roll: function(sides, dices) {
          dices = typeof dices == 'undefined' ? 1 : dices;
          var sum = 0;
          for (var i = 0; i < dices; i++)
            sum += Math.floor(Math.random() * sides);
          return sum;
        }
    };
};