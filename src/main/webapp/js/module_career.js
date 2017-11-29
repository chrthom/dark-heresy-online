var careerCtrl = function($scope, dhConfig, dhProfile) {
    $scope.pageTile = 'Karriere';
    $scope.conf = dhConfig;
    $scope.profile = {};
    dhProfile.get(function(res) {
        $scope.profile = res.data
        $scope.renderGraph($scope.controls.showAll);
    });
    $scope.controls = {
        showAll: false
    };

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