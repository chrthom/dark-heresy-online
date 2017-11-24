function characterGenerationMethods($scope) {
  $scope.characterGeneration = function(data) {
    characterGeneration($scope, data);
  };
  $scope.rerollAge = function() {
    if ($scope.player.helpers.rerolls) {
      rollAge($scope);
      $scope.player.helpers.rerolls--;
      $scope.player.update();
    }
  };
  $scope.rerollBuild = function() {
    if ($scope.player.helpers.rerolls) {
      rollBuild($scope);
      $scope.player.helpers.rerolls--;
      $scope.player.update();
    }
  };
  $scope.rerollCareer = function() {
    if ($scope.player.helpers.careerRerolls) {
      rollCareer($scope);
      $scope.player.helpers.careerRerolls--;
      $scope.player.update();
    }
  };
  $scope.rerollCharacteristics = function(characteristic) {
    if ($scope.player.helpers.characteristicsRerolls) {
      $scope.player.characteristics[characteristic] = getScenario($scope)[characteristic] + roll(10, 2);
      $scope.player.helpers.characteristicsRerolls--;
      $scope.player.update();
    }
  };
  $scope.rerollEyes = function() {
    if ($scope.player.helpers.rerolls) {
      rollEyes($scope);
      $scope.player.helpers.rerolls--;
      $scope.player.update();
    }
  };
  $scope.rerollFate = function() {
    if ($scope.player.helpers.rerolls) {
      rollFate($scope);
      $scope.player.helpers.rerolls--;
      $scope.player.update();
    }
  };
  $scope.rerollHair = function() {
    if ($scope.player.helpers.rerolls) {
      rollHair($scope);
      $scope.player.helpers.rerolls--;
      $scope.player.update();
    }
  };
  $scope.rerollSkin = function() {
    if ($scope.player.helpers.rerolls) {
      rollSkin($scope);
      $scope.player.helpers.rerolls--;
      $scope.player.update();
    }
  };
  $scope.rerollThrones = function() {
    if ($scope.player.helpers.rerolls) {
      rollThrones($scope);
      $scope.player.helpers.rerolls--;
      $scope.player.update();
    }
  };
  $scope.rerollWounds = function() {
    if ($scope.player.helpers.rerolls) {
      rollWounds($scope);
      $scope.player.helpers.rerolls--;
      $scope.player.update();
    }
  };
  $scope.getBuild = function() {
    return $scope.conf.build.attributes[$scope.player.appearance.build][$scope.player.general.gender];
  };
  $scope.getDivination = function() {
    for (var i = 0; i < $scope.conf.divination.length; i++)
      if ($scope.conf.divination[i].text == $scope.player.general.divination)
        return $scope.conf.divination[i];
  };
  $scope.getHomeworld = function() {
    return getHomeworld($scope);
  };
  $scope.getScenario = function() {
    return getScenario($scope);
  };
}

function characterGeneration($scope, data) {
  switch ($scope.player.helpers.creationStep) {
    case 0:
      $scope.player.general.homeworld = typeof data.homeworld == 'undefined' 
          ? getRandomElement($scope.conf.homeworlds.chances) : data.homeworld;
      if (data.special) 
        $scope.player.helpers.special = true;
      var homeworld = getScenario($scope);
      importHomeworldStats($scope, homeworld);
      importCharacteristics($scope, homeworld);
      if (homeworld.socialclass)
        $scope.player.general.socialClass = homeworld.socialclass;
      rollCareer($scope);
      $scope.player.helpers.characteristicsRerolls = 1;
      $scope.player.helpers.careerRerolls = 2;
      break;
    case 1:
      $scope.player.general.rank = getCareer($scope).rank;
      importMoving($scope);
      if (!$scope.player.general.socialClass 
          || $scope.conf.socialclasses[$scope.player.general.socialClass].income < getCareer($scope).socialclass)
        $scope.player.general.socialClass = getCareer($scope).socialclass;
      importProgress($scope);
      rollFate($scope);
      rollThrones($scope);
      rollWounds($scope);
      $scope.player.helpers.rerolls = 1;
      delete $scope.player.helpers.characteristicsRerolls;
      delete $scope.player.helpers.careerRerolls;
      break;
    case 2:
      importCareer($scope);
      importAppearance($scope);
      rollDivination($scope);
      $scope.player.helpers.rerolls = 2;
      break;
    case 3:
      importBuild($scope);
      $scope.player.stats.fate = $scope.player.progress.fate;
      $scope.player.stats.wounds = $scope.player.progress.wounds;
      $scope.active.gameStatus = 'Spielvorbereitung';
      delete $scope.player.helpers.rerolls;
      if ($scope.player.general.career == 'Imperialer Psioniker') {
        rollSanction($scope);
        $scope.player.appearance.age += roll(10, 3);
        $scope.player.helpers.creationStep = 9;
      } else
        $scope.player.helpers.creationStep = 99;
      break;
    case 10:
      $scope.player.psipowers = $scope.form.psipowers;
      $scope.player.general.scholastica = {
        'class' : $scope.form.scholastica,
        'rank' : $scope.conf.scholastica[$scope.form.scholastica][0]
      }
      $scope.player.helpers.creationStep = 99;
  }
  $scope.player.helpers.creationStep++;
  $scope.player.update();
}

