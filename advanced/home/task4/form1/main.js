'use strict';

$(document).ready(function() {
    init();
});

function init() {
    $('#contactform').submit(function(event) {
        processRegistration(this);
        event.preventDefault();
    });
}

function processRegistration(form) {
    var data = getRegistrationFormData();
    var errors = validaRegistrationData(data);

    $('.error', $(form)).text('');

    if (errors) {
        highlightErrors(form, errors);
    } else {
        console.log('DATA IS VALID', data);
        alert('SUCCESS');
    }
}

function getRegistrationFormData() {

    var formData = {
        name:       $('#name').val(),
        email:      $('#email').val(),
        username:   $('#username').val(),
        password:   $('#password').val(),
        repassword: $('#repassword').val(),
        month:      $('#month').find(":selected").val(),
        day:        $('#day').val(),
        year:       $('#year').val(),
        gender:     $('#gender').find(":selected").val(),
        phone:      $('#phone').val()
    };
    console.log(formData);
    return formData;
}

function validaRegistrationData(formData) {
    var validationRules = {


        name: function(value) {

           var name = /[^a-zà-ÿ³¿º´'\s]+/gi;

            if (!value) {
                return 'Name is required';
            }

            if (name.test(value) ) {

                return 'Should contain only letters latin/cyrillic !';
            }


        },
        email: function(value) {

            var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!value) {
                return 'Email is required';
            }

            if (!email.test(value)) {
                return 'Wrong email format';
            }

        },
        username: function(value) {
            var userName = /[^a-zà-ÿ³¿º´'\s]+/gi;

            if (!value) {
                return 'User Name id required';
            }

            if (userName.test(value)) {
                return 'Should contain only letters latin/cyrillic';
            }


        },
        password: function(value) {

            var passDigit = /\d/,
                passSpecialChar = /\W/,
                passLatin = /[a-z]/ig,
                passLetterUpper = /[A-Z]/g;


            if (!value) {
                return 'Password is required';
            }

            if (value.length < 8) {
                return 'Should contain at least 8 characters'
            }

            if (value.match(passLatin) == null) {
                return 'Should consist of latin letters';
            }

            if (value.match(passDigit) == null) {
                return 'Should contain at least one digit';
            }

            if (value.match(passSpecialChar) == null) {
                return 'Should contain at least one special char';
            }

            if (value.match(passLetterUpper) == null) {
                return 'Should contain at least one uppercase letter';
            }


        },
        repassword: function(value) {

            if (!value) {
                return 'Password is required';
            }

            var pass1 = document.getElementById('password');
            console.log(pass1.value);

            if(pass1.value !== value){
                return "Should be equal to password";
            }

        },
        month: function(value) {

        },
        day: function(value) {
            var month  = document.getElementById('month');
            console.log(month.value);
            console.log(value);

            var lastDateInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

            console.log(lastDateInMonth[month.value - 1]);

            if (value > lastDateInMonth[month.value - 1]) {
                return 'Invalid date format!';
            }
        },
        year: function(value) {

        },
        gender: function(value) {

        },

        phone: function (value) {

            var phoneNumber = /\D/;
            if (!value) {
                return 'Phone is required';
            }

            if (value.match(phoneNumber) !== null) {
                return 'Should contain only digits';
            }
        }
    };

    var errors = validateData(validationRules, formData);

    // TODO extrachecks like date existence, password === repassword.
    // Do them manually and add errors to errors object

    return errors;
}

function highlightErrors(form, errors) {
    var $form = $(form);

    for (var field in errors) {
        var fieldError = errors[field];
        $('.error[data-error-for=' + field + ']', $form).text(fieldError);
    }
}

function validateData(validationRules, data) {
    var errors = {};

    for (var field in data) {
        var value = data[field];
        var fieldError = validationRules[field](value);

        if (fieldError) {
            errors[field] = fieldError;
        }
    }

    if ( Object.keys(errors).length ) {
        return errors;
    } else {
        return;
    }
}
