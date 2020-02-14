"use strict";
$(document).ready(function () {

    $("#submit").click(function () {

        var isValid = true;
        var order = $("#order").val(); //fatching the data of input field
       

        if (order === "") {
            isValid = false;
            if ($("#order").parent().next(".validation").length == 0) // only shows error if email is not added
            {
                $("#order").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>You must select Items to order.</div>"); //showing error if input field is empty
            }

        } else {
            $("#order").parent().next(".validation").remove(); // remove the error
        }

        if (isValid) {
            location.href = "menu3.html";
        }
    });
  

});
