(function(window, $) {

    var Cart = function() {
        var domElems = {
                cart: $('.cart'),
                itemTmpl: $('.cart__item_tmpl'),
                totals: $('.cart .totals'),
                itemsQty: $('.items-qty'),
                itemsCart: $('.items-counter'),
                totalPrice: $('.cart .totals .price'),
                orderButton: $('.make-order')
            },
            __self = this;

        this.init = function() {

            ls.initField('cart');

            this.viewCart();
            domElems.orderButton.click(this.makeOrder);
        };

        this.addToCart = function (item) {
            ls.append(item, 'cart');

            this.viewCart();
        };


        this.getCart = function () {
            return ls.getField('cart');
        };

        this.viewCart = function () {
            var list = this.getCart().map(function (item) {
                return __self.viewCartItem(item);
            });

            domElems.cart.find('.cart__item').remove();

            domElems.totals.before(list);

            domElems.itemsQty.html(this.getItemsLength());

            domElems.itemsCart.html(this.getItemsQty());

            domElems.totalPrice.html(this.getTotalPrice());
        };

        this.viewCartItem = function (item) {
            var newItem = domElems.itemTmpl.clone().removeClass('cart__item_tmpl');

            var parent = newItem.parentNode;

            newItem.find('.quantity-number').html(item.qty);
            newItem.find('.itemName').html(item.name).attr('href', item.url);
            newItem.find('.price').html(item.price);

            newItem.find('.glyphicon').attr('data-id', item.id);

            newItem.find('.glyphicon').click( function(){

                var attr = this.getAttribute('data-id');
                __self.removeItemsCart(attr);
            });

            newItem.find('.quantity-min').click(function(){
                var minItemId = $(this.parentNode).find('.glyphicon').attr('data-id');
                __self.minQtyItems(minItemId);


            });

            newItem.find('.quantity-add').click(function(){
                var addItemId = $(this.parentNode).find('.glyphicon').attr('data-id');
                __self.addQtyItems(addItemId);
            });

            return newItem;
        };

        this.minQtyItems = function (itemId) {
            ls.removeItem(itemId, 'cart');

        };

        this.addQtyItems = function (itemId) {
            ls.addItem(itemId, 'cart');
        };

        this.getItemsLength = function () {
            return this.getCart().length;
        };

        this.getItemsQty = function() {

            var itemsCart = 0;

            var list = this.getCart();
            for (var i = 0; i < list.length; i++) {
                itemsCart += +(list[i]['qty']);
            }
            return itemsCart;

        };

        this.getTotalPrice = function () {
            var total = 0;
            this.getCart().forEach(function (item) {
                total += item.price * item.qty;
            });
            return total;
        };

        this.clearCart = function () {
            ls.clearField('cart');
            this.viewCart();
        };

        this.removeItemsCart = function(attr) {

            ls.removeItems( attr, 'cart');
            this.viewCart();

        };

        this.makeOrder = function () {

            __self.clearCart();
        };

        this.init();
    };

    window.cart = new Cart();

})(window, jQuery);


$('.bigcart-a').click(function() {
    var item = {
        id: 'a-12',
        name: 'item1',
        price: '30',
        qty: 1,
        url: '#1'
    };

    cart.addToCart(item);
});

$('.bigcart-b').click(function() {
    var item = {
        id: 'b-12',
        name: 'item2',
        price: '50',
        qty: 1,
        url: '#1'
    };

    cart.addToCart(item);
});


