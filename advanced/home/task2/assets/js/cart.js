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

            newItem.find('.quantity').html(item.qty);
            newItem.find('.itemName').html(item.name).attr('href', item.url);
            newItem.find('.price').html(item.price);

            return newItem;
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

        this.makeOrder = function () {

            __self.clearCart();
        };

        this.init();
    };

    window.cart = new Cart();

})(window, jQuery);


$('.bigcart').click(function() {
    var item = {
        id: 'a-12',
        name: 'Носки',
        price: '23.5',
        qty: '3',
        url: '#1'
    };

    cart.addToCart(item);
});


