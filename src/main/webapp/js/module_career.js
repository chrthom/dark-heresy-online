var careerCtrl = function($scope, dhConfig, dhProfile) {
    $scope.conf = dhConfig;
    $scope.profile = {};
    dhProfile.get(function(res) {
        $scope.profile = res.data;
        $scope.renderGraph($scope.controls.showAll);
    });

    $scope.toUpperCase = function(s) { return s.toUpperCase(); };

    $scope.controls = {
        showAll: false
    };

    $scope.getCharacteristicsCost = function(attr) {
        var usedUpgrades = $scope.profile.progress ? $scope.profile.progress['increased' + $scope.toUpperCase(attr)] : 0;
        if (usedUpgrades > 3 || !$scope.profile.progress) return 5000;
        else return $scope.conf.careers[$scope.profile.career].training[attr][usedUpgrades];
    };

    $scope.getConstitutionCost = function() {
        var usedUpgrades = $scope.profile.progress ? $scope.profile.progress.increasedConstitution : 0;
        var costs = 5000;
        getAllRanks().forEach(function(rank) {
            if (rank.constitution) {
                usedUpgrades -= rank.constitution.count;
                if (usedUpgrades < 0 && rank.constitution.costs < costs) costs = rank.constitution.costs;
            }
        });
        return costs;
    };

    $scope.getAvailableSkills = function() {
        var skills = [];
        getAllRanks().forEach(function(rank) {
            skills.push.apply(skills, $scope.conf.ranks[rank].skills.filter(function(s) {
                var unknownSkill = true;
                $scope.profile.skills.forEach(function(s2) {
                    if (s.skill == s2.key && s.level <= s2.value) unknownSkill = false;
                });
                return unknownSkill;
            }));
        });
        return skills;
    };

    $scope.getAvailableTraits = function() {
        var traits = [];
        getAllRanks().forEach(function(rank) {
            traits.push.apply(traits, $scope.conf.ranks[rank].traits.filter(function(t) {
                if ($scope.profile.traits.indexOf(t.trait) >= 0) return false
                var trait = $scope.conf.traits[t.trait];
                if (trait.kg && $scope.profile.characteristics.kg < trait.kg ||
                    trait.bf && $scope.profile.characteristics.bf < trait.bf ||
                    trait.st && $scope.profile.characteristics.st < trait.st ||
                    trait.wi && $scope.profile.characteristics.wi < trait.wi ||
                    trait.ge && $scope.profile.characteristics.ge < trait.ge ||
                    trait.in && $scope.profile.characteristics.in < trait.in ||
                    trait.wa && $scope.profile.characteristics.wa < trait.wa ||
                    trait.wk && $scope.profile.characteristics.wk < trait.wk ||
                    trait.ch && $scope.profile.characteristics.ch < trait.ch) return false
                if (trait.skill) {
                    var hasSkill = false;
                    $scope.profile.skills.forEach(function(s) {
                        if (s.key == trait.skill) hasSkill = true;
                    });
                    if (!hasSkill) return false;
                }
                if (trait.trait && $scope.profile.traits.indexOf(trait.trait) < 0) return false;
                return true;
            }));
        });
        return traits;
    };

    function getAllRanks() {
        if (!$scope.profile.rank) return [];
        else {
            var allRanks = [];
            allRanks.push.apply(allRanks, $scope.profile.progress.previousRanks);
            allRanks.push($scope.profile.rank);
            return allRanks;
        }
    }

    $scope.renderGraph = function(all) {
        var links = [];
        if (all) Object.keys($scope.conf.ranks).forEach(function(source) {
            $scope.conf.ranks[source].next.forEach(function(target) {
                links.push({ source: source, target: target });
            });
        });
        else addRankRecursive($scope.profile.rank)
        function addRankRecursive(source) {
            $scope.conf.ranks[source].next.forEach(function(target) {
                for (var i = 0; i < links.length; i++)
                    if (links[i].source == source && links[i].target == target) return;
                links.push({ source: source, target: target });
                addRankRecursive(target);
            });
        };
        var nodes = {};
        // Compute the distinct nodes from the links.
        links.forEach(function(link) {
            link.source = nodes[link.source] ||
                (nodes[link.source] = {name: link.source});
            link.target = nodes[link.target] ||
                (nodes[link.target] = {name: link.target});
            link.value = +link.value;
        });
        var force = d3.layout.force()
            .nodes(d3.values(nodes))
            .links(links)
            .size([400, 500])
            .charge(-130)
            .on('tick', tick)
            .start();
        var drag = force.drag()
            .on('dragstart', dragstart);
        var svg = d3.select('#career-graph');
        svg.selectAll('*').remove();
        // Build the arrow.
        svg.append('svg:defs').selectAll('marker')
            .data(['end'])
            .enter().append('svg:marker')
            .attr('id', String)
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 15)
            .attr('refY', -1.5)
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5');
        // Add the links and the arrows
        var path = svg.append('svg:g')
            .selectAll('path')
            .data(force.links())
            .enter().append('svg:path')
            .attr('class', 'link')
            .attr('marker-end', 'url(#end)');
        // Define the nodes
        var node = svg.selectAll('.node')
            .data(force.nodes())
            .enter().append('g')
            .attr('class', 'node')
            .call(drag);
        // Add the nodes
        node.append('circle')
            .attr('r', function(n) { return n.name == $scope.profile.rank ? 12 : 5 })
            .style('fill', function(n) {
                if (n.name == $scope.profile.rank) return '#FF0000';
                else if ($scope.conf.ranks[$scope.profile.rank].next.indexOf(n.name) >= 0) return '#FF8800';
                else return '#555555';
            });
        // Add the text
        node.append('text')
            .attr('x', 12)
            .text(function(d) { return d.name; });
        // Add the curvy lines
        function tick() {
            path.attr('d', function(d) {
                var dx = d.target.x - d.source.x,
                    dy = d.target.y - d.source.y,
                    dr = Math.sqrt(dx * dx + dy * dy);
                return 'M' +
                    d.source.x + ',' +
                    d.source.y + 'A' +
                    dr + ',' + dr + ' 0 0,1 ' +
                    d.target.x + ',' +
                    d.target.y;
            });
            node.attr('transform', function(d) {
                return 'translate(' + d.x + ',' + d.y + ')';
            });
        }
        function dragstart(d) {
          d3.select(this).classed('fixed', d.fixed = true);
        }
    };
};