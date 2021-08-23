(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/template/home.template.html'
  })

  // Categories page
  .state('mainCategories', {
    url: '/main-categories',
    templateUrl: 'src/menu/template/main-categories.html',
    controller: 'CategoriesController as mainCategories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
             }]
    }
  })

  // Item detail
  .state('mainCategories.itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menu/template/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve:{
          item_selected:
                ['MenuDataService','$stateParams','items',function(MenuDataService,$stateParams,items){
                        var datas=items.data;
                        var temp=datas[$stateParams.itemId];
                        console.log("selected: ",temp);
                        return MenuDataService.getItemsForCategory(temp.short_name);
                }]
            }
    });

}

})();
