angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapibb-env.eba-qptzi2fn.us-west-2.elasticbeanstalk.com/';

    return service;
}]);