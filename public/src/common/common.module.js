(function() {
"use strict";

angular.module('common', [])
// .constant('ApiPath', 'https://jo-coursera5.herokuapp.com')
.constant('ApiPath', 'http://localhost:4000')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
