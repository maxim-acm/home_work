/**
 * Created by Maxim on 19.06.2015.
 */

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

var menu = {};

function multiplyNumeric(menu, arg) {

    for (var key in arg) {

        menu[key] = arg[key];

        if (Number.isFinite(menu[key]) === true) {
            menu[key] *= 2;
        }

    }

}

multiplyNumeric(menu, image);


console.log(menu);