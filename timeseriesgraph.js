console.log('timeseriesgraph');
/*global moment, Globalize, d3_3_5_16, TerraRailsViewModels */
//= require third_party/terra/jquery/globalize/globalize/number.js
//= require ./util/locale/timeSeriesTranslations

var OrionViz = window.OrionViz || {};

window.OrionViz = OrionViz;
/*jshint maxstatements:false */
(function (window, $, OrionViz, undefined) {
  OrionViz.TimeSeriesGraph = function ($timeSeriesGraph) {
    console.log("Hello")
    var internal = OrionViz.TimeSeriesGraph.prototype.internal = {};
    var d3 = d3_3_5_16;
    var DEFAULT_HEIGHT = 250;
    var DEFAULT_RADIUS = 4.5;
    var TIMELINE_TOP_PADDING = 20;
    var CRITICAL_INNER_WIDTH = 1;
    var CRITICAL_OUTER_WIDTH = 2;
    var DEFAULT_SELECTED_RADIUS = 9.5;
    var DEFAULT_CLICKABLE_RADIUS = 15;
    var MAX_TICK_SPACING = 200;
    var isPopUpOpen = false;
    var TIMESERIES_BOTTOM_PADDING = 15;

    internal.bindto = $timeSeriesGraph.data('bind-to');
    internal.graphContainer = $timeSeriesGraph;
    internal.dataTargets = {};
    internal.showTimeline = false;
    internal.showTimeSeries = false;
    internal.config = {};
    internal.config.axis = {};
    internal.config.axis.x = {};
    internal.config.axis.y = {};
    internal.config.axis.y2 = {};
    internal.axis = {};
    internal.scale = {};
    internal.noData = true;
    internal.chartType = 'line';
    internal.padding = {
      top: 10,
      bottom: TIMESERIES_BOTTOM_PADDING,
      left: 30,
      right: 30
    };

    internal.axisSizes = {};
    internal.axisLabelWidths = {};
    internal.axisLabelHeights = {};
    internal.graphCanvas = {};

    internal.initializeGraph = function () {
      var config = internal.config;

      internal.setGraphTimezone();
      internal.setGraphLocale();

      // The canvas needs to allow for the legend to take up a maximum of 14% of the container width if the legend is
      // going to be displayed on the left
      internal.legendWidth = internal.containerHasSize('md') ? internal.graphContainer.width() * 0.14 : 0;
      internal.canvasWidth = internal.graphContainer.width() - internal.legendWidth;
      internal.dataTargets = internal.collectDataTargets();

      internal.readConfiguration();
      internal.axis.y = d3.svg.axis().scale(internal.scale.y)
        .orient('left').ticks((internal.height / 30)).tickFormat(function (d) { return Globalize.formatNumber(d); });

      if (config.axis.y2.show) {
        internal.scale.y2 = d3.scale.linear().domain(config.axis.y2.domain).range(internal.getYAxisRange());
        internal.axis.y2 = d3.svg.axis().scale(internal.scale.y2).orient('right').ticks((internal.height / 30))
          .tickFormat(function (d) { return Globalize.formatNumber(d); });
      }
    };

    internal.setGraphTimezone = function () {
      var tz = internal.graphContainer.data('graph-timezone');
      if (!tz) {
        tz = moment.tz.guess();
      }
      internal.timezone = tz;
    };

    internal.setGraphLocale = function () {
      var locale = internal.graphContainer.data('graph-locale');
      if (!locale) {
        locale = 'en-US';
      }
      internal.locale = locale;
      moment.locale(locale);
    };

    internal.getGraphTimezone = function () {
      return internal.timezone;
    };

    internal.getGraphLocale = function () {
      return internal.locale;
    };

    internal.draw = function (scrollPosition) {
      internal.graphContainer.empty();

      var containerClass = internal.containerHasSize('md') ?
        'OrionViz-graph-container OrionViz-graph-container-left-legend' : 'OrionViz-graph-container';

      if (internal.config.padded) {
        containerClass = containerClass + ' OrionViz-graph-container--padded';
      }

      var containerHeight = internal.height + internal.padding.bottom + internal.padding.top;
      var containerDiv = d3.select(internal.bindto).append('div').attr('class', containerClass)
        .attr('height', containerHeight)
        .attr('width', '100%');

      var canvasHeight = containerHeight - (internal.padding.bottom / 2);

      if (internal.showTimeSeries) {
        internal.graphCanvas = containerDiv.append('div').attr('class', 'OrionViz-graph-canvas').append('svg')
          .attr('height', canvasHeight)
          .attr('width', internal.canvasWidth);

        var graphXAxisHeight = internal.axisSizes.x + internal.axisLabelHeights.x;

        if (internal.showTimeline) {
          graphXAxisHeight = TIMELINE_TOP_PADDING;
        }

        internal.xAxisGraphSvg = containerDiv.append('div').attr('class', 'OrionViz-x-axis-canvas').append('svg')
          .attr('height', graphXAxisHeight)
          .attr('width', internal.canvasWidth);
      }

      if (internal.dataTargets.length > 1 || internal.config.showSingleSeriesLegend) {
        internal.buildLegend();
      }

      if (internal.noData) {
        internal.config.grid.showHorizontal = false;
        internal.config.grid.showVertical = false;
        var textElement = internal.graphCanvas.append('text').attr('text-anchor', 'middle');
        var xPosition = internal.getXAxisXPosition() + internal.getXAxisWidth() / 2;
        var yPosition = internal.getYAxisYPosition() + internal.getYAxisHeight() / 2;
        textElement.append('tspan').attr('x', xPosition).attr('y', yPosition)
          .attr('class', 'OrionViz-no-data-text').text(Globalize.formatMessage('NO_DATA'));
      }

      if (internal.showTimeSeries) {
        internal.drawXAxis(internal.xAxisGraphSvg, 'OrionViz-axis-x-graph', !internal.showTimeline);
        internal.drawGraphCanvas(scrollPosition);
      }

      if (internal.showTimeline) {
        internal.xAxisTimelineSvg = containerDiv.append('div')
          .attr('class', 'OrionViz-timeline').append('svg')
          .attr('height', internal.axisSizes.x + internal.axisLabelHeights.x)
          .attr('width', internal.canvasWidth);
        internal.drawXAxis(internal.xAxisTimelineSvg, 'OrionViz-axis-x-timeline', true);
        internal.drawTimeline();
      }

    };

    internal.drawXAxis = function (axisSvg, className, showTicks) {
      var xAxisGrouper = axisSvg.append('g')
        .attr('class', 'OrionViz-axis OrionViz-axis-x ' + className)
        .attr('transform', 'translate(' + internal.getXAxisXPosition() + ', 0)');

      xAxisGrouper.call(internal.axis.x);

      internal.formatXTicks(internal.graphContainer.find('.' + className + ' .tick text'), !showTicks);

      var xAxisLabel = axisSvg.append('g')
        .attr('class', 'OrionViz-x-axis-label')
        .attr('transform', 'translate(' + internal.getXAxisLabelXPosition() + ',' + internal.getXAxisLabelYPosition() +
        ')')
        .append('g');

      if (internal.config.axis.x.labelLines.length > 0) {
        internal.buildAxisLabel(xAxisLabel, internal.config.axis.x.labelLines, false, 'x', internal.getXAxisWidth());
      }
    };

    internal.drawTodayLine = function (svg, y1, y2) {
      var today = new Date();

      var todayLineGroup = svg.append('g').attr('class', 'OrionViz-today-line-group');

      todayLineGroup.append('g')
        .attr('class', 'OrionViz-selected-circles');

      todayLineGroup.append('line')
        .attr('class', 'OrionViz-today-line')
        .attr('x1', internal.scale.x(today))
        .attr('y1', y1)
        .attr('x2', internal.scale.x(today))
        .attr('y2', y2)
        .style('stroke-width', 1)
        .style('stroke', '#FFCE3B')
        .style('fill', 'none')
        .attr('marker-start', 'url(#today_marker)');


      todayLineGroup.append('marker')
        .attr('id', 'today_marker')
        .attr('markerHeight', 7)
        .attr('markerWidth', 7)
        .attr('markerUnits', 'strokeWidth')
        .attr('orient', 'auto')
        .attr('refX', 0)
        .attr('refY', 0)
        .attr('viewBox', '-5 -5 10 10')
        .append('svg:path')
        .attr('d', 'M 0,0 m -5,-5 L 5,-5 L 5,5 L -5,5 Z')
        .attr('fill', '#FFCE3B');

      var momentToday = moment.tz(today, internal.timezone);

      todayLineGroup.append('circle')
        .attr('class', 'OrionViz-today-marker-click-target')
        .attr('cx', internal.scale.x(today))
        .attr('cy', y1)
        .attr('r', DEFAULT_CLICKABLE_RADIUS)
        .attr('data-target-id', 'today-line')
        .attr('data-popup-content', '<div class="OrionViz-popup-container">' +
        momentToday.format(internal.getTimeFormat(momentToday)) +
        '</br>' +
        momentToday.format(Globalize.formatMessage('FULL_DATE_FORMAT')) +
        '</div>');

      internal.graphContainer.on('click',
        '.OrionViz-today-marker-click-target',
        internal.onClickTodayMarker.bind(internal));

      return todayLineGroup;
    };

    internal.onClickTodayMarker = function (event) {
      var $$ = this;
      $$.graphContainer.find('.OrionViz-selected-circles').empty();

      var $target = $(event.currentTarget);

      var content = $target.data('popup-content');

      var box = event.currentTarget.getBoundingClientRect();

      if (content) {
        var popupOptions = {
          contentHtml: content,
          position: 'bottom',
          offsetX: (box.width / 2),
          offsetY: (box.height / 2),
          maxWidth: 750,
        };

        $target.trigger('navigator.disclose.popup', popupOptions);
      }
    };

    internal.drawTimeline = function () {
      var svg = internal.xAxisTimelineSvg;

      var circleOffset = 0;

      if (internal.config.showToday) {
        var todayLineGroup;

        if (internal.showTimeSeries) {
          var todayLineY1 = -(internal.getYAxisHeight() + TIMELINE_TOP_PADDING * 2);
          todayLineGroup = internal.drawTodayLine(svg, todayLineY1, 6);
        } else {
          todayLineGroup = internal.drawTodayLine(svg, -6, 6);
        }

        todayLineGroup.attr('transform', 'translate(' + internal.getXAxisXPosition() + ',' + circleOffset + ')');
      }
      svg.append('g')
        .attr('class', 'OrionViz-selected-circles')
        .attr('transform', 'translate(' + internal.getXAxisXPosition() + ',' + circleOffset + ')');

      svg.append('g')
        .attr('class', 'OrionViz-data-points-group')
        .attr('transform', 'translate(' + internal.getXAxisXPosition() + ',' + circleOffset + ')');

      svg.select('.OrionViz-data-points-group').selectAll('.OrionViz-data-points').data(internal.dataTargets).enter()
        .append('g').attr('class', 'OrionViz-data-points');

      if (internal.config.showSymbols) {
        var criticalIndicatorEnter = svg.select('.OrionViz-data-points-group')
          .selectAll('.OrionViz-data-points')
          .selectAll('.OrionViz-critical-indicator')
          .data(function (target) {
            return target.values.filter(function (value) {
              return value.critical && value.y === null;
            });
          })
          .enter();

        internal.drawCriticalIndicators(criticalIndicatorEnter);

        var dataPointEnter = svg.select('.OrionViz-data-points-group')
          .selectAll('.OrionViz-data-points')
          .selectAll('.OrionViz-point-group')
          .data(internal.nonNumericDataPoints)
          .enter();

        internal.drawDataPoints(dataPointEnter);
      }

    };

    internal.drawGraphCanvas = function (scrollPosition) {
      var svg = internal.graphCanvas;
      svg.append('g')
        .attr('class', 'OrionViz-reference-range-group')
        .attr('transform', 'translate(' + internal.getXAxisXPosition() + ',' + internal.padding.top + ')');
      var aangesEnter = svg.select('.OrionViz-reference-range-group')
        .selectAll('.OrionViz-reference-range-series')
        .data(internal.dataTargets.filter(function (target) {
          return target.referenceRanges && target.referenceRanges.length > 0;
        })).enter();

      internal.drawReferenceRanges(referenceRangesEnter);

      internal.yAxisLabelGrouper = svg.append('g')
        .attr('class', 'OrionViz-y-axis-label')
        .attr('transform', 'translate(' + internal.getYAxisLabelXPosition() + ', ' + internal.getYAxisLabelYPosition() +
        ') rotate(' + internal.getRotationForAxis('y') + ')');

      if (internal.config.axis.y.labelLines.length > 0) {
        internal.buildAxisLabel(internal.yAxisLabelGrouper, internal.config.axis.y.labelLines,
          internal.config.axis.y.defaultLabel, 'y', DEFAULT_HEIGHT);
      }

      svg.append('g')
        .attr('class', 'OrionViz-axis OrionViz-axis-y')
        .attr('transform', 'translate(' + internal.getYAxisXPosition() + ', ' + internal.getYAxisYPosition() + ')')
        .call(internal.axis.y);

      if (internal.config.axis.y2.show) {
        internal.y2AxisLabelGrouper = svg.append('g')
          .attr('class', 'OrionViz-y2-axis-label')
          .attr('transform', 'translate(' + internal.getY2AxisLabelXPosition() + ', ' +
          internal.getYAxisLabelYPosition() + ') rotate(' + internal.getRotationForAxis('y2') + ')');

        if (internal.config.axis.y2.labelLines.length !== 0) {
          internal.buildAxisLabel(internal.y2AxisLabelGrouper, internal.config.axis.y2.labelLines,
            internal.config.axis.y2.defaultLabel, 'y2', DEFAULT_HEIGHT);
        }

        svg.append('g')
          .attr('class', 'OrionViz-axis OrionViz-axis-y2')
          .attr('transform', 'translate(' + internal.getY2AxisXPosition() + ', ' +
          internal.getY2AxisYPosition() + ')')
          .call(internal.axis.y2);
      }

      var grid = svg.append('g')
        .attr('class', 'OrionViz-grid')
        .attr('transform', 'translate(' + internal.getXAxisXPosition() + ',' + internal.padding.top + ')');

      if (internal.config.showToday && !internal.showTimeline) {
        internal.drawTodayLine(grid, 0, internal.getYAxisHeight());
      }

      if (internal.config.grid.showHorizontal) {
        var yAxisGrid = internal.axis.y.tickSize((internal.getXAxisWidth() * -1), 0, 0).tickFormat('');

        grid.append('g')
          .attr('class', 'OrionViz-horizontal-grid')
          .call(yAxisGrid);
      }

      if (internal.config.grid.showVertical) {
        var xAxisGrid = internal.axis.x
          .tickValues(internal.config.axis.x.tickValues)
          .tickSize((internal.getYAxisHeight()), 0, 0).tickFormat('');
        grid.append('g')
          .attr('class', 'OrionViz-vertical-grid')
          .call(xAxisGrid);
      }

      var circleOffset = internal.padding.top;

      svg.append('g')
        .attr('class', 'OrionViz-selected-circles')
        .attr('transform', 'translate(' + internal.getXAxisXPosition() + ',' + circleOffset + ')');

      if (internal.chartType === 'line') {
        var segmentedDataTargets = internal.segmentDataTargets(internal.dataTargets);

        for (var i = 0; i < segmentedDataTargets.length; i++) {
          svg.append('g')
            .attr('class', 'OrionViz-data-lines-group-' + i)
            .attr('transform', 'translate(' + internal.getXAxisXPosition() + ',' + circleOffset + ')');

          var dataLineEnter = svg.select('.OrionViz-data-lines-group-' + i).selectAll('.OrionViz-line')
            .data(segmentedDataTargets[i]).enter();

          internal.drawDataLines(dataLineEnter, i);
        }
      }

      svg.append('g')
        .attr('class', 'OrionViz-data-points-group')
        .attr('transform', 'translate(' + internal.getXAxisXPosition() + ',' + circleOffset + ')');

      svg.select('.OrionViz-data-points-group').selectAll('.OrionViz-data-points').data(internal.dataTargets).enter()
        .append('g').attr('class', 'OrionViz-data-points');

      if (internal.config.showSymbols) {
        var criticalIndicatorEnter = svg.select('.OrionViz-data-points-group')
          .selectAll('.OrionViz-data-points')
          .selectAll('.OrionViz-critical-indicator')
          .data(function (target) {
            return target.values.filter(function (value) {
              return value.critical && value.y !== null;
            });
          })
          .enter();

        internal.drawCriticalIndicators(criticalIndicatorEnter);

        var dataPointEnter = svg.select('.OrionViz-data-points-group')
          .selectAll('.OrionViz-data-points')
          .selectAll('.OrionViz-point-group')
          .data(internal.numericDataPoints)
          .enter();

        internal.drawDataPoints(dataPointEnter);
      }

      var originalRangeMaxValue = Number(internal.graphContainer.data('y-max'));
      var originalRangeMinValue = Number(internal.graphContainer.data('y-min'));
      var originalRangeMidPoint = (originalRangeMaxValue + originalRangeMinValue) / 2;

      var initialScrollPosition = internal.scale.y(originalRangeMidPoint) + internal.padding.top - (DEFAULT_HEIGHT / 2);

      internal.graphContainer.find('.OrionViz-graph-canvas')
        .scrollTop(scrollPosition ? scrollPosition : initialScrollPosition);
    };

    internal.buildLegend = function () {
      var legendDiv;

      if (internal.containerHasSize('md')) {
        legendDiv = d3.select(internal.bindto).insert('ul', '.OrionViz-graph-container')
          .attr('style', 'list-style-type: none;')
          .attr('class', 'OrionViz-legend OrionViz-legend-left');
      } else {
        legendDiv = d3.select(internal.bindto).append('ul').attr('style', 'list-style-type: none;')
          .attr('class', 'OrionViz-legend OrionViz-legend-bottom');
      }

      var shownTargets = internal.shownTargets;

      for (var i = 0; i < internal.dataTargets.length; i++) {
        var dataTarget = internal.dataTargets[i];

        var legendItem = legendDiv.append('li').attr('class', 'OrionViz-legend-item')
          .attr('data-target-id', i);

        var legendItemButton = legendItem.append('span').attr('class', 'OrionViz-legend-item-tile')
          .attr('data-toggle', 'buttons-checkbox').append('button').attr('data-toggle', 'buttons-checkbox')
          .attr('aria-selected', shownTargets.indexOf(i) > -1 ? 'true' : 'false');

        legendItemButton.attr('class', 'btn');

        var legendSvg = legendItemButton.append('div').attr('class', 'OrionViz-legend-item-icon').append('svg')
          .attr('viewBox', '0 0 11 11');

        var symbol = internal.getSymbolForTarget(i);
        var legendIcon;
        var cx = 5.5;
        var cy = 6.5;
        var r = 2.75;

        if (symbol === 'circle') {
          legendIcon = legendSvg.append('circle').attr('cx', cx).attr('cy', cy).attr('r', r);
        } else {
          if (symbol === 'square' || symbol === 'diamond') {
            r = r - 0.5; // These symbols appear to large in relation to the other symbols without
            // this adjustment
          }

          var points = internal.buildPointsArrayForTarget(i, cx, cy, r);

          points = internal.mapPointsToString(points);

          legendIcon = legendSvg.append('polygon').attr('points', points);
        }
        legendIcon.attr('style', 'fill: ' + internal.config.colors[i]);
        legendIcon.attr('class', shownTargets.indexOf(i) > -1 ?
          'OrionViz-legend-point OrionViz-legend-point-selected' : 'OrionViz-legend-point');

        legendItem.append('span').attr('class', 'OrionViz-legend-item-tile-text').text(dataTarget.label);
      }
    };

    internal.mapPointsToString = function (array) {
      return array.map(function (d) {
        return [d.x, d.y].join(',');
      }).join(' ');
    };

    internal.readConfiguration = function () {
      var config = internal.config;

      var graph = internal.graphContainer;

      config.colors = graph.data('colors');
      config.symbols = graph.data('symbols');
      internal.chartType = graph.data('chart-type');
      config.padded = graph.data('padded');
      config.showToday = graph.data('show-today');
      config.hideTickTimes = graph.data('hide-tick-times');

      if (!config.padded) {
        internal.padding.left = 0;
        internal.padding.right = 0;
      }

      var timeZone = internal.timezone;

      config.axis.x.domain = [moment.tz(graph.data('x-min'), timeZone).toDate(),
      moment.tz(graph.data('x-max'), timeZone).toDate()];
      config.axis.x.labelLines = graph.data('x-axis-label') ? graph.data('x-axis-label').split(' ') : [];
      config.screenSize = internal.getScreenSize();

      config.axis.defaultLabels = internal.buildDefaultLabels();

      config.axis.y.domain = [Number(graph.data('y-min')), Number(graph.data('y-max'))];

      config.axis.y.labelLines = graph.data('y-axis-label') ?
        graph.data('y-axis-label').split(' ') : config.axis.defaultLabels.y;
      config.axis.y.defaultLabel = graph.data('y-axis-label') === undefined || graph.data('y-axis-label') === '';

      config.axis.y2.show = graph.data('y2-show');

      if (config.axis.y2.show) {
        config.axis.y2.domain = [Number(graph.data('y2-min')), Number(graph.data('y2-max'))];
        config.axis.y2.labelLines = graph.data('y2-axis-label') ?
          graph.data('y2-axis-label').split(' ') : config.axis.defaultLabels.y2;
        config.axis.y2.defaultLabel = graph.data('y2-axis-label') === undefined || graph.data('y2-axis-label') === '';
      }

      config.outlierStretchFactor = internal.determineOutlierStretchFactor();
      var halfDomain = (config.axis.y.domain[1] - config.axis.y.domain[0]) / 2;
      var midPoint = (config.axis.y.domain[1] + config.axis.y.domain[0]) / 2;

      config.axis.y.domain[0] = midPoint - (halfDomain * config.outlierStretchFactor.lower);
      config.axis.y.domain[1] = midPoint + (halfDomain * config.outlierStretchFactor.upper);

      internal.padDomain(config.axis.y.domain);

      if (config.axis.y2.show) {
        halfDomain = (config.axis.y2.domain[1] - config.axis.y2.domain[0]) / 2;
        midPoint = (config.axis.y2.domain[1] + config.axis.y2.domain[0]) / 2;
        config.axis.y2.domain[0] = midPoint - (halfDomain * config.outlierStretchFactor.lower);
        config.axis.y2.domain[1] = midPoint + (halfDomain * config.outlierStretchFactor.upper);
        internal.padDomain(config.axis.y2.domain);
      }

      config.grid = {};
      config.grid.showHorizontal = graph.data('show-horizontal-gridlines');
      config.grid.showVertical = graph.data('show-vertical-gridlines');

      config.showSymbols = graph.data('show-symbols');

      config.showSingleSeriesLegend = graph.data('show-single-series-legend');

      internal.height = internal.determineHeight();

      internal.calculateYAxisSizes();

      internal.scale.y = d3.scale.linear().domain(config.axis.y.domain).range(internal.getYAxisRange());
      internal.scale.x = d3.time.scale().domain(config.axis.x.domain).range(internal.getXAxisRange());

      internal.axis.x = d3.svg.axis().scale(internal.scale.x)
        .orient('bottom').tickFormat(function (dateTime) {
          return moment.tz(dateTime, internal.timezone).format();
        }).ticks(internal.graphContainer.width() / MAX_TICK_SPACING);

      var tickValues = internal.axis.x.scale().ticks(internal.axis.x.ticks()[0]);

      tickValues = tickValues.map(function (date) {
        return moment.tz(date, timeZone).toDate();
      });

      config.axis.x.tickValuesWithTimezone = internal.generateDSTBorderTicks(tickValues);
      config.axis.x.tickValues = tickValues;

      internal.axis.x.tickValues(tickValues);

      internal.calculateXAxisSizes();

      return config;
    };

    internal.padDomain = function (domain) {
      var domainRange = Math.abs(domain[1] - domain[0]);
      var domainStretch = domainRange * 0.1;

      domain[1] = domain[1] + domainStretch;
      domain[0] = domain[0] - domainStretch;
    };

    internal.determineHeight = function () {
      var height = internal.getInitialHeight();
      var halfHeight = height / 2;

      height = halfHeight * internal.config.outlierStretchFactor.upper +
        halfHeight * internal.config.outlierStretchFactor.lower;

      return height;
    };

    internal.buildDefaultLabels = function () {
      var linesForAxes = {};
      linesForAxes.y = [];
      linesForAxes.y2 = [];

      for (var i = 0; i < internal.dataTargets.length; i++) {
        linesForAxes[internal.dataTargets[i].yAxis].push(i);
      }

      if (linesForAxes.y2.length === 0) {
        linesForAxes.y = [];
      }

      linesForAxes.y = linesForAxes.y.sort(function (firstValue, secondValue) {
        return secondValue.length - firstValue.length;
      });

      linesForAxes.y2 = linesForAxes.y2.sort(function (firstValue, secondValue) {
        return secondValue.length - firstValue.length;
      });
      return linesForAxes;
    };

    internal.getScreenSize = function () {
      var mqSizes = TerraRailsViewModels.ResponsiveElements.sizesForWidth(internal.graphContainer.width());

      var mqSizesArray = mqSizes.split(' ');

      return mqSizesArray[mqSizesArray.length - 1];
    };

    internal.containerHasSize = function (size) {
      return TerraRailsViewModels.ResponsiveElements.sizesForWidth(internal.graphContainer.width()).indexOf(size) > -1;
    };

    internal.drawReferenceRanges = function (referenceRangesEnter) {
      referenceRangesEnter.append('g')
        .attr('data-target-id', function (target) {
          return internal.dataTargets.indexOf(target);
        })
        .attr('display', internal.shownTargets.length === 1 ? 'inline' : 'none')
        .attr('class', 'OrionViz-reference-range-series')
        .selectAll('.OrionViz-reference-range')
        .data(function (target) {
          return target.referenceRanges;
        }).enter().append('rect')
        .attr('y', function (referenceRange) {
          return referenceRange.max ? internal.scale.y(referenceRange.max) : 0;
        })
        .attr('height', function (referenceRange) {
          var referenceTop = d3.select(this).attr('y');
          var referenceBottom;
          if (referenceRange.min) {
            referenceBottom = internal.scale.y(referenceRange.min);
          } else {
            referenceBottom = internal.getYAxisHeight();
          }
          return referenceBottom - referenceTop;
        })
        .attr('width', internal.getXAxisWidth())
        .attr('class', 'OrionViz-reference-range');
    };

    internal.drawDataLines = function (dataLineEnter, index) {

      var valueLine = d3.svg.line()
        .x(function (value) {
          return internal.scale.x(value.x);
        })
        .y(function (value) {
          return internal.scale[value.yAxis](value.y);
        });

      var shownTargets = internal.shownTargets;

      dataLineEnter.append('g').attr('class', 'OrionViz-line').append('path')
        .attr('d', function (target) {
          return valueLine(internal.numericDataPoints(target));
        })
        .attr('style', function (target) {
          var style = 'stroke: ' + internal.config.colors[index] +
            (shownTargets.indexOf(index) < 0 ? '; display: none;' : ';');

          if (target.detached) {
            style += ' stroke-dasharray: 5,5;';
          }
          return style;
        })
        .attr('data-target-id', index);
    };

    /**
     * This method segments each dataTarget's list of values into segments based on whether
     * they are authenticated or not. Data points before and after a detached data point
     * needs to be in a separate segment from other authenticated datapoints.
     *
     * @param dataTargets the list of data targets for the graph
     * @returns {Array} the data targets with segmented values
     */
    internal.segmentDataTargets = function (dataTargets) {
      var segmentedDataTargets = [];

      for (var i = 0; i < dataTargets.length; i++) {
        var segments = [];
        var segment = { values: [] };

        var dataValues = dataTargets[i].values;
        for (var j = 0; j < dataValues.length; j++) {
          var dataPoint = dataValues[j];

          if (dataPoint.detached) {

            if (segment.values.length > 1) {
              segments.push(segment);
            }

            var values = [];

            //Push previous point to segment if exists and is not detached
            if (j > 0 && !dataValues[j - 1].detached) {
              values.push(dataValues[j - 1]);
            }

            values.push(dataPoint);

            //Push next point to segment if exists
            if (j < dataValues.length - 1) {
              values.push(dataValues[j + 1]);
            }

            segments.push({ values: values, detached: true });
            segment = { values: [] };
          } else {
            segment.values.push(dataPoint);
          }
        }

        if (segment.values.length > 1) {
          segments.push(segment);
        }
        segmentedDataTargets.push(segments);
      }
      return segmentedDataTargets;
    };

    internal.drawDataPoints = function (dataPointEnter) {
      var shownTargets = internal.shownTargets;

      var dataPointGroups = dataPointEnter.append('g')
        .attr('class', 'OrionViz-point-group')
        .attr('data-target-id', function (value) {
          return value.id;
        })
        .attr('data-popup-content', function (value) {
          return value.content;
        })
        .attr('data-detached', function (value) {
          return value.detached;
        });

      dataPointGroups.append(function (value) {
        var symbol = internal.getSymbolForTarget(value.id);
        var element;
        if (symbol === 'circle') {
          element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        } else {
          element = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        }

        return element;
      })
        .attr('class', 'OrionViz-point')
        .attr('cx', function (value) {
          return internal.scale.x(value.x);
        })
        .attr('cy', function (value) {
          if (value.y === null) {
            return 0;
          }
          return internal.scale[value.yAxis](value.y);
        })
        .attr('points', function (value) {
          var cx = internal.scale.x(value.x);
          var cy = 0;
          if (value.y !== null) {
            cy = internal.scale[value.yAxis](value.y);
          }

          var points = internal.buildPointsArrayForTarget(value.id, cx, cy, DEFAULT_RADIUS);

          return points.map(function (d) {
            return [d.x, d.y].join(',');
          }).join(' ');
        })
        .attr('r', DEFAULT_RADIUS)
        .attr('style', function (value) {
          var style = '';

          if (value.detached) {
            style += 'fill: white; stroke: ' + internal.config.colors[value.id];
          } else {
            style += 'fill: ' + internal.config.colors[value.id];
          }
          style += (shownTargets.indexOf(value.id) < 0 ? '; display: none;' : ';');

          return style;
        })
        .attr('data-target-id', function (value) {
          return value.id;
        });

      dataPointGroups.append('circle')
        .attr('class', 'OrionViz-point-click-target')
        .attr('cx', function (value) {
          return internal.scale.x(value.x);
        })
        .attr('cy', function (value) {
          if (value.y === null) {
            return null;
          }
          return internal.scale[value.yAxis](value.y);
        })
        .attr('r', DEFAULT_CLICKABLE_RADIUS)
        .attr('data-target-id', function (value) {
          return value.id;
        })
        .attr('data-popup-content', function (value) {
          return value.content;
        })
        .each(internal.attachBehaviorAttributesToDataPoint);
    };

    internal.attachBehaviorAttributesToDataPoint = function (dataTarget) {
      if (dataTarget.behaviorAttributes) {
        var element = d3.select(this);
        for (var attr_name in dataTarget.behaviorAttributes) {
          if (attr_name === 'class') {
            element.classed(dataTarget.behaviorAttributes[attr_name], true);
          } else {
            element.attr(attr_name, dataTarget.behaviorAttributes[attr_name]);
          }
        }
        element.attr('data-has-behavior', true)
          //Centers the popup over the data point if behavior is disclose popup
          .attr('data-popup-offset-x', DEFAULT_CLICKABLE_RADIUS)
          .attr('data-popup-offset-y', DEFAULT_CLICKABLE_RADIUS);
      }
    };

    internal.drawCriticalIndicators = function (criticalIndicatorEnter) {
      var criticalIndicatorGroups = criticalIndicatorEnter.append('g')
        .attr('class', 'OrionViz-critical-indicator')
        .attr('display', internal.shownTargets.length === 1 ? 'inline' : 'none')
        .attr('data-target-id', function (value) {
          return value.id;
        });

      criticalIndicatorGroups.append(function (value) {
        var symbol = internal.getSymbolForTarget(value.id);
        var element;
        if (symbol === 'circle') {
          element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        } else {
          element = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        }

        return element;
      })
        .attr('class', 'OrionViz-critical-outer')
        .attr('cx', function (value) {
          return internal.scale.x(value.x);
        })
        .attr('cy', function (value) {
          if (value.y === null) {
            return 0;
          }
          return internal.scale[value.yAxis](value.y);
        })
        .attr('points', function (value) {
          var cx = internal.scale.x(value.x);
          var cy = internal.scale[value.yAxis](value.y);
          var points = internal.buildPointsArrayForTarget(value.id, cx, cy, DEFAULT_RADIUS);

          return points.map(function (d) {
            return [d.x, d.y].join(',');
          }).join(' ');
        })
        .attr('r', DEFAULT_RADIUS)
        .attr('style', 'stroke-width: ' + ((CRITICAL_INNER_WIDTH + CRITICAL_OUTER_WIDTH) * 2) + ';');

      criticalIndicatorGroups.append(function (value) {
        var symbol = internal.getSymbolForTarget(value.id);
        var element;
        if (symbol === 'circle') {
          element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        } else {
          element = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        }

        return element;
      })
        .attr('class', 'OrionViz-critical-inner')
        .attr('cx', function (value) {
          return internal.scale.x(value.x);
        })
        .attr('cy', function (value) {
          if (value.y === null) {
            return 0;
          }
          return internal.scale[value.yAxis](value.y);
        })
        .attr('points', function (value) {
          var cx = internal.scale.x(value.x);
          var cy = internal.scale[value.yAxis](value.y);
          var points = internal.buildPointsArrayForTarget(value.id, cx, cy, DEFAULT_RADIUS);

          return points.map(function (d) {
            return [d.x, d.y].join(',');
          }).join(' ');
        })
        .attr('r', DEFAULT_RADIUS)
        .attr('style', 'stroke-width: ' + (CRITICAL_INNER_WIDTH * 2) + ';');
    };

    internal.getSymbolForTarget = function (id) {
      return internal.config.symbols[id] ? internal.config.symbols[id] : 'circle';
    };

    /*
     This method creates the point array to draw the polygon indicated by the given symbol
     Symbols can be found in the requirements here: https://jazz.cerner.com:9443/rm/resources/_PMGxYOluEea-Fe0rqVDCzA
     The method generates the symbol in order to fit it inside of a box with sides 2r and centered on the point
     cx, cy. Some of the symbols (cross, diamond) are simply other symbols rotated 45 degrees (achieved by the
     rotatePoints function which rotates the points given around the center point given by x degrees).
     */
    internal.buildPointsArrayForTarget = function (id, cx, cy, r) {
      var points = [];

      var symbol = internal.getSymbolForTarget(id);

      switch (symbol) {
        case 'triangle':
          points = [{ x: cx, y: cy - r }, { x: cx - r, y: cy + r }, { x: cx + r, y: cy + r }];
          break;

        case 'square':
          points = [{ x: cx - r, y: cy - r }, { x: cx + r, y: cy - r }, { x: cx + r, y: cy + r }, { x: cx - r, y: cy + r }];
          break;
        case 'x':
          points = [{ x: cx - (r / 2), y: cy - r }, { x: cx, y: cy - (r / 2) }, { x: cx + (r / 2), y: cy - r },
          { x: cx + r, y: cy - (r / 2) }, { x: cx + (r / 2), y: cy }, { x: cx + r, y: cy + (r / 2) },
          { x: cx + (r / 2), y: cy + r }, { x: cx, y: cy + (r / 2) }, { x: cx - (r / 2), y: cy + r },
          { x: cx - r, y: cy + (r / 2) }, { x: cx - (r / 2), y: cy }, { x: cx - r, y: cy - (r / 2) }];
          break;

        case 'diamond':
          points = [{ x: cx - r, y: cy - r }, { x: cx + r, y: cy - r }, { x: cx + r, y: cy + r }, { x: cx - r, y: cy + r }];
          points = internal.rotatePoints(cx, cy, points, 45);
          break;

        case 'cross':
          points = [{ x: cx - (r / 2), y: cy - r }, { x: cx, y: cy - (r / 2) }, { x: cx + (r / 2), y: cy - r },
          { x: cx + r, y: cy - (r / 2) }, { x: cx + (r / 2), y: cy }, { x: cx + r, y: cy + (r / 2) },
          { x: cx + (r / 2), y: cy + r }, { x: cx, y: cy + (r / 2) }, { x: cx - (r / 2), y: cy + r },
          { x: cx - r, y: cy + (r / 2) }, { x: cx - (r / 2), y: cy }, { x: cx - r, y: cy - (r / 2) }];
          points = internal.rotatePoints(cx, cy, points, 45);
          break;

        case 'vertical-bar':
          points = [{ x: cx + (r / 2), y: cy - r }, { x: cx + (r / 2), y: cy + r }, { x: cx - (r / 2), y: cy + r },
          { x: cx - (r / 2), y: cy - r }];
          break;
      }

      return points;
    };

    internal.rotatePoints = function (cx, cy, points, angleInDegrees) {
      var angleInRadians = angleInDegrees * Math.PI / 180;

      var newPointsArray = [];

      for (var i = 0; i < points.length; i++) {
        var point = points[i];
        var newPoint = {};

        newPoint.x = cx + ((point.x - cx) * Math.cos(angleInRadians)) - ((point.y - cy) * Math.sin(angleInRadians));
        newPoint.y = cy + ((point.x - cx) * Math.sin(angleInRadians)) + ((point.y - cy) * Math.cos(angleInRadians));

        newPointsArray.push(newPoint);
      }

      return newPointsArray;
    };


    internal.collectDataTargets = function () {
      var config = internal.config;
      var dataTargets = internal.graphContainer.data('points') ? internal.graphContainer.data('points') : [];

      // This indicates that this is the first time a graph has rendered so everything should be
      // toggled on.
      var noShownTargets = internal.graphContainer.data('shown-targets') === undefined;

      var shownTargets = internal.graphContainer.data('shown-targets') ?
        internal.graphContainer.data('shown-targets') : [];

      config.axis.y.dataRange = {};
      config.axis.y2.dataRange = {};

      var nonNumericCount = 0;
      var numericCount = 0;

      for (var i = 0, length = dataTargets.length; i < length; i++) {
        var dataTarget = dataTargets[i];
        var yAxis = dataTarget.yAxis;


        if (noShownTargets) {
          shownTargets.push(i);
        }

        var dataRange = config.axis[yAxis].dataRange;

        if (dataTarget.values.length > 0) {
          internal.noData = false;
        }

        for (var j = 0, valuesLength = dataTarget.values.length; j < valuesLength; j++) {

          var numericValue = null;

          if (dataTarget.values[j].y === null || dataTarget.values[j].y === undefined) {
            nonNumericCount++;
          } else {
            numericCount++;
            numericValue = Number(dataTarget.values[j].y);
          }

          dataTarget.values[j] = {
            x: moment.tz(dataTarget.values[j].x, internal.timezone).toDate(),
            y: numericValue,
            yAxis: yAxis,
            id: i,
            content: dataTarget.values[j].content,
            behaviorAttributes: dataTarget.values[j].behaviorAttributes,
            critical: dataTarget.values[j].critical,
            detached: dataTarget.values[j].detached
          };

          if (numericValue !== null) {
            if (!dataRange.min) {
              dataRange.min = dataTarget.values[j].y;
            } else if (dataRange.min > dataTarget.values[j].y) {
              dataRange.min = dataTarget.values[j].y;
            }

            if (!dataRange.max) {
              dataRange.max = dataTarget.values[j].y;
            } else if (dataRange.max < dataTarget.values[j].y) {
              dataRange.max = dataTarget.values[j].y;
            }
          }
        }
      }

      if (!numericCount && !nonNumericCount) {
        internal.showTimeSeries = true;
      }

      if (numericCount > 0) {
        internal.showTimeSeries = true;
      }

      if (nonNumericCount > 0) {
        internal.showTimeline = true;
      }

      if (internal.showTimeSeries) {
        if (internal.showTimeline) {
          internal.padding.bottom = 20;
        } else {
          internal.padding.bottom = TIMESERIES_BOTTOM_PADDING;
        }
      }

      internal.graphContainer.data('shown-targets', shownTargets);
      internal.shownTargets = shownTargets;

      return dataTargets;
    };

    internal.determineOutlierStretchFactor = function () {
      var config = internal.config;
      var yAxes = ['y', 'y2'];

      var upperStretchFactors = [];
      var lowerStretchFactors = [];

      for (var i = 0; i < yAxes.length; i++) {
        var yAxis = yAxes[i];
        if (config.axis[yAxis].domain) {
          var axisMaxValue = config.axis[yAxis].domain[1];
          var axisMinValue = config.axis[yAxis].domain[0];
          var dataRangeMinValue = config.axis[yAxis].dataRange.min;
          dataRangeMinValue = dataRangeMinValue < axisMinValue ? dataRangeMinValue : axisMinValue;

          var dataRangeMaxValue = config.axis[yAxis].dataRange.max;
          dataRangeMaxValue = dataRangeMaxValue > axisMaxValue ? dataRangeMaxValue : axisMaxValue;
          var axisMidValue = (config.axis[yAxis].domain[1] - config.axis[yAxis].domain[0]) / 2;
          var axisMidPoint = config.axis[yAxis].domain[0] + axisMidValue;

          var lowerStretchFactor = Math.abs((axisMidPoint - dataRangeMinValue) / (axisMidPoint - axisMinValue));
          lowerStretchFactor = lowerStretchFactor > 1 ? lowerStretchFactor : 1;

          var upperStretchFactor = Math.abs((dataRangeMaxValue - axisMidPoint) / (axisMaxValue - axisMidPoint));
          upperStretchFactor = upperStretchFactor > 1 ? upperStretchFactor : 1;

          upperStretchFactors.push(upperStretchFactor);
          lowerStretchFactors.push(lowerStretchFactor);
        }
      }

      upperStretchFactors = upperStretchFactors.sort(function (firstValue, secondValue) {
        return secondValue - firstValue;
      });

      lowerStretchFactors = lowerStretchFactors.sort(function (firstValue, secondValue) {
        return secondValue - firstValue;
      });

      var stretchFactor = {};
      stretchFactor.upper = upperStretchFactors[0];
      stretchFactor.lower = lowerStretchFactors[0];

      if (!internal.showTimeSeries) {
        stretchFactor.upper = 0.0;
        stretchFactor.lower = 0.0;
      }

      return stretchFactor;
    };

    internal.onClickDataPoint = function (event) {
      var $$ = this;
      setTimeout(function () {
        $$.graphContainer.find('.OrionViz-selected-circles').empty();

        var $target = $(event.currentTarget);

        var content = null;

        if ($target.data('popup-content')) {
          content = $$.buildPopupContent($target.data('popup-content'), $target.data('target-id'));
        }

        var box = event.currentTarget.getBoundingClientRect();

        if (content || $target.data('has-behavior')) {
          isPopUpOpen = true;
        }

        if (content) {
          var popupOptions = {
            contentHtml: content,
            position: 'bottom',
            offsetX: (box.width / 2),
            offsetY: (box.height / 2),
            maxWidth: 750
          };
          $target.trigger('navigator.disclose.popup', popupOptions);
        }

        var yValue = $target.attr('cy');

        if (yValue) {
          $$.graphCanvas.select('.OrionViz-selected-circles').append('circle')
            .attr('class', 'OrionViz-selected-circle')
            .attr('cx', $target.attr('cx'))
            .attr('cy', yValue)
            .attr('fill', '#008ED4')
            .attr('fill-opacity', 0.07)
            .attr('stroke', '#A6D9F4')
            .attr('r', DEFAULT_SELECTED_RADIUS);
        } else {
          $$.xAxisTimelineSvg.select('.OrionViz-selected-circles').append('circle')
            .attr('class', 'OrionViz-selected-circle')
            .attr('cx', $target.attr('cx'))
            .attr('cy', null)
            .attr('fill', '#008ED4')
            .attr('fill-opacity', 0.07)
            .attr('stroke', '#A6D9F4')
            .attr('r', DEFAULT_SELECTED_RADIUS);
        }

      }, 0);
    };

    internal.buildPopupContent = function (content, targetId) {
      var $$ = this;
      var dummy = d3.select('body').append('div');

      var svgElement = dummy.append('svg').attr('viewBox', '0 0 11 11');
      var symbol = $$.getSymbolForTarget(targetId);
      var color = $$.config.colors[targetId];
      var cx = 5.5;
      var cy = 5;
      var r = 3.5;
      var symbolElement;
      if (symbol === 'circle') {
        symbolElement = svgElement.append('circle').attr('cx', cx).attr('cy', cy).attr('r', r);
      } else {
        symbolElement = svgElement.append('polygon');

        var points = internal.buildPointsArrayForTarget(targetId, cx, cy, r);

        points = internal.mapPointsToString(points);

        symbolElement.attr('points', points);
      }

      symbolElement.attr('style', 'fill: ' + color);

      var defaultContent = $$.graphContainer.data('show-default-popup-label') ? '<div class="OrionViz-popup-icon">' +
        dummy.html() + '</div>' : '';

      dummy.remove();
      return '<div class="OrionViz-popup-container">' + defaultContent + content + '</div>';
    };

    internal.onClickLegendItem = function (event) {
      var $target = $(event.currentTarget);

      if ($target.attr('aria-selected') === 'true') {
        $target.attr('aria-selected', 'false');
      } else {
        $target.attr('aria-selected', 'true');
      }

      var targetId = $target.closest('.OrionViz-legend-item').data('target-id');
      var shownTargets = this.shownTargets;

      var index = shownTargets.indexOf(targetId);

      if (index > -1) {
        shownTargets.splice(index, 1);
      } else {
        shownTargets.push(targetId);
      }

      if (shownTargets.length === 1) {
        this.graphContainer.find('.OrionViz-reference-range-series[data-target-id="' + shownTargets[0] + '"]')
          .css('display', 'inline');
        this.graphContainer.find('.OrionViz-critical-indicator[data-target-id="' + shownTargets[0] + '"]')
          .css('display', 'inline');
      } else {
        this.graphContainer.find('.OrionViz-reference-range-series').css('display', 'none');
        this.graphContainer.find('.OrionViz-critical-indicator').css('display', 'none');
      }

      $target.find('.OrionViz-legend-point').toggleClass('OrionViz-legend-point-selected');

      this.graphContainer.data('shown-targets', shownTargets);

      this.graphContainer.find('path[data-target-id="' + targetId + '"]').toggle();
      this.graphContainer.find('.OrionViz-point-group[data-target-id="' + targetId + '"]').toggle();
    };

    internal.dataPoints = function (target) {
      return target.values;
    };

    internal.numericDataPoints = function (target) {
      return target.values.filter(function (value) {
        return value.y !== null;
      });
    };

    internal.nonNumericDataPoints = function (target) {
      return target.values.filter(function (value) {
        return value.y === null;
      });
    };

    internal.getInitialHeight = function () {
      return DEFAULT_HEIGHT - internal.padding.top - internal.padding.bottom;
    };

    internal.getXAxisXPosition = function () {
      return internal.axisSizes.y + internal.axisLabelWidths.y;
    };

    internal.getXAxisYPosition = function () {
      return internal.getYAxisHeight() + internal.padding.top;
    };

    internal.getXAxisLabelXPosition = function () {
      return internal.getXAxisXPosition() + (internal.getXAxisWidth() / 2);
    };

    internal.getXAxisLabelYPosition = function () {
      return internal.axisSizes.x + 10;
    };

    internal.getYAxisXPosition = function () {
      return internal.getXAxisXPosition();
    };

    internal.getYAxisYPosition = function () {
      return internal.padding.top;
    };

    internal.getYAxisLabelXPosition = function () {
      return internal.getYAxisXPosition() - internal.axisLabelWidths.y - internal.padding.left;
    };

    internal.getYAxisLabelYPosition = function () {
      return internal.getYAxisYPosition() + (internal.getInitialHeight() / 2) *
        internal.config.outlierStretchFactor.upper;
    };

    internal.getY2AxisXPosition = function () {
      return internal.getYAxisXPosition() + internal.getXAxisWidth();
    };

    internal.getY2AxisYPosition = function () {
      return internal.padding.top;
    };

    internal.getY2AxisLabelXPosition = function () {
      return internal.getY2AxisXPosition() + internal.axisSizes.y2 - internal.padding.right +
        internal.axisLabelWidths.y2;
    };

    internal.getXAxisWidth = function () {
      return internal.canvasWidth - internal.axisSizes.y - internal.axisSizes.y2 -
        internal.axisLabelWidths.y - internal.axisLabelWidths.y2;
    };

    internal.getXAxisRange = function () {
      return [0, internal.getXAxisWidth()];
    };

    internal.getYAxisHeight = function () {
      return internal.height;
    };

    internal.getYAxisRange = function () {
      return [internal.getYAxisHeight(), 0];
    };

    internal.dateChanged = function (previousDate, currentDate) {
      return previousDate.month() !== currentDate.month() || previousDate.date() !== currentDate.date();
    };

    internal.yearChanged = function (previousDate, currentDate) {
      return previousDate.year() !== currentDate.year();
    };

    internal.formatXTicks = function (tickMarks, hideTicks) {
      var previousDate = null;

      tickMarks.each(function () {
        var textElement = d3.select(this);
        var textContent = textElement.text();

        var date = moment.tz(textContent, internal.timezone);

        var timeFormat = internal.getTimeFormat(date);

        textElement.text('');

        if (!hideTicks) {
          if (!internal.config.hideTickTimes) {
            textElement.append('tspan').text(date.format(timeFormat));
          }

          if (previousDate === null) {
            textElement.append('tspan').attr('dy', '1.2em')
              .attr('x', '0').text(date.format(Globalize.formatMessage('MONTH_DATE_COMMA_FORMAT')));
            textElement.append('tspan').attr('dy', '1.2em')
              .attr('x', '0').text(date.format(Globalize.formatMessage('YEAR')));
          }
          else if (internal.yearChanged(previousDate, date) || internal.dateChanged(previousDate, date)) {
            if (internal.yearChanged(previousDate, date)) {
              textElement.append('tspan').attr('dy', '1.2em')
                .attr('x', '0').text(date.format(Globalize.formatMessage('MONTH_DATE_COMMA_FORMAT')));
              textElement.append('tspan').attr('dy', '1.2em')
                .attr('x', '0').text(date.format(Globalize.formatMessage('YEAR')));
            }
            else {
              textElement.append('tspan').attr('dy', '1.2em')
                .attr('x', '0').text(date.format(Globalize.formatMessage('MONTH_DATE_FORMAT')));
            }
          }
          previousDate = date;
        }
      });
    };

    internal.getTimeFormat = function (date) {
      var dstTickMarks = internal.config.axis.x.tickValuesWithTimezone;
      for (var i = 0; i < dstTickMarks.length; i++) {
        if (date.format() === dstTickMarks[i].format()) {
          return Globalize.formatMessage('TIME_FORMAT_WITH_ZONE');
        }
      }

      return Globalize.formatMessage('TIME_FORMAT');
    };

    internal.calculateYAxisSizes = function () {
      internal.axisSizes.y = internal.getYAxisWidth('y') + internal.padding.left;
      internal.axisSizes.y2 = (internal.config.axis.y2.show ? internal.getYAxisWidth('y2') : 20) +
        internal.padding.right;
      internal.axisLabelWidths.y = internal.getYAxisLabelWidth();
      internal.axisLabelWidths.y2 = internal.config.axis.y2.show ? internal.getY2AxisLabelWidth() : 0;
    };

    internal.calculateXAxisSizes = function () {
      internal.axisSizes.x = internal.getXAxisHeight();
      internal.axisLabelHeights.x = internal.getAxisLabelHeight(internal.config.axis.x.labelLines);
    };

    internal.getYAxisWidth = function (id) {
      var config = internal.config;

      var domain = config.axis[id].domain;

      var scale = d3.scale.linear().domain(domain).range([internal.height, 0]);

      var axis = d3.svg.axis().scale(scale).orient('left');

      var dummy = d3.select('body').append('div');
      var svg = dummy.append('svg').style('visiblity', 'hidden').style('position', 'fixed').style('top', 0)
        .style('left', 0);

      var maxWidth = 0;
      svg.append('g').call(axis).each(function () {
        var box = this.getBoundingClientRect();
        maxWidth = box.width;
        dummy.remove();
      });

      return maxWidth;
    };

    internal.getYAxisLabelWidth = function () {
      var labelLines = internal.config.axis.y.defaultLabel ? internal.config.axis.defaultLabels.y :
        internal.config.axis.y.labelLines;

      return internal.getAxisLabelWidth(labelLines, internal.config.axis.y.defaultLabel);

    };

    internal.getY2AxisLabelWidth = function () {
      var labelLines = internal.config.axis.y2.defaultLabel ? internal.config.axis.defaultLabels.y2 :
        internal.config.axis.y2.labelLines;
      return internal.getAxisLabelWidth(labelLines, internal.config.axis.y2.defaultLabel);
    };

    internal.getAxisLabelWidth = function (labelLines, isDefaultLabel) {
      var dummy = d3.select('body').append('div');

      var svg = dummy.append('svg').style('visibility', 'hidden').style('position', 'fixed').style('top', 0)
        .style('left', 0);

      var grouper = svg.append('g').attr('transform', 'rotate(' + internal.getRotationForAxis('y2') + ')');

      grouper = internal.buildAxisLabel(grouper, labelLines, isDefaultLabel, 'y', DEFAULT_HEIGHT);

      var width = grouper.node() ? grouper.node().getBoundingClientRect().width : 0;

      dummy.remove();

      return width;
    };

    internal.getAxisLabelHeight = function (labelLines) {
      if (labelLines.length === 0) {
        return 0;
      }

      var dummy = d3.select('body').append('div');

      var svg = dummy.append('svg').style('visibility', 'hidden').style('position', 'fixed').style('top', 0)
        .style('left', 0);

      var grouper = svg.append('g');

      grouper = internal.buildAxisLabel(grouper, labelLines, false, 'x', internal.getXAxisWidth());

      var height = grouper.node() ? grouper.node().getBoundingClientRect().height : 0;

      dummy.remove();

      return height;
    };

    internal.buildAxisLabel = function (grouper, linesForLabel, isDefaultLabel, axis, maxSize) {
      var rotation = internal.getRotationForAxis(axis);
      if (isDefaultLabel) {
        return internal.buildDefaultAxisLabel(grouper, linesForLabel, maxSize, rotation);
      } else {
        return internal.buildNonDefaultAxisLabel(grouper, linesForLabel, axis, maxSize, rotation);
      }
    };

    internal.isYAxis = function (axis) {
      return axis === 'y' || axis === 'y2';
    };

    internal.getRotationForAxis = function (axis) {
      switch (axis) {
        case 'y':
          return -90;
        case 'y2':
          return 90;
        default:
          return 0;
      }
    };

    internal.buildDefaultAxisLabel = function (grouper, linesForLabel, maxSize, rotation) {
      var DEFAULT_SPACE = 10;
      var LINE_HEIGHT = 18;
      var rowGrouper = grouper.append('g').attr('class', 'OrionViz-axis-label-row');
      var currentItemX = 0;
      var currentRowY = 0;
      var rowWidth = 0;

      var firstItem = internal.createLabelElement(rowGrouper, linesForLabel[0], currentItemX, rotation);

      currentItemX = currentItemX +
        (firstItem.node() ? firstItem.node().getBoundingClientRect().height : 0) + DEFAULT_SPACE;

      for (var i = 1; i < linesForLabel.length; i++) {
        var labelLineIndex = linesForLabel[i];
        var itemGrouper = internal.createLabelElement(rowGrouper, labelLineIndex, currentItemX, rotation);

        rowWidth = rowGrouper.node() ? rowGrouper.node().getBoundingClientRect().height : 0;

        if (rowWidth > maxSize) {
          itemGrouper.remove();

          rowWidth = rowGrouper.node() ? rowGrouper.node().getBoundingClientRect().height : 0;

          rowGrouper.attr('transform', 'translate(-' + (rowWidth / 2) + ', ' + currentRowY + ')');

          currentRowY = currentRowY + LINE_HEIGHT;
          currentItemX = 0;

          rowGrouper = grouper.append('g').attr('class', 'OrionViz-axis-label-row');

          itemGrouper = internal.createLabelElement(rowGrouper, labelLineIndex, currentItemX, rotation);
        }

        currentItemX = currentItemX +
          (itemGrouper.node() ? itemGrouper.node().getBoundingClientRect().height : 0) + DEFAULT_SPACE;
      }

      rowWidth = rowGrouper.node() ? rowGrouper.node().getBoundingClientRect().height : 0;

      rowGrouper.attr('transform', 'translate(-' + (rowWidth / 2) + ', ' + currentRowY + ')');

      return grouper;
    };

    internal.createLabelElement = function (rowGrouper, labelLineIndex, xPosition, rotation) {
      var symbol = internal.getSymbolForTarget(labelLineIndex);
      var color = internal.config.colors[labelLineIndex];
      var DEFAULT_SPACE = 3;
      var itemGrouper = rowGrouper.append('g').attr('class', 'OrionViz-axis-label-item')
        .attr('transform', 'translate(' + xPosition + ', 0)');

      var symbolElement;
      var cy = -4;
      var r = DEFAULT_RADIUS;

      var target = internal.dataTargets[labelLineIndex];
      var label = target ? target.label : '';
      var textElement = itemGrouper.append('text').text(internal.truncateText(label));

      var textElementWidth = textElement.node() ? textElement.node().getBoundingClientRect().height : 0;
      var cx = DEFAULT_RADIUS + textElementWidth + DEFAULT_SPACE;

      if (symbol === 'circle') {
        symbolElement = itemGrouper.append('circle').attr('cx', cx)
          .attr('cy', cy).attr('r', r);
      } else {
        var points = internal.buildPointsArrayForTarget(labelLineIndex, cx, cy, r);
        points = internal.rotatePoints(cx, cy, points, (rotation * -1));
        points = internal.mapPointsToString(points);
        symbolElement = itemGrouper.append('polygon').attr('points', points);
      }
      symbolElement.attr('style', 'fill: ' + color);

      return itemGrouper;
    };

    internal.truncateText = function (textLine) {
      var truncatedText;
      // The maximum number of characters that will fit in the vertical space of the graph is 27
      // characters + the symbol of the data variable, so truncation takes place after 24 with an
      // added ellipsis.
      if (textLine && textLine.length > 27) {
        truncatedText = textLine.substring(0, 23) + '...';
      } else {
        truncatedText = textLine;
      }

      return truncatedText;
    };

    internal.buildNonDefaultAxisLabel = function (grouper, linesForLabel, axis, maxSize, rotation) {
      var delimiter = '';
      var isYAxis = internal.isYAxis(axis);

      var dummy = d3.select('body').append('div');

      var svg = dummy.append('svg').style('visibility', 'hidden').style('position', 'fixed').style('top', 0)
        .style('left', 0);

      var dummyText = svg.append('text').attr('text-anchor', 'middle')
        .attr('transform', 'rotate(' + rotation + ')').append('tspan');

      dummyText.text(linesForLabel[0]);

      var textElement = grouper.append('text').attr('text-anchor', 'middle');

      if (linesForLabel.length === 1) {
        textElement.append('tspan').attr('x', '0').text(linesForLabel[0]);
      } else {
        var numberOfLines = 0;
        for (var i = 1; i < linesForLabel.length; i++) {
          var previousText = dummyText.text();

          dummyText.text(previousText + delimiter + ' ' + linesForLabel[i]);

          // If we're building a Y-Axis we want to use height since they are rotated, otherwise use
          // the width
          var textSize = isYAxis ? dummyText.node().getBoundingClientRect().height :
            dummyText.node().getBoundingClientRect().width;

          if (textSize > maxSize) {

            dummyText.text(previousText + (i < linesForLabel.length ? delimiter : ''));

            textElement.append('tspan').attr('x', '0').attr('dy', numberOfLines > 0 ? '1.1em' : '')
              .text(dummyText.text());
            numberOfLines++;
            dummyText.text(linesForLabel[i]);

            if (i === linesForLabel.length - 1) {
              textElement.append('tspan').attr('x', '0').attr('dy', numberOfLines > 0 ? '1.1em' : '')
                .text(dummyText.text());
            }
          } else if (i === linesForLabel.length - 1) {
            textElement.append('tspan').attr('x', '0').attr('dy', numberOfLines > 0 ? '1.1em' : '')
              .text(dummyText.text());
          }
        }

        dummy.remove();
      }

      if (internal.config.axis.y2.show && axis !== 'x') {
        var symbolGrouper = grouper.append('g');

        var defaultLabels = internal.config.axis.defaultLabels[axis];

        var cx = DEFAULT_RADIUS;
        var cy = 0;
        var r = DEFAULT_RADIUS;

        for (var j = 0; j < defaultLabels.length; j++) {
          var DEFAULT_SPACING = 20;
          var targetIndex = defaultLabels[j];
          var symbol = internal.getSymbolForTarget(targetIndex);
          var color = internal.config.colors[targetIndex];

          var symbolElement;

          if (symbol === 'circle') {
            symbolElement = symbolGrouper.append('circle').attr('cx', cx)
              .attr('cy', cy).attr('r', r);
          } else {
            var points = internal.buildPointsArrayForTarget(targetIndex, cx, cy, r);
            points = internal.rotatePoints(cx, cy, points, (rotation * -1));
            points = internal.mapPointsToString(points);
            symbolElement = symbolGrouper.append('polygon').attr('points', points);
          }
          symbolElement.attr('style', 'fill: ' + color);

          cx = cx + DEFAULT_SPACING;
        }

        var textElementWidth = textElement.node() ? textElement.node().getBoundingClientRect().width : 0;
        var symbolGrouperHeight = symbolGrouper.node() ? symbolGrouper.node().getBoundingClientRect().height : 0;

        var xPos = (symbolGrouperHeight / 2);
        var yPos = textElementWidth - 5;

        symbolGrouper
          .attr('transform', 'translate(-' + xPos + ', ' + yPos + ')');
      }

      textElement.selectAll('tspan').each(function () {
        var tspanElement = d3.select(this);
        var tspanHeight = tspanElement.node().getBoundingClientRect().height;
        if (tspanHeight > maxSize) {
          var text = tspanElement.text();
          var lastItem = text.charAt(text.length - 1) !== ',';
          var oneCharacterWidth = tspanHeight / text.length;
          var maxCharacters = maxSize / oneCharacterWidth;
          text = text.substring(0, maxCharacters - 4) + '...' + (lastItem ? '' : delimiter);

          tspanElement.text(text);
        }
      });

      return grouper;
    };

    internal.getXAxisHeight = function () {
      var config = internal.config;
      var container = internal.graphContainer;

      var domain = config.axis.x.domain;

      var scale = d3.time.scale().domain(domain).range([0, container.width()]);

      var axis = d3.svg.axis().scale(scale).orient('bottom');

      var dummy = d3.select('body').append('div');
      var svg = dummy.append('svg').style('visiblity', 'hidden').style('position', 'fixed').style('top', 0)
        .style('left', 0);

      var height = 0;
      var svgAxis = svg.append('g').call(axis);

      svgAxis.selectAll('.tick text').call(internal.formatXTicks);

      svgAxis.each(function () {
        var box = this.getBoundingClientRect();
        height = box.height;
        dummy.remove();
      });

      return height;
    };

    internal.getXAxisHeight = function () {
      var config = internal.config;
      var container = internal.graphContainer;

      var domain = config.axis.x.domain;

      var scale = d3.time.scale().domain(domain).range([0, container.width()]);

      var axis = d3.svg.axis().scale(scale).orient('bottom');

      var dummy = d3.select('body').append('div');
      var svg = dummy.append('svg').style('visiblity', 'hidden').style('position', 'fixed').style('top', 0)
        .style('left', 0);

      var height = 0;
      var svgAxis = svg.append('g').call(axis);

      svgAxis.selectAll('.tick text').call(internal.formatXTicks);

      svgAxis.each(function () {
        var box = this.getBoundingClientRect();
        height = box.height;
        dummy.remove();
      });

      return height;
    };

    internal.generateDSTBorderTicks = function (tickValues) {
      var timeZone = internal.timezone;
      var dstBorderTimes = [];

      for (var i = 0; i < tickValues.length; i++) {
        var currentTime = moment.tz(tickValues[i], timeZone);

        var timeBefore = tickValues[i - 1];
        var timeAfter = tickValues[i + 1];

        var bordersDst = false;

        if (timeBefore) {
          timeBefore = moment.tz(timeBefore, timeZone);
          bordersDst = timeBefore.isDST() !== currentTime.isDST();
        }

        if (timeAfter) {
          timeAfter = moment.tz(timeAfter, timeZone);
          bordersDst = bordersDst || timeAfter.isDST() !== currentTime.isDST();
        }

        if (bordersDst) {
          dstBorderTimes.push(currentTime);
        }
      }

      return dstBorderTimes;
    };

    internal.highlightTarget = function (event) {
      var $target = $(event.currentTarget);

      var targetIndex = $target.closest('.OrionViz-legend-item').data('target-id');

      for (var i = 0; i < this.dataTargets.length; i++) {
        if (i !== targetIndex) {
          this.graphContainer.find('path[data-target-id="' + i + '"]')
            .toggleClass('OrionViz-defocused');
          this.graphContainer.find('.OrionViz-point-group[data-target-id="' + i + '"]')
            .toggleClass('OrionViz-defocused');
        }
      }

      this.graphContainer.find('path[data-target-id="' + targetIndex + '"]').toggleClass('highlighted');
    };

    internal.scrollHandler = function (event) {
      var $target = $(event.currentTarget);
      var yPos = $target.scrollTop() + (DEFAULT_HEIGHT / 2);
      this.yAxisLabelGrouper.attr('transform', 'translate(' + internal.getYAxisLabelXPosition() + ', ' + yPos +
        ') rotate(' + internal.getRotationForAxis('y') + ')');
      if (this.config.axis.y2.show) {
        this.y2AxisLabelGrouper.attr('transform', 'translate(' + internal.getY2AxisLabelXPosition() + ', ' + yPos +
          ') rotate(' + internal.getRotationForAxis('y2') + ')');
      }
    };

    internal.resize = function () {

      if (isPopUpOpen) {
        TerraRailsViewModels.ResponsivePopup.close();
      }
      var scrollPosition = this.graphContainer.find('.OrionViz-graph-canvas').scrollTop();
      this.initializeGraph();
      this.draw(scrollPosition);
      this.graphContainer.find('.OrionViz-graph-canvas')
        .on('scroll', this.scrollHandler.bind(this));
    };

    //Allows chart to resize when the slide panel opens or closes
    $('.terraVM-SlidePanel-master').on('transitionend',
      TerraRailsViewModels.debounce(internal.resize.bind(internal), 100));

    $(window).on('Terra.resizeEnd', internal.resize.bind(internal));

    internal.graphContainer.on('click', '.OrionViz-point-click-target', internal.onClickDataPoint.bind(internal));

    $(document).on('TerraRailsViewModel.ResponsivePopup.didClose', function () {
      isPopUpOpen = false;
      $('.OrionViz-selected-circles').empty();
    });

    $(document).on('navigator.dismiss', function () {
      isPopUpOpen = false;
      $('.OrionViz-selected-circles').empty();
    });

    internal.graphContainer.on('click', '.OrionViz-legend-item-tile button', internal.onClickLegendItem.bind(internal));

    internal.graphContainer.on({
      mouseenter: internal.highlightTarget.bind(internal),
      mouseleave: internal.highlightTarget.bind(internal)
    }, '.OrionViz-legend-item-tile button');

    internal.initializeGraph();
    internal.draw();

    internal.graphContainer.find('.OrionViz-graph-canvas')
      .on('scroll', internal.scrollHandler.bind(internal));
  };

  var graphClass = '.orion-viz-graph';

  $.each($(graphClass), function (index, value) {
    new OrionViz.TimeSeriesGraph($(value));
  });

  $(document).on('orion.navigator.contentDidLoad', function (event, $loadedContent) {
    $.each($loadedContent.find(graphClass).addBack(graphClass), function (index, value) {
      new OrionViz.TimeSeriesGraph($(value));
    });
  });
})(window, jQuery, window.OrionViz);
