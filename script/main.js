$(window).load(function() {
	$('button').click(function(){ // TODO: To better code move to template
		addToCart($(this));
		sumTotalCart();

		$('.remove').click(function(){ // TODO: To better code move to template
			removeFromCart($(this));
			sumTotalCart();	    
	  	});	    
  	});

  	
});

function addToCart(el){
	var html = "<tr class='product'>" +
  					"<td>" + 
  						el.data("username") + 
					"</td>" + 
					"<td class='price' data-price="+ el.data("price") +">$" + el.data("price") + "</td>"+
					"<td><button class='btn btn-danger pull-right remove'>Remove</button></td></tr>" 
  	
  	$('#cart > tbody:last-child').append(html);
}

function sumTotalCart(){
	var prices = $('#cart td.price');
	var sum = 0;
	for (var i = prices.length - 1; i >= 0; i--) {
		sum = sum + parseInt(prices[i].dataset['price']);
	};
	updateTotalCart(sum);
}

function updateTotalCart(value){
	$('#total-cart').html("$" + value);
}

function removeFromCart(el){
	$(el).closest('tr').remove();
}