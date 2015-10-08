var demoApp=angular.module('demoApp',['ngRoute']);
demoApp.config(function($routeProvider){
    $routeProvider.
        when('/view1/:key?',{
            controller:'FirstController',
            templateUrl:'View1.html'
        }).
        when('/view2',{
            controller:'SecondController',
            templateUrl:'View2.html'
        }).
        otherwise({redirectTo:'/view1'});
});
demoApp.factory('FirstFactory',function(){
    var factory={};
    //factory.dataToSend=[];
    factory.init=function(){
        factory.populateCustomers();
    };
    factory.populateCustomers=function(){
        factory.dataToSend= [{name: 'Asish', city: 'Kolkata'}, {name: 'Kawshal', city: 'Chennai'}, {name: 'Dalli',city: 'Mumbai'}];
    };
    factory.removeCustomer=function(cust){
        factory.dataToSend.splice(factory.dataToSend.indexOf(cust),1);
    };
    factory.addCustomer=function(newName,newCity){
        factory.dataToSend.push({name:newName,city:newCity});
    };
    factory.init();
    return factory;

});
demoApp.controller('FirstController',function($scope,$routeParams,$http,FirstFactory){
    $http.get('https://staging-api.thrillophilia.com/api/v1/consumers/landing_pages?&auth_token=1fqk64sPFfiyPTsc8sEx&client_id=135').then(function (res) {
        $scope.pages = res.data['landing_pages'];
    });
    $scope.init=function(){
        $scope.customer = FirstFactory.dataToSend;
    };
    $scope.addCustomer=function(){
        FirstFactory.addCustomer($scope.newCustomer.name,$scope.newCustomer.city);
        $scope.init();
    };
    $scope.removeCustomer=function(cust){
        FirstFactory.removeCustomer(cust);
        $scope.init();
    };
    $scope.init();
});
demoApp.controller('SecondController',function($scope){
    $scope.customer = [{name: 'Asish', city: 'Kolkata'}, {name: 'Kawshal', city: 'Chennai'}, {name: 'Dalli',city: 'Mumbai'}];
});