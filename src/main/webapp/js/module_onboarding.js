var onboardingCtrl = function($scope, $location, dhConfig, dhProfile, dhUtils) {
    $scope.pageTile = 'Charaktererstellung';
    $scope.conf = dhConfig;

    $scope.onboarding = {};
    var profile = dhProfileConnector;

    $scope.proceed0 = function() {
        // Setup profile stub
        profile = {
            appearance: null,
            career: null,
            characteristics: null,
            divination: null,
            gender: 'w',
            homeworld: null,
            movement: null,
            name: null,
            progress: null,
            psiPowers: null,
            sanction: null,
            scholastica: null,
            skills: null,
            socialClass: null,
            stats: null,
            traits: null
        };
        // Set character name
        profile.name = $scope.onboarding.name;

        //dhProfileConnector.set(profile);
        $location.path('/onboarding/1');
    };

    $scope.proceed1 = function() {
        // Set homeworld
        profile.homeworld = $scope.onboarding.origin == 'x' ? dhUtils.getRandomElement($scope.conf.homeworlds.chances) : $scope.onboarding.origin;
        var homeworld = $scope.conf.homeworlds.attributes[profile.homeworld];
        // Set starting skills for homeworld
        profile.skills = {};
        var i;
        for (i = 0; i < $scope.conf.basicSkills.length; i++)
            profile.skills[$scope.conf.basicSkills[i]] = 0;
        for (i = 0; i < homeworld.basicSkills.length; i++)
            profile.skills[homeworld.basicSkills[i]] = 0;
        for (i = 0; i < homeworld.skills.length; i++)
            profile.skills[homeworld.skills[i]] = 1;
        // Set starting traits for homeworld
        profile.traits = homeworld.traits;
        // Set player base characteristics for homeworld
        profile.characteristics = {
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
        if (homeworld.socialclass) profile.socialClass = homeworld.socialclass;
        // Roll initial career
        rollCareer();

        //dhProfileConnector.set(profile);
        $location.path('/onboarding/2');
    };

    $scope.proceed2 = function() {
        console.log(JSON.stringify(profile));
    };

    function rollCareer() {
      profile.career = dhUtils.getRandomElement($scope.conf.homeworlds.attributes[profile.homeworld].careers);
      if (profile.career == "Sororita" && profile.gender == "m") rollCareer();
    }
};