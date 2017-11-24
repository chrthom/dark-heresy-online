function loadConstants($scope) {
  $scope.menus = {
    "GM" : {
      "tabs" : [
        "Chat",
        "Offene Anfragen"
      ],
      "submenus" : []
    },
    "Profil" : {
      "tabs" : [
        "Basis",
        "Fähigkeiten",
        "Verschiedenes"
      ],
      "submenus" : [
        "Karriere",
        "Training"
      ]
    }, 
    "Zeitplan" : {
      "submenus" : [],
    }, 
    "Wissen" : {
      "tabs" : [
        "Enzyklopädie",
        "Logbuch",
        "Notizen"
      ],
      "submenus" : []
    }, 
    "Karte" : {
      "tabs" : [
        "Umgebung",
        "Planet"
      ],
      "submenus" : [
        "Transport",
        "Unterkunft",
        "Markt",
        "Ermittlung"
      ]
    }, 
    "Inventar" : {
      "tabs" : [
        "Gepäck",
        "Waffen"
      ],
      "submenus" : [
        "Rüstung"
      ]
    }
  };
  $scope.abbr = {
    "m" : 'männlich',
    "f" : "weiblich"
  };
}

function loadConfig($scope, $http) {
  $scope.conf = {};
  $http.get('conf/age.json').then(function(res){
    $scope.conf.age = res.data;
  });
  $http.get('conf/armour.json').then(function(res){
    $scope.conf.armour = res.data;
  });
  $http.get('conf/basicskills.json').then(function(res){
    $scope.conf.basicskills = res.data;
  });
  $http.get('conf/build.json').then(function(res){
    $scope.conf.build = res.data;
  });
  $http.get('conf/careers.json').then(function(res){
    $scope.conf.careers = res.data;
  });
  $http.get('conf/colouration.json').then(function(res){
    $scope.conf.colouration = res.data;
  });
  $http.get('conf/divination.json').then(function(res){
    $scope.conf.divination = res.data;
  });
  $http.get('conf/homeworlds.json').then(function(res){
    $scope.conf.homeworlds = res.data;
  });
  $http.get('conf/meleeweapons.json').then(function(res){
    $scope.conf.meleeweapons = res.data;
  });
  $http.get('conf/missileweapons.json').then(function(res){
    $scope.conf.missileweapons = res.data;
  });
  $http.get('conf/psi.json').then(function(res){
    $scope.conf.psi = res.data;
  });
  $http.get('conf/ranks.json').then(function(res){
    $scope.conf.ranks = res.data;
  });
  $http.get('conf/sanction.json').then(function(res){
    $scope.conf.sanctions = res.data;
  });
  $http.get('conf/scholastica.json').then(function(res){
    $scope.conf.scholastica = res.data;
  });
  $http.get('conf/skills.json').then(function(res){
    $scope.conf.skills = res.data;
  });
  $http.get('conf/socialclasses.json').then(function(res){
    $scope.conf.socialclasses = res.data;
  });
  $http.get('conf/specialcharacters.json').then(function(res){
    $scope.conf.specialcharacters = res.data;
  });
  $http.get('conf/traits.json').then(function(res){
    $scope.conf.traits = res.data;
  });
}

function buildModel($resource, collection) {
  var DHModel = $resource('jaxrs/' + collection + '/:id', {
  }, {
    update : {
      method : 'PUT'
    }
  });
  DHModel.prototype.update = function(cb) {
    return DHModel.update({
      id : this._id.$oid
    }, angular.extend({}, this, {
      _id : undefined
    }), cb);
  };
  DHModel.prototype.destroy = function(cb) {
    return DHModel.remove({
      id : this._id.$oid
    }, cb);
  };
  return DHModel;
}

angular.module('dhonlinemodels', [
  'ngResource'
]).factory('userConnector', function($resource) {
  return buildModel($resource, 'users');
}).factory('playerConnector', function($resource) {
  return buildModel($resource, 'players');
});
