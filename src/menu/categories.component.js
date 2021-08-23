(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categoriesComponent', {
      templateUrl: '/src/menu/template/categories.list.html',
      bindings: {
        items: '<'
      }
    });
    
    })();
    