function createPlayer($scope, playerConnector) {
  $scope.player = {
    name : '',
    helpers : {
      creationStep : 0
    },
    game : {
      time : '000979M41',
      hoursLeft : 0,
      location : 'Unbekannter Ort'
    },
    general : {
      gender : $scope.user.gender
    }
  };
  playerConnector.save($scope.player, function(id) {
    $scope.user.player = id2String(id);
    $scope.user.update();
    getPlayer($scope, playerConnector);
  });
}

function getCareer($scope) {
  return $scope.conf.careers[$scope.player.general.career];
}

function getHomeworld($scope) {
  var homeworldName = $scope.player.general.homeworld;
  return $scope.player.helpers.special ? $scope.conf.specialcharacters[homeworldName].homeworld
      : homeworldName;
}

function getScenario($scope) {
  var homeworldName = $scope.player.general.homeworld;
  return $scope.player.helpers.special ? $scope.conf.specialcharacters[homeworldName]
      : $scope.conf.homeworlds.attributes[homeworldName];
}

function importAppearance($scope) {
  var colouration = $scope.conf.colouration[getHomeworld($scope)];
  $scope.player.appearance = {
    'skin' : getRandomElement(colouration.skin),
    'hair' : getRandomElement(colouration.hair),
    'eyes' : getRandomElement(colouration.eyes)
  };
  rollAge($scope);
  rollBuild($scope);
}

function importBuild($scope) {
  var build = $scope.conf.build.attributes[$scope.player.appearance.build][$scope.player.general.gender];
  if (build.ch)
    $scope.player.characteristics.ch += build.ch;
  if (build.ge)
    $scope.player.characteristics.ge += build.ge;
  if (build.st)
    $scope.player.characteristics.st += build.st;
  if (build.wi)
    $scope.player.characteristics.wi += build.wi;
}

function importCareer($scope) {
  var skills = getCareer($scope).skills.filter(isValue);
  skills.push.apply(skills, $scope.form.skills);
  for (i = 0; i < skills.length; i++)
    $scope.player.skills[skills[i]] = 1;
  var traits = getCareer($scope).traits.filter(isValue);
  traits.push.apply(traits, $scope.form.traits);
  for (i = 0; i < traits.length; i++)
    $scope.player.traits.push(traits[i]);
  var weapons = getCareer($scope).weapons.filter(isValue);
  weapons.push.apply(weapons, $scope.form.weapons);
  $scope.player.weapons = weapons;
  var gears = getCareer($scope).gears.filter(isValue);
  gears.push.apply(gears, $scope.form.gears);
  $scope.player.gears = gears;
}

function importCharacteristics($scope, homeworld) {
  $scope.player.characteristics = {
    'kg' : homeworld.kg + roll(10, 2),
    'bf' : homeworld.bf + roll(10, 2),
    'st' : homeworld.st + roll(10, 2),
    'wi' : homeworld.wi + roll(10, 2),
    'ge' : homeworld.ge + roll(10, 2),
    'in' : homeworld.in + roll(10, 2),
    'wa' : homeworld.wa + roll(10, 2),
    'wk' : homeworld.wk + roll(10, 2),
    'ch' : homeworld.ch + roll(10, 2)
  };
}

function importHomeworldStats($scope, homeworld) {
  $scope.player.skills = {};
  var i;
  for (i = 0; i < $scope.conf.basicskills.length; i++)
    $scope.player.skills[$scope.conf.basicskills[i]] = 0;
  for (i = 0; i < homeworld.basicskills.length; i++)
    $scope.player.skills[homeworld.basicskills[i]] = 0;
  for (i = 0; i < homeworld.skills.length; i++)
    $scope.player.skills[homeworld.skills[i]] = 1;
  $scope.player.traits = homeworld.traits;
}

