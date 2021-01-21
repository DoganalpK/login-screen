$(document).ready(function(){
    $('#main_phone_numbar').mask('000 0000 0000');
    $('#bussines_registration_number').mask('000 0000 0000');
});

function SetForm(){
    alert("İşlem başarılı.");
}

function GetStep1(){
    $("#step-1-form").css("display","block");
    $("#step-2-form").css("display","none");

    $("#step-1-left-container").css("display","block");
    $("#step-2-left-container").css("display","none");
}

function GetStep2(){
    $("#step-1-form").css("display","none");
    $("#step-2-form").css("display","block");

    $("#step-1-left-container").css("display","none");
    $("#step-2-left-container").css("display","block");
}