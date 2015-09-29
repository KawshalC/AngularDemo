var demoApp=angular.module('demoApp',[]);

demoApp.config(function($routeProvider){
    $routeProvider.
        when('/view1',{
            controller:'SimpleCntrl',
            templateUrl:'View1.htm'
        }).
        when('/view2',{
            controller:'SimpleCntrl',
            templateUrl:'View2.htm'
        }).
        otherwise({redirectTo:'/view1'});
});


var controllers={};
controllers.SimpleCntrl=function($scope){
    $scope.customer = [{name: 'Asish', city: 'Kolkata'}, {name: 'Kawshal', city: 'Chennai'}, {name: 'Dalli',city: 'Mumbai'}];
    $scope.AddCustomer=$scope.customer.push(
        {name:newCustomer.name,
        city:newCustomer.city
        });
};
demoApp.controller(controllers);

//demoApp.controller('SimpleCntrl',function($scope){
//    $scope.customer = [{name: 'Asish', city: 'Kolkata'}, {name: 'Kawshal', city: 'Chennai'}, {name: 'Dalli',city: 'Mumbai'}];
//});