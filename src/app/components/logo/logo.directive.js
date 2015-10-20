'use strict';

/**
 * @ngdoc directive
 * @name logoApp.directive:Logo
 * @description
 * # Logo
 */
angular.module('preSite')
  .directive('logodraw', function ($interval) {
    return {
      restrict: 'A',
      scope:{
        options: '='
      },
      templateUrl: 'app/components/logo/logo.html',
      link: function (scope, element, attrs) {
        var options = {
          size: 150,
          width: 10,
          refresh: 50,
          full: false,
          colors:{
            sun:'#cacaca',
            earth: '#004389'
          }
        };
        scope.options = angular.extend(options, scope.options);
        var afternoon = false;
        scope.pos = 0;
        scope.scale = 1;
        scope.localTime  = new Date().toLocaleString() ;
        scope.country;
        scope.color ={
          scale:scope.options.colors.earth,
          afternoon:scope.options.colors.earth,
          global:scope.options.colors.sun
        };


        function calculateSun(){
         if(scope.scale > 0){
            scope.pos = scope.pos+(scope.options.size/400);
            scope.scale = scope.scale-0.005;
          }
          else if(scope.scale < 0 && scope.scale > -1){
            if(afternoon){
              scope.color.scale = scope.options.colors.earth ;
            }
            else{
              scope.color.scale = scope.options.colors.sun;
            }
            scope.pos = scope.pos+(scope.options.size/400);
            scope.scale = scope.scale-0.005;
          }
          else if(scope.scale <= -1){

            if(afternoon){
              scope.color.global = scope.options.colors.sun;
              scope.color.afternoon = scope.options.colors.earth;
            }
            else{
              scope.color.global = scope.options.colors.earth;
              scope.color.afternoon = scope.options.colors.sun;
            }

            afternoon = !afternoon;
            scope.scale = 1;
            scope.pos = 0;
          }
        }
        $interval(calculateSun, scope.options.refresh);
        calculateSun();
        if(scope.options.full){
          element.find('g').css('mask','');
        }
      }
    };
  });
