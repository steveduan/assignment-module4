(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categoriesComponent', {
      // templateUrl: '/src/menu/template/categories.list.html',
      template:"<ul><li ng-repeat='item in $ctrl.items' ui-sref='mainCategories.itemDetail({itemId: $index})'>{{item.name}}{{item.short_name}}</li></ul>",
      bindings: {
        items: '<'
      }
    });
    
    })();
    