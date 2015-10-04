(function(window) {

    var Local = function() {
        var ls = localStorage;

        this.initField = function (field) {

            if (!ls[field]) {
                this.clearField(field);
            }
        };

        // add some item to array in ls
        this.append = function (item, field) {
            var updatedList = this.getField(field);
            var listItem = false;

            if (updatedList.length == 0) {

                updatedList.push(item);

            } else {

                for (var i = 0; i < updatedList.length; i++) {

                    if (updatedList[i].id == item.id) {

                        updatedList[i].qty += 1;
                        listItem = true;
                    }
                }

                if (listItem == false) {

                    updatedList.push(item);

                }
            }

            ls[field] = JSON.stringify(updatedList);

        };

        this.removeItems = function(attr, field) {
            var updatedList = this.getField(field);

            for (var i = 0; i < updatedList.length; i++) {

                if (updatedList[i].id == attr) {

                    updatedList.splice(i,1);
                }
            }

            ls[field] = JSON.stringify(updatedList);

        };

        this.removeItem = function(itemId, field) {
            var updatedList = this.getField(field);

            for (var i = 0; i < updatedList.length; i++) {

                if (updatedList[i].id == itemId && updatedList[i].qty > 0) {

                    updatedList[i].qty -= 1;
                }
            }

            ls[field] = JSON.stringify(updatedList);
            cart.viewCart();
        };

        this.addItem = function(itemId, field) {
            var updatedList = this.getField(field);

            for (var i = 0; i < updatedList.length; i++) {

                if (updatedList[i].id == itemId) {

                    updatedList[i].qty += 1;
                }
            }

            ls[field] = JSON.stringify(updatedList);
            cart.viewCart();
        };

        this.getField = function (field) {
            return JSON.parse(ls[field]);
        };

        this.clearField = function (field) {
            ls[field] = '[]';
        };

    };

    window.ls = new Local();

})(window);


