var onboardingCtrl = function($scope, $location, dhAuth, dhConfig, dhProfile, dhUtils) {
    $scope.pageTile = 'Charaktererstellung';
    $scope.conf = dhConfig;

    $scope.onboarding = {};
    $scope.profile = {};
    dhProfile.get(function(res) { $scope.profile = res.data });

    $scope.proceed0 = function() {
        // Setup profile stub
        $scope.profile = {
            username: dhAuth.username,
            appearance: null,
            career: null,
            characteristics: null,
            divination: null,
            gender: dhAuth.gender,
            homeworld: null,
            movement: null,
            name: null,
            progress: null,
            psiPowers: [],
            rank: null,
            sanction: null,
            scholastica: null,
            skills: [],
            socialClass: null,
            stats: null,
            traits: []
        };
        // Set character name
        $scope.profile.name = $scope.onboarding.name;
        dhProfile.set($scope.profile, function() { $location.path('/onboarding/1') });
    };

    $scope.proceed1 = function() {
        // Set homeworld
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
        dhProfile.set($scope.profile, function() { $location.path('/onboarding/2') });
    };

    $scope.proceed2 = function() {
        // Starting rank
        $scope.profile.rank = $scope.conf.careers[$scope.profile.career].rank;
        // Movement based on characteristics
        $scope.profile.movement = {
            half : Math.floor($scope.profile.characteristics.ge / 10),
            full : Math.floor($scope.profile.characteristics.ge / 5),
            charge : Math.floor($scope.profile.characteristics.ge * 3 / 10),
            run : Math.floor($scope.profile.characteristics.ge * 2 / 5)
        };
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
        $scope.profile.stats = {
            madness : 0,
            corruption : 0,
            fatigue : 0,
            thrones : null
        };
        rollThrones();
        dhProfile.set($scope.profile, function() { $location.path('/onboarding/3') });
    };

    $scope.getScenario = getScenario;

    $scope.colorCode = function(value, low, high) {
        if (value <= low) return 'red';
        else if (value < high) return 'orange';
        return 'green';
    };

    $scope.fileFormat = dhUtils.fileFormat;

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

    function getScenario() {
        return $scope.conf.homeworlds.attributes[$scope.profile.homeworld];
    }

    function rollCareer() {
        $scope.profile.career = dhUtils.getRandomElement(getScenario().careers);
        if ($scope.profile.career == "Sororita" && $scope.profile.gender == "m") rollCareer();
    }

    function rollFate() {
        $scope.profile.progress.fate = dhUtils.getRandomElement(getScenario().fate);
    }

    function rollThrones() {
      var thrones = $scope.conf.careers[$scope.profile.career].thrones;
      $scope.profile.stats.thrones = thrones.start + dhUtils.roll(10, thrones.dices);
    }

    function rollWounds() {
      $scope.profile.progress.wounds = getScenario().wounds + dhUtils.roll(5);
    }
};