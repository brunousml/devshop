

var total = 0;
var discout = 0;

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
	var value = 0;

	for (var i = prices.length - 1; i >= 0; i--) {
		value = value + parseInt(prices[i].dataset['price']);
	};

	if(discout > 0){
		value = value - discout;
	}

	if(value < 0){
		value = 0;
	}

	setTotalCart(value);
}

function setTotalCart(value){
	var el = $('#total-cart');
	$('#total-cart').html("$" + value);
	$('#btn-payment-cart').data('total', String(value));
}

function removeFromCart(el){
	$(el).closest('tr').remove();
}


$(window).load(function() {
	$('#devs button').click(function(){ // TODO: To better code move to template
		addToCart($(this));
		sumTotalCart();

	   	$('.remove').click(function(){ // TODO: To better code move to template
			removeFromCart($(this));
			sumTotalCart();	    
  		});	 
  	});

  	$('#btn-payment-cart').click(function(){
  		if($(this).data('total') > 0){
	  		$('#cart-page').hide();
	  		$('#success-payment').show();
  		}
  	});

  	$('#btn-cupom-cart').click(function(){


  		var payment = $('#btn-payment-cart');
  		var cupom = $('#cupom-cart').val();
  		var total = payment.data("total");

  		if(total > 0 && cupom == 'SHIPIT'){
  			discout = 10;
  			sumTotalCart();
  		}
  	});
});