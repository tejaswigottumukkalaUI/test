var monthComponent = {
  bindings: {
     month: '@',
     name: '@'
   },
    templateUrl: 'partials/components/monthComponent.html',

    controller : monthController

};

monthController.$inject = ['BirthdayService'];
function monthController(BirthdayService) {

        var ctrl = this;
       this.names = BirthdayService.getBirthdays();

       //this is how we get the total for each month
       this.names = this.names.filter(function (elem){
         return elem.date.getMonth() == ctrl.month ;
       });
       
      
    }

angular
.module('demoApp')
.component('monthComponent', monthComponent);
