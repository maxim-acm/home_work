/**
 * Created by Maxim on 09.06.2015.
 */
var userName = function(name, password) {
    name = prompt("Enter you login");

    if (name === "admin") {
        password = prompt("Enter you Password");

        if (password === "passw0rd") {
            alert("Welcome home!")}
        else
            alert("Wrong password")
    }
    else if (name === null) {
        alert("Canceled")
    }

    else
        alert("Access denied");

};
userName();