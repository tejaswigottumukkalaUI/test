(function() {
    'use strict';

    angular.module('demoApp').controller('CalendarController', CalendarController);

    CalendarController.$inject = ['BirthdayService'];

    function CalendarController(BirthdayService) {
        var ctrl = this;

        ctrl.sortBy = 'chron';


        this.months = [ {name : 'January', number : 0},
                        {name : 'February', number : 1},
                        {name : 'March', number : 2},
                        {name : 'April', number : 3},
                        {name : 'May', number : 4},
                        {name : 'June', number : 5},
                        {name : 'July', number : 6},
                        {name : 'August', number : 7},
                        {name : 'September', number : 8},
                        {name : 'October', number : 9},
                        {name : 'November', number : 10},
                        {name : 'Decemeber', number : 11},
        ];

        ctrl.updateSort = function() {
            
            if(ctrl.sortBy == 'chron'){
                this.months.sort(function(elem1,elem2){ return elem1.number - elem2.number; });
            }
            else{
                this.months.sort(function(elem1,elem2){
                    //filtering each time is bad. This can replaced by storing a total in 
                    //another object and then looking it up.

                    var numOfElem1 = BirthdayService.getBirthdays().filter(function (elem){
                        return elem.date.getMonth() == elem1.number ;
                    });

                    var numOfElem2 = BirthdayService.getBirthdays().filter(function (elem){
                        return elem.date.getMonth() == elem2.number ;
                    });
                    

                    return numOfElem2.length - numOfElem1.length;
                });
            }
        };   

        ctrl.getBirthdays = function() {
            return BirthdayService.getBirthdays();
        };

    }


})();