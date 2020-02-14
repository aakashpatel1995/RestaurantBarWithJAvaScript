"use strict";
$(document).ready(function () {

    $("#submit").click(function () {

        var isValid = true;
        var name = $("#name").val(); //fatching the data of input field
        var email = $("#email").val(); //fatching the data of input field  
        var message = $("#message").val(); //fatching the data of input field

        if (name === "") {
            isValid = false;
            if ($("#name").parent().next(".validation").length == 0) // only shows error if email is not added
            {
                $("#name").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enetr your name.</div>"); //showing error if input field is empty
            }

        } else {
            $("#name").parent().next(".validation").remove(); // remove the error
        }
        if (email === "" || !/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/.test(email)) {
            isValid = false;
            if ($("#email").parent().next(".validation").length == 0) // only shows error if email is not added 
            {
                $("#email").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enter an valid email address !!</div>");
            }
        } else {
            $("#email").parent().next(".validation").remove(); // remove it
        }
        if (message === "") {
            isValid = false;
            if ($("#message").parent().next(".validation").length == 0) // only shows error if email is not added
            {
                $("#message").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enter some message to send.</div>");
            }

        } else {
            $("#message").parent().next(".validation").remove(); // remove it
        }

        if (isValid) {
            //            // code that save and displays the message
            //            sessionStorage.name = name;
            //            sessionStorage.email = email;
            //            sessionStorage.message = message;
            //            sessionStorage.details="";
            //            
            //            for(var key in userDetails){
            //                sessionStorage.details=sessionStorage.details+key+"="+userDetails[key]+"|";
            //                
            //                }
            //            sessionStorage.details=sessionStorage.details.substr(0,sessionStorage.details.length - 2);
            //            // go to profile page
            location.href = "details.html";
        }
    });
    $("#name").focus();

});
