(function() {
    'use strict';

    angular.module('demoApp').controller('BirthdayInputController', BirthdayInputController);

    BirthdayInputController.$inject = ['BirthdayService'];

    function BirthdayInputController(BirthdayService) {
        var ctrl = this;

        this.add = function (){
            BirthdayService.add(ctrl.userName,ctrl.date);
            resetInput();
        };

        function resetInput(){
            ctrl.userName = null;
            ctrl.date = null;
        };
    }


})();