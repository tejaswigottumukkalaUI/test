(function() {
    'use strict';

    function BirthdayService($rootScope) {
        var ctrl = this;

        var birthdays = [];

        this.add = function(name, date){
            var obj = new Object();
            obj.name = name;
            obj.date = date;
            birthdays.push(obj);
        }

this.getBirthdays = function(){
    return birthdays;
}

    }

    angular.module('demoApp').service('BirthdayService', BirthdayService);

    BirthdayService.$inject = [];


})();