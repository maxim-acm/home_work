/**
 * Created by Maxim on 09.06.2015.
 */
(function(name, password) {
    name = prompt("Enter you name");

    if (name === "admin") {
        password = prompt("Enter you Password pls" );
        if (password === "passw0rd") {
            alert("Welcome home!")}
        else
            alert("Wrong password")
    }
    else if (name === null) {
        alert("Canceled")
    }

    else
        alert("Access denied")

})();