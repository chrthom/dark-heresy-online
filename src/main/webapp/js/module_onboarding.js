var onboardingCtrl = function($scope, $location, dhAuth, dhConfig, dhInventory, dhProfile, dhStats, dhUtils) {
    $scope.conf = dhConfig;
    $scope.onboarding = {};
    $scope.inventory = {};
    dhInventory.get(function(res) { $scope.inventory = res.data; });
    $scope.profile = {};
    dhProfile.get(function(res) { $scope.profile = res.data; });
    $scope.stats = {};
    dhStats.get(function(res) { $scope.stats = res.data; });

    $scope.proceed0 = function() {
        // Setup profile stub
        $scope.profile = {
            username: dhAuth.username,
            appearance: null,
            bionics: [],
            career: null,
            characteristics: null,
            divination: null,
            gender: dhAuth.gender,
            homeworld: null,
            name: null,
            onboardingStep: 0,
            progress: null,
            psiPowers: [],
            rank: null,
            sanction: null,
            scholastica: null,
            skills: [],
            socialClass: null,
            traits: []
        };
        // Set character name
        $scope.profile.name = $scope.onboarding.name;
        $scope.profile.onboardingStep = 1;
        dhProfile.set($scope.profile, function() { $location.path('/onboarding/1'); });
    };

    $scope.proceed1 = function() {
        // Set homeworld
        $scope.profile.homeworld = $scope.onboarding.origin == 'x' ? dhUtils.getRandomElement($scope.conf.homeworlds.chances) : $scope.onboarding.origin;
        $scope.profile.homeworld = $scope.onboarding.origin == 'x' ? dhUtils.getRandomElement($scope.conf.homeworlds.chances) : $scope.onboarding.origin;
        var homeworld = $scope.conf.homeworlds.attributes[$scope.profile.homeworld];
        // Set starting skills for homeworld
        $scope.profile.skills = [];
        var i;
        for (i = 0; i < $scope.conf.basicSkills.length; i++)
            $scope.profile.skills.push({ key: $scope.conf.basicSkills[i], value: 0 });
        for (i = 0; i < homeworld.basicSkills.length; i++)
            $scope.profile.skills.push({ key: homeworld.basicSkills[i], value: 0 });
        for (i = 0; i < homeworld.skills.length; i++)
            $scope.profile.skills.push({ key: homeworld.skills[i], value: 1 });
        // Set starting traits for homeworld
        $scope.profile.traits = homeworld.traits;
        // Set profile base characteristics for homeworld
        $scope.profile.characteristics = {
            kg : homeworld.kg + dhUtils.roll(10, 2),
            bf : homeworld.bf + dhUtils.roll(10, 2),
            st : homeworld.st + dhUtils.roll(10, 2),
            wi : homeworld.wi + dhUtils.roll(10, 2),
            ge : homeworld.ge + dhUtils.roll(10, 2),
            in : homeworld.in + dhUtils.roll(10, 2),
            wa : homeworld.wa + dhUtils.roll(10, 2),
            wk : homeworld.wk + dhUtils.roll(10, 2),
            ch : homeworld.ch + dhUtils.roll(10, 2)
        };
        // If homeworld specifies socialClass, set it
        if (homeworld.socialclass) $scope.profile.socialClass = homeworld.socialclass;
        // Roll initial career
        rollCareer();
        $scope.profile.onboardingStep = 2;
        dhProfile.set($scope.profile, function() { $location.path('/onboarding/2'); });
    };

    $scope.proceed2 = function() {
        // Starting rank
        $scope.profile.rank = $scope.conf.careers[$scope.profile.career].rank;
        // Set social class except if existing social class (from origin) is better
        if (!$scope.profile.socialClass
                || $scope.conf.socialClasses[$scope.profile.socialClass].income
                        < $scope.conf.socialClasses[$scope.conf.careers[$scope.profile.career].socialclass].income)
            $scope.profile.socialClass = $scope.conf.careers[$scope.profile.career].socialclass;
        // Instantiate progress object
        $scope.profile.progress = {
            fate : null,
            income : $scope.conf.socialClasses[$scope.profile.socialClass].income,
            level : 1,
            wounds : null,
            xp : 0,
            xpFree : 400
        };
        rollFate();
        rollWounds();
        // Instantiate stats
        $scope.stats = {
            username : dhAuth.username,
            madness : $scope.profile.career == 'Gelöschtes Gedächtnis' ? 2 + dhUtils.roll(10) : 0,
            corruption : 0,
            fatigue : 0,
            thrones : null
        };
        rollThrones();
        // Increase characteristics if homeworld is a forge world
        if ($scope.profile.homeworld == 'Fabrikwelt') switch ($scope.profile.career) {
            case 'Abschaum': $scope.profile.characteristics.wa += 4; break;
            case 'Adept': $scope.profile.characteristics.in += 4; break;
            case 'Assassine': $scope.profile.characteristics.ge += 3; break;
            case 'Soldat': $scope.profile.characteristics.bf += 3; break;
            case 'Techpriester': $scope.profile.characteristics.wk += 4; break;
        }
        $scope.profile.onboardingStep = 3;
        dhProfile.set($scope.profile, function() {
            dhStats.set($scope.stats, function() {
                $location.path('/onboarding/3');
            });
        });
    };

    $scope.proceed3 = function() {
        // Import skills from career and choices
        var skills = $scope.conf.careers[$scope.profile.career].skills.filter(dhUtils.isValue);
        skills.push.apply(skills, $scope.onboarding.skills);
        for (var i = 0; i < skills.length; i++) dhUtils.addOrUpdateArray($scope.profile.skills, skills[i], 1);
        // Import traits from career and choices
        $scope.profile.traits = [];
        $scope.profile.traits.push.apply($scope.profile.traits,
            $scope.conf.careers[$scope.profile.career].traits.filter(dhUtils.isValue));
        $scope.profile.traits.push.apply($scope.profile.traits, $scope.onboarding.traits);
        // Initiate empty inventory object
        $scope.inventory = {
            username: dhAuth.username,
            gears: [],
            meleeWeapons: [],
            missileWeapons: []
        };
        // Import weapons from career and choices
        var weapons = $scope.conf.careers[$scope.profile.career].weapons.filter(dhUtils.isValue);
        weapons.push.apply(weapons, $scope.onboarding.weapons);
        weapons.forEach(function(weapon, index, weapons) {
            weapon.quality = 1;
            weapons[index] = weapon;
        });
        $scope.inventory.meleeWeapons.push.apply(
            $scope.inventory.meleeWeapons, weapons.filter(function(w) { return !(w.ammo >= 0); }));
        $scope.inventory.missileWeapons.push.apply(
            $scope.inventory.missileWeapons, weapons.filter(function(w) { return w.ammo >= 0; }));
        // Import gears from career and choices
        $scope.inventory.gears = $scope.conf.careers[$scope.profile.career].gears.filter(dhUtils.isValue);
        $scope.inventory.gears.push.apply($scope.inventory.gears, $scope.onboarding.gears);
        // Import bionics
        $scope.profile.bionics = [];
        var bionics = $scope.conf.careers[$scope.profile.career].bionics;
        if (bionics) for (var i = 0; i < bionics.length; i++)
            $scope.profile.bionics.push({ key: bionics[i], value: 1 });
        // Generate random appearance and divination based on homeworld
        $scope.profile.appearance = {};
        rollAge();
        rollBuild();
        rollEyes();
        rollHair();
        rollSkin();
        // Roll divination
        rollDivination();
        $scope.profile.onboardingStep = 4;
        dhProfile.set($scope.profile, function() {
            dhInventory.set($scope.inventory, function() {
                dhStats.set($scope.stats, function() {
                    $location.path('/onboarding/4');
                });
            });
        });
    };

    $scope.proceed4 = function() {
        // Changing characteristics based on age
        $scope.profile.characteristics.ge += Math.round(7 - $scope.profile.appearance.age / 5);
        $scope.profile.characteristics.wk += Math.round($scope.profile.appearance.age / 5 - 7);
        // Changing characteristics based on build
        var build = $scope.getBuild();
        if (build.ch) $scope.profile.characteristics.ch += build.ch;
        if (build.ge) $scope.profile.characteristics.ge += build.ge;
        if (build.st) $scope.profile.characteristics.st += build.st;
        if (build.wi) $scope.profile.characteristics.wi += build.wi;
        // If character is psiker, roll sanction and reroute to psi power step
        if ($scope.profile.career == 'Imperialer Psioniker') {
            var sanction = dhUtils.getRandomElement($scope.conf.sanction);
            $scope.profile.sanction = sanction.name;
            if (sanction.trait) $scope.profile.traits.push(sanction.trait);
            if (sanction.thrones) $scope.stats.thrones += sanction.thrones;
            if (sanction.madness) $scope.stats.madness += sanction.madness;
            if (sanction.ch) $scope.profile.characteristics.ch += sanction.ch;
            if (sanction.in) $scope.profile.characteristics.in += sanction.in;
            if (sanction.wi) $scope.profile.characteristics.wi += sanction.wi;
            if (sanction.wk) $scope.profile.characteristics.wk += sanction.wk;
            $scope.profile.onboardingStep = 50;
            dhProfile.set($scope.profile, function() {
                dhStats.set($scope.stats, function() {
                    $location.path('/onboarding/50');
                });
            });
        } else {
            $scope.profile.onboardingStep = 99;
            dhProfile.set($scope.profile, function() { $location.path('/onboarding/99'); });
        }
    };

    $scope.proceedPsi = function() {
        // Set psi powers
        $scope.profile.psiPowers = $scope.onboarding.psiPowers;
        // Set scholastica
        $scope.profile.scholastica = {
            key: $scope.onboarding.scholastica,
            value: 0
        };
        $scope.profile.onboardingStep = 99;
        dhProfile.set($scope.profile, function() { $location.path('/onboarding/99'); });
    };

    $scope.proceedDone = function() {
        $scope.stats.fate = $scope.profile.progress.fate;
        $scope.stats.wounds = $scope.profile.progress.wounds;
        $scope.profile.onboardingStep = 100;
        dhProfile.set($scope.profile, function() {
            dhStats.set($scope.stats, function() {
                $location.path('/');
            });
        });
    };

    $scope.colorCode = function(value, low, high) {
        if (value <= low) return 'red';
        else if (value < high) return 'orange';
        return 'green';
    };

    $scope.fileFormat = dhUtils.fileFormat;

    $scope.getBuild = function() {
        return !$scope.profile.appearance ? {} : $scope.conf.build.attributes[$scope.profile.appearance.build][$scope.profile.gender];
    };

    $scope.getDivination = function() {
        if (!$scope.profile.divination) return {};
        else for (var i = 0; i < $scope.conf.divination.length; i++)
            if ($scope.conf.divination[i].text == $scope.profile.divination)
                return $scope.conf.divination[i];
    };

    $scope.getSanction = function() {
        for (var i = 0; i < $scope.conf.sanction.length; i++)
            if ($scope.conf.sanction[i].name == $scope.profile.sanction)
                return $scope.conf.sanction[i];
    };

    $scope.getScenario = getScenario;

    $scope.keys = Object.keys;

    $scope.range = dhUtils.range;

    $scope.round = function(x) {
        return Math.round(x);
    };

    $scope.rerollAge = function() {
        if (!$scope.onboarding.rerolled) rollAge();
        $scope.onboarding.rerolled = true;
    };

    $scope.rerollBuild = function() {
        if (!$scope.onboarding.rerolled) rollBuild();
        $scope.onboarding.rerolled = true;
    };

    $scope.rerollCareer = function() {
        if ($scope.onboarding.careerRerolls > 0) {
            rollCareer($scope);
            $scope.onboarding.careerRerolls--;
        }
    };

    $scope.rerollCharacteristics = function(characteristic) {
        if (!$scope.onboarding.rerolledCharacteristic)
            $scope.profile.characteristics[characteristic] = getScenario()[characteristic] + dhUtils.roll(10, 2);
        $scope.onboarding.rerolledCharacteristic = true;
    };

    $scope.rerollEyes = function() {
        if (!$scope.onboarding.rerolled) rollEyes();
        $scope.onboarding.rerolled = true;
    };

    $scope.rerollFate = function() {
        if (!$scope.onboarding.rerolled) rollFate();
        $scope.onboarding.rerolled = true;
    };

    $scope.rerollHair = function() {
        if (!$scope.onboarding.rerolled) rollHair();
        $scope.onboarding.rerolled = true;
    };

    $scope.rerollSkin = function() {
        if (!$scope.onboarding.rerolled) rollSkin();
        $scope.onboarding.rerolled = true;
    };

    $scope.rerollThrones = function() {
        if (!$scope.onboarding.rerolled) rollThrones();
        $scope.onboarding.rerolled = true;
    };

    $scope.rerollWounds = function() {
        if (!$scope.onboarding.rerolled) rollWounds();
        $scope.onboarding.rerolled = true;
    };

    function getScenario() {
        return $scope.conf.homeworlds.attributes[$scope.profile.homeworld];
    }

    function rollAge() {
        $scope.profile.appearance.age = dhUtils.getRandomElement($scope.conf.age[$scope.profile.homeworld])
            + dhUtils.roll(10) + ($scope.profile.career == 'Imperialer Psioniker' ? dhUtils.roll(10, 3) : 0);
    }

    function rollBuild() {
        $scope.profile.appearance.build = dhUtils.getRandomElement($scope.conf.build.chances[$scope.profile.homeworld]);
        var build = $scope.conf.build.attributes[$scope.profile.appearance.build][$scope.profile.gender];
        $scope.profile.appearance.height = build.height + dhUtils.roll(15) - dhUtils.roll(15);
        $scope.profile.appearance.weight = build.weight + dhUtils.roll(10) - dhUtils.roll(10);
    }

    function rollCareer() {
        $scope.profile.career = dhUtils.getRandomElement(getScenario().careers);
        if ($scope.profile.career == "Sororita" && $scope.profile.gender == "m") rollCareer();
    }

    function rollDivination() {
        var divination = dhUtils.getRandomElement($scope.conf.divination);
        $scope.profile.divination = divination.text;
        if (divination.corruption) $scope.stats.corruption += divination.corruption;
        if (divination.madness) $scope.stats.madness += divination.madness;
        if (divination.fate) $scope.profile.progress.fate += divination.fate;
        if (divination.wounds) $scope.profile.progress.wounds += divination.wounds;
        if (divination.bf) $scope.profile.characteristics.bf += divination.bf;
        if (divination.ch) $scope.profile.characteristics.ch += divination.ch;
        if (divination.ge) $scope.profile.characteristics.ge += divination.ge;
        if (divination.in) $scope.profile.characteristics.in += divination.in;
        if (divination.kg) $scope.profile.characteristics.kg += divination.kg;
        if (divination.st) $scope.profile.characteristics.st += divination.st;
        if (divination.wa) $scope.profile.characteristics.wa += divination.wa;
        if (divination.wi) $scope.profile.characteristics.wi += divination.wi;
        if (divination.wk) $scope.profile.characteristics.wk += divination.wk;
    }

    function rollEyes() {
      $scope.profile.appearance.eyes = dhUtils.getRandomElement($scope.conf.homeworlds.attributes[$scope.profile.homeworld].eyes);
    }

    function rollFate() {
        $scope.profile.progress.fate = dhUtils.getRandomElement(getScenario().fate);
    }

    function rollHair() {
      $scope.profile.appearance.hair = dhUtils.getRandomElement($scope.conf.homeworlds.attributes[$scope.profile.homeworld].hair);
    }

    function rollSkin() {
      $scope.profile.appearance.skin = dhUtils.getRandomElement($scope.conf.homeworlds.attributes[$scope.profile.homeworld].skin);
    }

    function rollThrones() {
      var thrones = $scope.conf.careers[$scope.profile.career].thrones;
      $scope.stats.thrones = thrones.start + dhUtils.roll(10, thrones.dices);
    }

    function rollWounds() {
      $scope.profile.progress.wounds = getScenario().wounds + dhUtils.roll(5);
    }
};