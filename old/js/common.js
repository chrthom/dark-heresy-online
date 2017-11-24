function commonMethods($scope) {
  $scope.colorCode = colorCode;
  $scope.domFormat = domFormat;
  $scope.fileFormat = fileFormat;
  $scope.isArray = isArray;
  $scope.keys = Object.keys;
  $scope.range = range;
}

function colorCode(value, low, high) {
  if (value <= low) return 'red';
  else if (value < high) return 'orange';
  return 'green';
}

function dialogs($scope) {
  $('#dialogs').hide();
  $scope.openDialog = function(dialog, small) {
    if ($('#dialog-' + domFormat(dialog)).length) {
      $('#dialog-' + domFormat(dialog)).dialog({
        title : dialog,
        hide : 'fold',
        show : 'fold',
        width: (small ? '500px' : 'auto'),
        closeText: 'Kontrollfenster schlie&szlig;en',
        position : {
          my : ($('#dialog-' + domFormat(dialog) + ':hidden').length ? 'left top' : 'center'),
          at : 'center',
          of : ($scope.active.menu ? $('#dialog-' + domFormat($scope.active.menu)) : $('.header'))
        },
        open : function(event, ui) {
          if ($scope.menus[dialog]) 
            $scope.menus[dialog].opened = true;
        },
        focus : function(event, ui) {
          $scope.active.menu = dialog;
          $scope.$apply();
        },
        dragStart : function(event, ui) {
          $scope.active.menu = dialog;
          $scope.$apply();
        },
        resizeStart : function(event, ui) {
          $scope.active.menu = dialog;
          $scope.$apply();
        },
        close : function(event, ui) {
          if ($scope.menus[dialog]) 
            $scope.menus[dialog].opened = false;
          if ($scope.active.menu == dialog)
            $scope.active.menu = '';
          $scope.$apply();
        }
      });
    }
  }
}

function domFormat(name) {
  return name.toLowerCase().replace(" ", "-");
}

function fileFormat(name) {
  return name.toLowerCase().replace(" ", "_");
}

function findName(name, target) {
  for (var i = 0; i < target.length; i++)
    if (target[i].name == name)
      return target[i];
}

function getRandomElement(array) {
  return array[roll(array.length)];
}

function id2String(id) {
  var result = "";
  jQuery.each(id, function() {
    if (typeof this == 'object')
      result += this;
  });
  return result;
}

function isArray(obj) {
  return obj instanceof Array;
}

function isValue(obj) {
  return !isArray(obj);
}

function range(from, to, step) {
  step = typeof step == 'undefined' ? 1 : step;
  var result = [];
  for (var i = from; i <= to; i += step)
    result.push(i);
  return result;
}

function roll(sides, dices) {
  dices = typeof dices == 'undefined' ? 1 : dices;
  var sum = 0;
  for (var i = 0; i < dices; i++)
    sum += Math.floor(Math.random() * sides);
  return sum;
}

