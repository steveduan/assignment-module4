(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService);
    
    
    MenuDataService.$inject = ['$http',"$q"]
    function MenuDataService($http,$q) {
      var service = this;
    
    
      
      // call to server
      // Returns a promise, NOT items array directly
      
      service.getAllCategories=function(){
          var http=$http(
            {
              method: "GET",
              url: ("https://davids-restaurant.herokuapp.com/categories.json")
            }
          );
              return http;
      };

      service.getItemsForCategory=function(categoryShortName){
        var http=$http(
            {
              method: "GET",
              url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=",
              params:{category:categoryShortName}
            }
          );
            return http;
      }
    }
    
    })();
    