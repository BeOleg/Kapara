'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:typewriter
 * @description
 * # typewriter
 */

/*
angular.module('appApp')
  .directive('typewriter', function ($timeout) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the typewriter directive');
      }
    };
  });
*/


angular.module('chatApp').directive('typewriter', ['$timeout', function ($timeout) {
    function linkFunction (scope, iElement, iAttrs) {
        var timer = null,
            initialDelay = iAttrs.initialDelay ? getTypeDelay(iAttrs.initialDelay) : 200,
            typeDelay = iAttrs.typeDelay ? getTypeDelay(iAttrs.typeDelay) : 200,
            blinkDelay = iAttrs.blinkDelay ? getAnimationDelay(iAttrs.blinkDelay) : false,
            cursor = iAttrs.cursor ? iAttrs.cursor : '|',
            blinkCursor = iAttrs.blinkCursor ? iAttrs.blinkCursor === "true" : true,
            auxStyle;
        if (iAttrs.text) {
            timer = $timeout(function() {
                updateIt(iElement, 0, iAttrs.text);
            }, initialDelay);
        }

        function updateIt(element, i, text){
            if (i <= text.length) {
                element.html(text.substring(0, i) + cursor);
                i++;
                timer = $timeout(function() {
                    updateIt(iElement, i, text);
                }, typeDelay);
                return;
            } else {
                if (blinkCursor) {
                    if (blinkDelay) {
                        auxStyle = '-webkit-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-moz-animation:blink-it steps(1) ' + blinkDelay + ' infinite ' +
                            '-ms-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-o-animation:blink-it steps(1) ' + blinkDelay + ' infinite; ' +
                            'animation:blink-it steps(1) ' + blinkDelay + ' infinite;';
                        element.html(text.substring(0, i) + '<span class="blink" style="' + auxStyle + '">' + cursor + '</span>');
                    } else {
                        element.html(text.substring(0, i) + '<span class="blink">' + cursor + '</span>');
                    }
                } else {
                    element.html(text.substring(0, i));
                }
            }
        }

        function getTypeDelay(delay) {
            if (typeof delay === 'string') {
                return delay.charAt(delay.length - 1) === 's' ? parseInt(delay.substring(0, delay.length - 1), 10) * 1000 : +delay;
            }
        }

        function getAnimationDelay(delay) {
            if (typeof delay === 'string') {
                return delay.charAt(delay.length - 1) === 's' ? delay : parseInt(delay.substring(0, delay.length - 1), 10) / 1000;
            }
        }

        scope.$on('$destroy', function() {
            if(timer) {
                $timeout.cancel(timer);
            }
        });
    }

    return {
        restrict: 'A',
        link: linkFunction,
        scope: false
    };

}]);