function importMoving($scope) {
  $scope.player.moving = {
    'half' : Math.floor($scope.player.characteristics.ge / 10),
    'full' : Math.floor($scope.player.characteristics.ge / 5),
    'charge' : Math.floor($scope.player.characteristics.ge * 3 / 10),
    'run' : Math.floor($scope.player.characteristics.ge * 2 / 5)
  };
}

function importProgress($scope) {
  $scope.player.progress = {
    'level' : 1,
    'income' : $scope.conf.socialclasses[$scope.player.general.socialClass].income,
    'xp' : (getScenario($scope).costs ? getScenario($scope).costs : 0),
    'xpFree' : 400 - (getScenario($scope).costs ? getScenario($scope).costs : 0)
  };
  $scope.player.stats = {
    'madness' : 0,
    'corruption' : 0,
    'fatigue' : 0
  };
}

function rollAge($scope) {
  $scope.player.appearance.age = getRandomElement(
      $scope.conf.age[getHomeworld($scope)]) + roll(10);
}

function rollBuild($scope) {
  $scope.player.appearance.build = getRandomElement(
      $scope.conf.build.chances[getHomeworld($scope)]);
  var build = $scope.conf.build.attributes[$scope.player.appearance.build][$scope.player.general.gender];
  $scope.player.appearance.height = build.height + roll(15) - roll(15);
  $scope.player.appearance.weight = build.weight + roll(10) - roll(10);
}

function rollCareer($scope) {
  $scope.player.general.career = getRandomElement(getScenario($scope).careers);
  if ($scope.player.general.career == "Sororita" && $scope.player.general.gender == "m")
    rollCareer($scope);
}

function rollDivination($scope) {
  var divination = getRandomElement($scope.conf.divination);
  $scope.player.general.divination = divination.text;
  if (divination.corruption) 
    $scope.player.stats.corruption += divination.corruption;
  if (divination.madness) 
    $scope.player.stats.madness += divination.madness;
  if (divination.fate)
    $scope.player.progress.fate += divination.fate;
  if (divination.wounds)
    $scope.player.progress.wounds += divination.wounds;
  if (divination.bf)
    $scope.player.characteristics.bf += divination.bf;
  if (divination.ch)
    $scope.player.characteristics.ch += divination.ch;
  if (divination.ge)
    $scope.player.characteristics.ge += divination.ge;
  if (divination.in)
    $scope.player.characteristics.in += divination.in;
  if (divination.kg)
    $scope.player.characteristics.kg += divination.kg;
  if (divination.st)
    $scope.player.characteristics.st += divination.st;
  if (divination.wa)
    $scope.player.characteristics.wa += divination.wa;
  if (divination.wi)
    $scope.player.characteristics.wi += divination.wi;
  if (divination.wk)
    $scope.player.characteristics.wk += divination.wk;
}

function rollFate($scope) {
  $scope.player.progress.fate = getRandomElement(getScenario($scope).fate);
}

function rollEyes($scope) {
  $scope.player.appearance.eyes = getRandomElement(
      $scope.conf.colouration[getHomeworld($scope)].eyes);
}

function rollHair($scope) {
  $scope.player.appearance.hair = getRandomElement(
      $scope.conf.colouration[getHomeworld($scope)].hair);
}

function rollSanction($scope) {
  var sanction = getRandomElement($scope.conf.sanctions);
  $scope.player.general.sanction = sanction;
  if (sanction.trait)
    $scope.player.traits.push(sanction.trait);
  if (sanction.thrones) 
    $scope.player.stats.thrones += sanction.thrones;
  if (sanction.madness) 
    $scope.player.stats.madness += sanction.madness;
  if (sanction.ch)
    $scope.player.characteristics.ch += sanction.ch;
  if (sanction.in)
    $scope.player.characteristics.in += sanction.in;
  if (sanction.wi)
    $scope.player.characteristics.wi += sanction.wi;
  if (sanction.wk)
    $scope.player.characteristics.wk += sanction.wk;
}

function rollSkin($scope) {
  $scope.player.appearance.skin = getRandomElement(
      $scope.conf.colouration[getHomeworld($scope)].skin);
}

function rollThrones($scope) {
  var thrones = getCareer($scope).thrones;
  $scope.player.stats.thrones = thrones.start + roll(10, thrones.dices);
}

function rollWounds($scope) {
  $scope.player.progress.wounds = getScenario($scope).wounds + roll(5);
}
