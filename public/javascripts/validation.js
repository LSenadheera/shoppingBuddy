/**
 * Created by Lahiru Senadheera on 3/27/2017.
 */

$(document).ready(function(){
    $("#login").click(function(){
        if ($("#username").val()=="" || $("#password").val() == "" ){
            $("#ermsg").html("Please enter login details")
            $("#emsg").show();
            $("#emsg").delay(1000).fadeOut();

        }

        else {
            if($('#username').val()=="admin" && $('#password').val()=="123"){
                window.location = '/home';
            }else{
                $("#ermsg").html("Incorrect login details")
                $("#emsg").show();
                $("#emsg").delay(1000).fadeOut();
            }
        }



    })
});

