$(window).load(function() {
	$('button').click(function(){ // TODO: To better code move to template
		addToCart($(this));

	    
  	});
});

function addToCart(el){
	var html = "<tr class='product'>" +
  					"<td>" + 
  						el.data("username") + 
					"</td>" + 
					"<td>$" + el.data("price") + "</td>"+
					"<td><button class='btn btn-danger pull-right'>Remove</button></td></tr>" 
	  $('#cart > tbody:last-child').append(html);
}