  (function() {
      'use strict';

      angular.module('demoApp', [
          'ngMaterial','ui.router']);

    angular.module('demoApp').config(stateConfig);

    function stateConfig ($stateProvider,  $urlRouterProvider){

        $urlRouterProvider.otherwise("/input");

        $stateProvider.state('input', {
                url: "/input",
                templateUrl: 'partials/birthdayInput.html'
            })
            .state('calendar',{
                url:"/calendar",
                templateUrl: 'partials/calendar.html'
            });
    }

  })();
