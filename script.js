    /*eslint-env browser*/







    var app = angular.module('myApp', []);
    app.filter('addComma', function() {
        
       // A filter that adds comma to the correct location for large numbers
       return function(x) 
       {
           var tempString = [];
            var i;
            var j = 0; 
            var marketCap = String(x);
            for (i = marketCap.length; i > 0; i--) 
            { 
                if(i % 3 == 0 && i != marketCap.length) 
            {
                tempString += ',' + marketCap[j];
                j++;
            }
            else 
            { 
                tempString += marketCap[j];
                j++;
            }
        }
        return '$' + tempString;
       } 
       
       
    });

    
   
function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

    app.controller('myCtrl', function($scope, $http, $timeout) {
        
        $scope.numCrypto = "50";
        $scope.names = ["10", "20", "50", "100"];
        
        
        
        /*
        * Request data for top 100 cryptocurrencies by total 
        * marketcap from CoinMarketCap API
        */
        $http.get("https://api.coinmarketcap.com/v2/ticker/?limit=" + $scope.numCrypto + "&sort=rank&structure=array")
            .then(function(myArr) {
            $scope.myWelcome = myArr;
        });
        
        $scope.onChange = function() {
            $http.get("https://api.coinmarketcap.com/v2/ticker/?limit=" + $scope.numCrypto + "&sort=rank&structure=array")
            .then(function(myArr) {
                console.log(myArr);
            $scope.myWelcome = myArr;
        });
        }
        
        $scope.onChange2 = function(num) {
            $http.get("https://api.coinmarketcap.com/v2/ticker/?limit=" + num + "&sort=rank&structure=array")
            .then(function(myArr) {

                console.log(myArr);
            $scope.myWelcome = myArr;
        });
        }
        
            
        
        
        
        
        /*
        * Request data for global information about cryptocurrene 
        */
        $http.get("https://api.coinmarketcap.com/v2/global/")
            .then(function(myArr) {
            $scope.global = myArr.data.data;
        });
        
        
        
    });
   
       