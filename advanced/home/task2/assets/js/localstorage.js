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




            if (updatedList.length == 0) {

                updatedList.push(item);

                console.log(updatedList);

            } else {

                for (var i = 0; i < updatedList.length; i++) {

                    if (updatedList[i].id == item.id) {



                        updatedList[i].qty += 1;
                        console.log('+1');
                        break;
                    }




                }




            }
            console.log(updatedList[0].valueOf());

            ls[field] = JSON.stringify(updatedList);

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


