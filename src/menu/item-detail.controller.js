(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemDetailController', ItemDetailController);
    
    ItemDetailController.$inject = ['item_selected'];
    function ItemDetailController(item_selected) {
      var itemDetail = this;
      var data=item_selected.data;
      console.log("item_selected: ",data);
      var category=data.category;
      itemDetail.categoryName=category.name;
      itemDetail.categoryShortName=category.short_name;
      itemDetail.categorySpecialInstructions=category.special_instructions;
      itemDetail.menu_items=data.menu_items;
    }
    
    })();
    