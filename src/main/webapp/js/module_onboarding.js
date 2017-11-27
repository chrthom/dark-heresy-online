var onboardingCtrl = function($scope, $location, dhConfig, dhProfile, dhUtils) {
    $scope.pageTile = 'Charaktererstellung';
    $scope.conf = dhConfig;

    $scope.onboarding = {};
    $scope.profile = {};
    dhProfile.get(function(res) { $scope.profile = res.data })

    $scope.proceed0 = function() {
        // Setup profile stub
        $scope.profile = {
            username: 'test',
            appearance: null,
            career: null,
            characteristics: null,
            divination: null,
            gender: 'w',
            homeworld: null,
            movement: null,
            name: null,
            progress: null,
            psiPowers: [],
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
        // Set player base characteristics for homeworld
        $scope.profile.characteristics = {
            'kg' : homeworld.kg + dhUtils.roll(10, 2),
            'bf' : homeworld.bf + dhUtils.roll(10, 2),
            'st' : homeworld.st + dhUtils.roll(10, 2),
            'wi' : homeworld.wi + dhUtils.roll(10, 2),
            'ge' : homeworld.ge + dhUtils.roll(10, 2),
            'in' : homeworld.in + dhUtils.roll(10, 2),
            'wa' : homeworld.wa + dhUtils.roll(10, 2),
            'wk' : homeworld.wk + dhUtils.roll(10, 2),
            'ch' : homeworld.ch + dhUtils.roll(10, 2)
        };
        // If homeworld specifies socialClass, set it
        if (homeworld.socialclass) $scope.profile.socialClass = homeworld.socialclass;
        // Roll initial career
        rollCareer();
        dhProfile.set($scope.profile, function() { $location.path('/onboarding/2') });
    };

    $scope.proceed2 = function() {
        console.log(JSON.stringify($scope.profile));
    };

    $scope.getScenario = function() {
        return $scope.conf.homeworlds.attributes[$scope.profile.homeworld];
    };

    $scope.colorCode = function(value, low, high) {
        if (value <= low) return 'red';
        else if (value < high) return 'orange';
        return 'green';
    };

    $scope.rerollCharacteristics = function(characteristic) {
        if (!$scope.onboarding.rerolledCharacteristic)
            $scope.profile.characteristics[characteristic] = $scope.getScenario()[characteristic] + dhUtils.roll(10, 2);
        $scope.onboarding.rerolledCharacteristic = true;
    };

    function rollCareer() {
      $scope.profile.career = dhUtils.getRandomElement($scope.getScenario().careers);
      if ($scope.profile.career == "Sororita" && $scope.profile.gender == "m") rollCareer();
    }
};