(self["webpackChunkbingo"] = self["webpackChunkbingo"] || []).push([["dashboard"],{

/***/ "./assets/dist/js/pages/dashboard.js":
/*!*******************************************!*\
  !*** ./assets/dist/js/pages/dashboard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/
$(function () {
  'use strict'; // Make the dashboard widgets sortable Using jquery UI

  $('.connectedSortable').sortable({
    placeholder: 'sort-highlight',
    connectWith: '.connectedSortable',
    handle: '.card-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex: 999999
  });
  $('.connectedSortable .card-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move'); // jQuery UI sortable for the todo list

  $('.todo-list').sortable({
    placeholder: 'sort-highlight',
    handle: '.handle',
    forcePlaceholderSize: true,
    zIndex: 999999
  }); // bootstrap WYSIHTML5 - text editor

  $('.textarea').summernote();
  /*
  $('.daterange').daterangepicker({
    ranges   : {
      'Today'       : [moment(), moment()],
      'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month'  : [moment().startOf('month'), moment().endOf('month')],
      'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate  : moment()
  }, function (start, end) {
    window.alert('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
  })
  */

  /* jQueryKnob */

  $('.knob').knob(); // jvectormap data

  var visitorsData = {
    'US': 398,
    //USA
    'SA': 400,
    //Saudi Arabia
    'CA': 1000,
    //Canada
    'DE': 500,
    //Germany
    'FR': 760,
    //France
    'CN': 300,
    //China
    'AU': 700,
    //Australia
    'BR': 600,
    //Brazil
    'IN': 800,
    //India
    'GB': 320,
    //Great Britain
    'RU': 3000 //Russia

  };
  /*
  // World map by jvectormap
  $('#world-map').vectorMap({
    map              : 'usa_en',
    backgroundColor  : 'transparent',
    regionStyle      : {
      initial: {
        fill            : 'rgba(255, 255, 255, 0.7)',
        'fill-opacity'  : 1,
        stroke          : 'rgba(0,0,0,.2)',
        'stroke-width'  : 1,
        'stroke-opacity': 1
      }
    },
    series           : {
      regions: [{
        values           : visitorsData,
        scale            : ['#ffffff', '#0154ad'],
        normalizeFunction: 'polynomial'
      }]
    },
    onRegionLabelShow: function (e, el, code) {
      if (typeof visitorsData[code] != 'undefined')
        el.html(el.html() + ': ' + visitorsData[code] + ' new visitors')
    }
  })
  */
  // Sparkline charts

  /*
  var sparkline1 = new Sparkline($("#sparkline-1")[0], {width: 80, height: 50, lineColor: '#92c1dc', endColor: '#ebf4f9'});
  var sparkline2 = new Sparkline($("#sparkline-2")[0], {width: 80, height: 50, lineColor: '#92c1dc', endColor: '#ebf4f9'});
  var sparkline3 = new Sparkline($("#sparkline-3")[0], {width: 80, height: 50, lineColor: '#92c1dc', endColor: '#ebf4f9'});
   sparkline1.draw([1000, 1200, 920, 927, 931, 1027, 819, 930, 1021]);
  sparkline2.draw([515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921]);
  sparkline3.draw([15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21]);
  */

  /*
  // The Calender
  $('#calendar').datetimepicker({
    format: 'L',
    inline: true
  })
  */
  // SLIMSCROLL FOR CHAT WIDGET

  $('#chat-box').overlayScrollbars({
    height: '250px'
  });
  /* Chart.js Charts */
  // Sales chart
  //var salesChartCanvas = document.getElementById('revenue-chart-canvas').getContext('2d');
  //$('#revenue-chart').get(0).getContext('2d');

  var salesChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Digital Goods',
      backgroundColor: 'rgba(60,141,188,0.9)',
      borderColor: 'rgba(60,141,188,0.8)',
      pointRadius: false,
      pointColor: '#3b8bba',
      pointStrokeColor: 'rgba(60,141,188,1)',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(60,141,188,1)',
      data: [28, 48, 40, 19, 86, 27, 90]
    }, {
      label: 'Electronics',
      backgroundColor: 'rgba(210, 214, 222, 1)',
      borderColor: 'rgba(210, 214, 222, 1)',
      pointRadius: false,
      pointColor: 'rgba(210, 214, 222, 1)',
      pointStrokeColor: '#c1c7d1',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }]
  };
  var salesChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  };
  /*
  // This will get the first returned node in the jQuery collection.
  var salesChart = new Chart(salesChartCanvas, { 
      type: 'line', 
      data: salesChartData, 
      options: salesChartOptions
    }
  )
  */
  // Donut Chart
  //var pieChartCanvas = $('#sales-chart-canvas').get(0).getContext('2d')

  var pieData = {
    labels: ['Instore Sales', 'Download Sales', 'Mail-Order Sales'],
    datasets: [{
      data: [30, 12, 20],
      backgroundColor: ['#f56954', '#00a65a', '#f39c12']
    }]
  };
  var pieOptions = {
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true
  };
  /*
  //Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  var pieChart = new Chart(pieChartCanvas, {
    type: 'doughnut',
    data: pieData,
    options: pieOptions      
  });
  */
  // Sales graph chart
  //var salesGraphChartCanvas = $('#line-chart').get(0).getContext('2d');
  //$('#revenue-chart').get(0).getContext('2d');

  var salesGraphChartData = {
    labels: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4', '2013 Q1', '2013 Q2'],
    datasets: [{
      label: 'Digital Goods',
      fill: false,
      borderWidth: 2,
      lineTension: 0,
      spanGaps: true,
      borderColor: '#efefef',
      pointRadius: 3,
      pointHoverRadius: 7,
      pointColor: '#efefef',
      pointBackgroundColor: '#efefef',
      data: [2666, 2778, 4912, 3767, 6810, 5670, 4820, 15073, 10687, 8432]
    }]
  };
  var salesGraphChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: '#efefef'
        },
        gridLines: {
          display: false,
          color: '#efefef',
          drawBorder: false
        }
      }],
      yAxes: [{
        ticks: {
          stepSize: 5000,
          fontColor: '#efefef'
        },
        gridLines: {
          display: true,
          color: '#efefef',
          drawBorder: false
        }
      }]
    }
  };
  /*
  // This will get the first returned node in the jQuery collection.
  var salesGraphChart = new Chart(salesGraphChartCanvas, { 
      type: 'line', 
      data: salesGraphChartData, 
      options: salesGraphChartOptions
    }
  )
  */
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/dist/js/pages/dashboard.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5nby8uL2Fzc2V0cy9kaXN0L2pzL3BhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyIkIiwic29ydGFibGUiLCJwbGFjZWhvbGRlciIsImNvbm5lY3RXaXRoIiwiaGFuZGxlIiwiZm9yY2VQbGFjZWhvbGRlclNpemUiLCJ6SW5kZXgiLCJjc3MiLCJzdW1tZXJub3RlIiwia25vYiIsInZpc2l0b3JzRGF0YSIsIm92ZXJsYXlTY3JvbGxiYXJzIiwiaGVpZ2h0Iiwic2FsZXNDaGFydERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJwb2ludFJhZGl1cyIsInBvaW50Q29sb3IiLCJwb2ludFN0cm9rZUNvbG9yIiwicG9pbnRIaWdobGlnaHRGaWxsIiwicG9pbnRIaWdobGlnaHRTdHJva2UiLCJkYXRhIiwic2FsZXNDaGFydE9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicmVzcG9uc2l2ZSIsImxlZ2VuZCIsImRpc3BsYXkiLCJzY2FsZXMiLCJ4QXhlcyIsImdyaWRMaW5lcyIsInlBeGVzIiwicGllRGF0YSIsInBpZU9wdGlvbnMiLCJzYWxlc0dyYXBoQ2hhcnREYXRhIiwiZmlsbCIsImJvcmRlcldpZHRoIiwibGluZVRlbnNpb24iLCJzcGFuR2FwcyIsInBvaW50SG92ZXJSYWRpdXMiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInNhbGVzR3JhcGhDaGFydE9wdGlvbnMiLCJ0aWNrcyIsImZvbnRDb2xvciIsImNvbG9yIiwiZHJhd0JvcmRlciIsInN0ZXBTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDLFlBQVk7QUFFWixlQUZZLENBSVo7O0FBQ0FBLEdBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCQyxRQUF4QixDQUFpQztBQUMvQkMsZUFBVyxFQUFXLGdCQURTO0FBRS9C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RjtBQUxOLE9BQUQ7QUFYRDtBQU5tQixHQUE3QjtBQStCQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQyxDQWxSQSxDQUFELEMiLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEF1dGhvcjogQWJkdWxsYWggQSBBbG1zYWVlZFxuICogRGF0ZTogNCBKYW4gMjAxNFxuICogRGVzY3JpcHRpb246XG4gKiAgICAgIFRoaXMgaXMgYSBkZW1vIGZpbGUgdXNlZCBvbmx5IGZvciB0aGUgbWFpbiBkYXNoYm9hcmQgKGluZGV4Lmh0bWwpXG4gKiovXG5cbiQoZnVuY3Rpb24gKCkge1xuXG4gICd1c2Ugc3RyaWN0J1xuXG4gIC8vIE1ha2UgdGhlIGRhc2hib2FyZCB3aWRnZXRzIHNvcnRhYmxlIFVzaW5nIGpxdWVyeSBVSVxuICAkKCcuY29ubmVjdGVkU29ydGFibGUnKS5zb3J0YWJsZSh7XG4gICAgcGxhY2Vob2xkZXIgICAgICAgICA6ICdzb3J0LWhpZ2hsaWdodCcsXG4gICAgY29ubmVjdFdpdGggICAgICAgICA6ICcuY29ubmVjdGVkU29ydGFibGUnLFxuICAgIGhhbmRsZSAgICAgICAgICAgICAgOiAnLmNhcmQtaGVhZGVyLCAubmF2LXRhYnMnLFxuICAgIGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxuICAgIHpJbmRleCAgICAgICAgICAgICAgOiA5OTk5OTlcbiAgfSlcbiAgJCgnLmNvbm5lY3RlZFNvcnRhYmxlIC5jYXJkLWhlYWRlciwgLmNvbm5lY3RlZFNvcnRhYmxlIC5uYXYtdGFicy1jdXN0b20nKS5jc3MoJ2N1cnNvcicsICdtb3ZlJylcblxuICAvLyBqUXVlcnkgVUkgc29ydGFibGUgZm9yIHRoZSB0b2RvIGxpc3RcbiAgJCgnLnRvZG8tbGlzdCcpLnNvcnRhYmxlKHtcbiAgICBwbGFjZWhvbGRlciAgICAgICAgIDogJ3NvcnQtaGlnaGxpZ2h0JyxcbiAgICBoYW5kbGUgICAgICAgICAgICAgIDogJy5oYW5kbGUnLFxuICAgIGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxuICAgIHpJbmRleCAgICAgICAgICAgICAgOiA5OTk5OTlcbiAgfSlcblxuICAvLyBib290c3RyYXAgV1lTSUhUTUw1IC0gdGV4dCBlZGl0b3JcbiAgJCgnLnRleHRhcmVhJykuc3VtbWVybm90ZSgpXG5cblxuICAvKlxuICAkKCcuZGF0ZXJhbmdlJykuZGF0ZXJhbmdlcGlja2VyKHtcbiAgICByYW5nZXMgICA6IHtcbiAgICAgICdUb2RheScgICAgICAgOiBbbW9tZW50KCksIG1vbWVudCgpXSxcbiAgICAgICdZZXN0ZXJkYXknICAgOiBbbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheXMnKSwgbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheXMnKV0sXG4gICAgICAnTGFzdCA3IERheXMnIDogW21vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJyksIG1vbWVudCgpXSxcbiAgICAgICdMYXN0IDMwIERheXMnOiBbbW9tZW50KCkuc3VidHJhY3QoMjksICdkYXlzJyksIG1vbWVudCgpXSxcbiAgICAgICdUaGlzIE1vbnRoJyAgOiBbbW9tZW50KCkuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KCkuZW5kT2YoJ21vbnRoJyldLFxuICAgICAgJ0xhc3QgTW9udGgnICA6IFttb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5lbmRPZignbW9udGgnKV1cbiAgICB9LFxuICAgIHN0YXJ0RGF0ZTogbW9tZW50KCkuc3VidHJhY3QoMjksICdkYXlzJyksXG4gICAgZW5kRGF0ZSAgOiBtb21lbnQoKVxuICB9LCBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICAgIHdpbmRvdy5hbGVydCgnWW91IGNob3NlOiAnICsgc3RhcnQuZm9ybWF0KCdNTU1NIEQsIFlZWVknKSArICcgLSAnICsgZW5kLmZvcm1hdCgnTU1NTSBELCBZWVlZJykpXG4gIH0pXG4gICovXG5cbiAgLyogalF1ZXJ5S25vYiAqL1xuICAkKCcua25vYicpLmtub2IoKVxuXG4gIC8vIGp2ZWN0b3JtYXAgZGF0YVxuICB2YXIgdmlzaXRvcnNEYXRhID0ge1xuICAgICdVUyc6IDM5OCwgLy9VU0FcbiAgICAnU0EnOiA0MDAsIC8vU2F1ZGkgQXJhYmlhXG4gICAgJ0NBJzogMTAwMCwgLy9DYW5hZGFcbiAgICAnREUnOiA1MDAsIC8vR2VybWFueVxuICAgICdGUic6IDc2MCwgLy9GcmFuY2VcbiAgICAnQ04nOiAzMDAsIC8vQ2hpbmFcbiAgICAnQVUnOiA3MDAsIC8vQXVzdHJhbGlhXG4gICAgJ0JSJzogNjAwLCAvL0JyYXppbFxuICAgICdJTic6IDgwMCwgLy9JbmRpYVxuICAgICdHQic6IDMyMCwgLy9HcmVhdCBCcml0YWluXG4gICAgJ1JVJzogMzAwMCAvL1J1c3NpYVxuICB9XG5cbiAgLypcbiAgLy8gV29ybGQgbWFwIGJ5IGp2ZWN0b3JtYXBcbiAgJCgnI3dvcmxkLW1hcCcpLnZlY3Rvck1hcCh7XG4gICAgbWFwICAgICAgICAgICAgICA6ICd1c2FfZW4nLFxuICAgIGJhY2tncm91bmRDb2xvciAgOiAndHJhbnNwYXJlbnQnLFxuICAgIHJlZ2lvblN0eWxlICAgICAgOiB7XG4gICAgICBpbml0aWFsOiB7XG4gICAgICAgIGZpbGwgICAgICAgICAgICA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICAgICAgICAnZmlsbC1vcGFjaXR5JyAgOiAxLFxuICAgICAgICBzdHJva2UgICAgICAgICAgOiAncmdiYSgwLDAsMCwuMiknLFxuICAgICAgICAnc3Ryb2tlLXdpZHRoJyAgOiAxLFxuICAgICAgICAnc3Ryb2tlLW9wYWNpdHknOiAxXG4gICAgICB9XG4gICAgfSxcbiAgICBzZXJpZXMgICAgICAgICAgIDoge1xuICAgICAgcmVnaW9uczogW3tcbiAgICAgICAgdmFsdWVzICAgICAgICAgICA6IHZpc2l0b3JzRGF0YSxcbiAgICAgICAgc2NhbGUgICAgICAgICAgICA6IFsnI2ZmZmZmZicsICcjMDE1NGFkJ10sXG4gICAgICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiAncG9seW5vbWlhbCdcbiAgICAgIH1dXG4gICAgfSxcbiAgICBvblJlZ2lvbkxhYmVsU2hvdzogZnVuY3Rpb24gKGUsIGVsLCBjb2RlKSB7XG4gICAgICBpZiAodHlwZW9mIHZpc2l0b3JzRGF0YVtjb2RlXSAhPSAndW5kZWZpbmVkJylcbiAgICAgICAgZWwuaHRtbChlbC5odG1sKCkgKyAnOiAnICsgdmlzaXRvcnNEYXRhW2NvZGVdICsgJyBuZXcgdmlzaXRvcnMnKVxuICAgIH1cbiAgfSlcbiAgKi9cblxuICAvLyBTcGFya2xpbmUgY2hhcnRzXG4gIC8qXG4gIHZhciBzcGFya2xpbmUxID0gbmV3IFNwYXJrbGluZSgkKFwiI3NwYXJrbGluZS0xXCIpWzBdLCB7d2lkdGg6IDgwLCBoZWlnaHQ6IDUwLCBsaW5lQ29sb3I6ICcjOTJjMWRjJywgZW5kQ29sb3I6ICcjZWJmNGY5J30pO1xuICB2YXIgc3BhcmtsaW5lMiA9IG5ldyBTcGFya2xpbmUoJChcIiNzcGFya2xpbmUtMlwiKVswXSwge3dpZHRoOiA4MCwgaGVpZ2h0OiA1MCwgbGluZUNvbG9yOiAnIzkyYzFkYycsIGVuZENvbG9yOiAnI2ViZjRmOSd9KTtcbiAgdmFyIHNwYXJrbGluZTMgPSBuZXcgU3BhcmtsaW5lKCQoXCIjc3BhcmtsaW5lLTNcIilbMF0sIHt3aWR0aDogODAsIGhlaWdodDogNTAsIGxpbmVDb2xvcjogJyM5MmMxZGMnLCBlbmRDb2xvcjogJyNlYmY0ZjknfSk7XG5cbiAgc3BhcmtsaW5lMS5kcmF3KFsxMDAwLCAxMjAwLCA5MjAsIDkyNywgOTMxLCAxMDI3LCA4MTksIDkzMCwgMTAyMV0pO1xuICBzcGFya2xpbmUyLmRyYXcoWzUxNSwgNTE5LCA1MjAsIDUyMiwgNjUyLCA4MTAsIDM3MCwgNjI3LCAzMTksIDYzMCwgOTIxXSk7XG4gIHNwYXJrbGluZTMuZHJhdyhbMTUsIDE5LCAyMCwgMjIsIDMzLCAyNywgMzEsIDI3LCAxOSwgMzAsIDIxXSk7XG4gICovXG5cbiAgLypcbiAgLy8gVGhlIENhbGVuZGVyXG4gICQoJyNjYWxlbmRhcicpLmRhdGV0aW1lcGlja2VyKHtcbiAgICBmb3JtYXQ6ICdMJyxcbiAgICBpbmxpbmU6IHRydWVcbiAgfSlcbiAgKi9cblxuICAvLyBTTElNU0NST0xMIEZPUiBDSEFUIFdJREdFVFxuICAkKCcjY2hhdC1ib3gnKS5vdmVybGF5U2Nyb2xsYmFycyh7XG4gICAgaGVpZ2h0OiAnMjUwcHgnXG4gIH0pXG5cbiAgLyogQ2hhcnQuanMgQ2hhcnRzICovXG4gIC8vIFNhbGVzIGNoYXJ0XG4gIC8vdmFyIHNhbGVzQ2hhcnRDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmV2ZW51ZS1jaGFydC1jYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xuICAvLyQoJyNyZXZlbnVlLWNoYXJ0JykuZ2V0KDApLmdldENvbnRleHQoJzJkJyk7XG5cbiAgdmFyIHNhbGVzQ2hhcnREYXRhID0ge1xuICAgIGxhYmVscyAgOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseSddLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsICAgICAgICAgICAgICAgOiAnRGlnaXRhbCBHb29kcycsXG4gICAgICAgIGJhY2tncm91bmRDb2xvciAgICAgOiAncmdiYSg2MCwxNDEsMTg4LDAuOSknLFxuICAgICAgICBib3JkZXJDb2xvciAgICAgICAgIDogJ3JnYmEoNjAsMTQxLDE4OCwwLjgpJyxcbiAgICAgICAgcG9pbnRSYWRpdXMgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgcG9pbnRDb2xvciAgICAgICAgICA6ICcjM2I4YmJhJyxcbiAgICAgICAgcG9pbnRTdHJva2VDb2xvciAgICA6ICdyZ2JhKDYwLDE0MSwxODgsMSknLFxuICAgICAgICBwb2ludEhpZ2hsaWdodEZpbGwgIDogJyNmZmYnLFxuICAgICAgICBwb2ludEhpZ2hsaWdodFN0cm9rZTogJ3JnYmEoNjAsMTQxLDE4OCwxKScsXG4gICAgICAgIGRhdGEgICAgICAgICAgICAgICAgOiBbMjgsIDQ4LCA0MCwgMTksIDg2LCAyNywgOTBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbCAgICAgICAgICAgICAgIDogJ0VsZWN0cm9uaWNzJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yICAgICA6ICdyZ2JhKDIxMCwgMjE0LCAyMjIsIDEpJyxcbiAgICAgICAgYm9yZGVyQ29sb3IgICAgICAgICA6ICdyZ2JhKDIxMCwgMjE0LCAyMjIsIDEpJyxcbiAgICAgICAgcG9pbnRSYWRpdXMgICAgICAgICA6IGZhbHNlLFxuICAgICAgICBwb2ludENvbG9yICAgICAgICAgIDogJ3JnYmEoMjEwLCAyMTQsIDIyMiwgMSknLFxuICAgICAgICBwb2ludFN0cm9rZUNvbG9yICAgIDogJyNjMWM3ZDEnLFxuICAgICAgICBwb2ludEhpZ2hsaWdodEZpbGwgIDogJyNmZmYnLFxuICAgICAgICBwb2ludEhpZ2hsaWdodFN0cm9rZTogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgICBkYXRhICAgICAgICAgICAgICAgIDogWzY1LCA1OSwgODAsIDgxLCA1NiwgNTUsIDQwXVxuICAgICAgfSxcbiAgICBdXG4gIH1cblxuICB2YXIgc2FsZXNDaGFydE9wdGlvbnMgPSB7XG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbyA6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmUgOiB0cnVlLFxuICAgIGxlZ2VuZDoge1xuICAgICAgZGlzcGxheTogZmFsc2VcbiAgICB9LFxuICAgIHNjYWxlczoge1xuICAgICAgeEF4ZXM6IFt7XG4gICAgICAgIGdyaWRMaW5lcyA6IHtcbiAgICAgICAgICBkaXNwbGF5IDogZmFsc2UsXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgeUF4ZXM6IFt7XG4gICAgICAgIGdyaWRMaW5lcyA6IHtcbiAgICAgICAgICBkaXNwbGF5IDogZmFsc2UsXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfVxuICB9XG5cblxuICAvKlxuICAvLyBUaGlzIHdpbGwgZ2V0IHRoZSBmaXJzdCByZXR1cm5lZCBub2RlIGluIHRoZSBqUXVlcnkgY29sbGVjdGlvbi5cbiAgdmFyIHNhbGVzQ2hhcnQgPSBuZXcgQ2hhcnQoc2FsZXNDaGFydENhbnZhcywgeyBcbiAgICAgIHR5cGU6ICdsaW5lJywgXG4gICAgICBkYXRhOiBzYWxlc0NoYXJ0RGF0YSwgXG4gICAgICBvcHRpb25zOiBzYWxlc0NoYXJ0T3B0aW9uc1xuICAgIH1cbiAgKVxuICAqL1xuXG4gIC8vIERvbnV0IENoYXJ0XG4gIC8vdmFyIHBpZUNoYXJ0Q2FudmFzID0gJCgnI3NhbGVzLWNoYXJ0LWNhbnZhcycpLmdldCgwKS5nZXRDb250ZXh0KCcyZCcpXG4gIHZhciBwaWVEYXRhICAgICAgICA9IHtcbiAgICBsYWJlbHM6IFtcbiAgICAgICAgJ0luc3RvcmUgU2FsZXMnLCBcbiAgICAgICAgJ0Rvd25sb2FkIFNhbGVzJyxcbiAgICAgICAgJ01haWwtT3JkZXIgU2FsZXMnLCBcbiAgICBdLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6IFszMCwxMiwyMF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6IFsnI2Y1Njk1NCcsICcjMDBhNjVhJywgJyNmMzljMTInXSxcbiAgICAgIH1cbiAgICBdXG4gIH1cbiAgdmFyIHBpZU9wdGlvbnMgPSB7XG4gICAgbGVnZW5kOiB7XG4gICAgICBkaXNwbGF5OiBmYWxzZVxuICAgIH0sXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbyA6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmUgOiB0cnVlLFxuICB9XG5cbiAgLypcbiAgLy9DcmVhdGUgcGllIG9yIGRvdWhudXQgY2hhcnRcbiAgLy8gWW91IGNhbiBzd2l0Y2ggYmV0d2VlbiBwaWUgYW5kIGRvdWhudXQgdXNpbmcgdGhlIG1ldGhvZCBiZWxvdy5cbiAgdmFyIHBpZUNoYXJ0ID0gbmV3IENoYXJ0KHBpZUNoYXJ0Q2FudmFzLCB7XG4gICAgdHlwZTogJ2RvdWdobnV0JyxcbiAgICBkYXRhOiBwaWVEYXRhLFxuICAgIG9wdGlvbnM6IHBpZU9wdGlvbnMgICAgICBcbiAgfSk7XG4gICovXG5cbiAgLy8gU2FsZXMgZ3JhcGggY2hhcnRcbiAgLy92YXIgc2FsZXNHcmFwaENoYXJ0Q2FudmFzID0gJCgnI2xpbmUtY2hhcnQnKS5nZXQoMCkuZ2V0Q29udGV4dCgnMmQnKTtcbiAgLy8kKCcjcmV2ZW51ZS1jaGFydCcpLmdldCgwKS5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIHZhciBzYWxlc0dyYXBoQ2hhcnREYXRhID0ge1xuICAgIGxhYmVscyAgOiBbJzIwMTEgUTEnLCAnMjAxMSBRMicsICcyMDExIFEzJywgJzIwMTEgUTQnLCAnMjAxMiBRMScsICcyMDEyIFEyJywgJzIwMTIgUTMnLCAnMjAxMiBRNCcsICcyMDEzIFExJywgJzIwMTMgUTInXSxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbCAgICAgICAgICAgICAgIDogJ0RpZ2l0YWwgR29vZHMnLFxuICAgICAgICBmaWxsICAgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIGJvcmRlcldpZHRoICAgICAgICAgOiAyLFxuICAgICAgICBsaW5lVGVuc2lvbiAgICAgICAgIDogMCxcbiAgICAgICAgc3BhbkdhcHMgOiB0cnVlLFxuICAgICAgICBib3JkZXJDb2xvciAgICAgICAgIDogJyNlZmVmZWYnLFxuICAgICAgICBwb2ludFJhZGl1cyAgICAgICAgIDogMyxcbiAgICAgICAgcG9pbnRIb3ZlclJhZGl1cyAgICA6IDcsXG4gICAgICAgIHBvaW50Q29sb3IgICAgICAgICAgOiAnI2VmZWZlZicsXG4gICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2VmZWZlZicsXG4gICAgICAgIGRhdGEgICAgICAgICAgICAgICAgOiBbMjY2NiwgMjc3OCwgNDkxMiwgMzc2NywgNjgxMCwgNTY3MCwgNDgyMCwgMTUwNzMsIDEwNjg3LCA4NDMyXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIHZhciBzYWxlc0dyYXBoQ2hhcnRPcHRpb25zID0ge1xuICAgIG1haW50YWluQXNwZWN0UmF0aW8gOiBmYWxzZSxcbiAgICByZXNwb25zaXZlIDogdHJ1ZSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NhbGVzOiB7XG4gICAgICB4QXhlczogW3tcbiAgICAgICAgdGlja3MgOiB7XG4gICAgICAgICAgZm9udENvbG9yOiAnI2VmZWZlZicsXG4gICAgICAgIH0sXG4gICAgICAgIGdyaWRMaW5lcyA6IHtcbiAgICAgICAgICBkaXNwbGF5IDogZmFsc2UsXG4gICAgICAgICAgY29sb3I6ICcjZWZlZmVmJyxcbiAgICAgICAgICBkcmF3Qm9yZGVyOiBmYWxzZSxcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICB5QXhlczogW3tcbiAgICAgICAgdGlja3MgOiB7XG4gICAgICAgICAgc3RlcFNpemU6IDUwMDAsXG4gICAgICAgICAgZm9udENvbG9yOiAnI2VmZWZlZicsXG4gICAgICAgIH0sXG4gICAgICAgIGdyaWRMaW5lcyA6IHtcbiAgICAgICAgICBkaXNwbGF5IDogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjogJyNlZmVmZWYnLFxuICAgICAgICAgIGRyYXdCb3JkZXI6IGZhbHNlLFxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gIC8vIFRoaXMgd2lsbCBnZXQgdGhlIGZpcnN0IHJldHVybmVkIG5vZGUgaW4gdGhlIGpRdWVyeSBjb2xsZWN0aW9uLlxuICB2YXIgc2FsZXNHcmFwaENoYXJ0ID0gbmV3IENoYXJ0KHNhbGVzR3JhcGhDaGFydENhbnZhcywgeyBcbiAgICAgIHR5cGU6ICdsaW5lJywgXG4gICAgICBkYXRhOiBzYWxlc0dyYXBoQ2hhcnREYXRhLCBcbiAgICAgIG9wdGlvbnM6IHNhbGVzR3JhcGhDaGFydE9wdGlvbnNcbiAgICB9XG4gIClcbiAgKi9cblxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=