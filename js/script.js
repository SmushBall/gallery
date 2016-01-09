$(document).ready(function{
	var items = $('#gallery li'),
	 itemsbytags = {};

	 // loop through tags
	 items.each(function(i){
	 	var elem = $(this),
	 	tags = elem.data('tags').split(',');


	 	// Add data attribute for quicksand
	 	elem.attr('data-id', i);

	 	$.each(tags,function(key, value){
	 			// remove whitespace
	 			value = $.trim(value);

	 			if(!(value in itemsbytags)){
	 					// Add empty values
	 					itemsbytags[value] = [];

	 			}

	 			//Add image to array
	 			itemsbytags[value].push(elem);
	 	});
	 });

	 // create "All items"
	 createlist('All items', items);
	 $.each(itemsbytags, function(k,v){
	 	createlist(k,v);
	 });

	 // click handler
	 $('#navbar a').live('click', function(e){
	 	var link = $(this);

	 	//Add active class
	 	link.addClass('active').siblings().removeClass('active');

	 	$('gallery').quicksand(link.data('list').find('li'));
	 	e.preventDefault();
	 });

	 $('#navbar a:first').click();

	 // Create the lists
	 function createLists(test, items){
	 	// create empty ul
	 	var ul = $('<ul>',{'class':'hidden'});

	 	$.each(items, function(){
	 		$(this).clone().appendTo(ul);
	 	});

	 	// Add gallery div
	 	ul.appendTo('#gallery');

	 	// create menu item
	 	var a = $('<a>',{
	 		html:text,
	 		href:'#',
	 		data :{ist:ul}
	 	}).appendTo('#navbar');

	 	}
	 }
});
