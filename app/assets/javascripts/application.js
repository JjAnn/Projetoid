// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_nested_form
//= require jquery_ujs
//= require jstree
//= require_tree .



$(document).ready(function() { 

    $(function(){
 $(".cal-form").fadeOut()
});


        $(function(){
 $("#cadrelato").fadeOut()
});

        $(function(){
 $(".catask-form").fadeOut()
});

        $(function(){
 $(".cac-form").fadeOut()
});

    $(function(){
 $(".calo-form").fadeOut()
});


    $(function(){
 $("#local").fadeOut()
});

        $(function(){
 $("#cadproj").fadeOut()
});

                $(function(){
 $("#cacgeral").fadeOut()
});

                                $(function(){
 $("#taskgeral").fadeOut()
});

$(function(){
            var form = $(".login-form");

            form.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
        });
 

    $(function(){
            var form = $(".cad-form");

            form.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
        }); 
    $("#fecharcad").click( function() {

$(function()
{
    $(".cal-form").fadeOut()
});
         });


 $("#fecharcap").click( function() {

$(function()
{
    $(".cap-form").fadeOut()
});
         });

 $("#fecharcac").click( function() {

$(function()
{
    $(".cac-form").fadeOut()
});
         });


 $("#fecharcalo").click( function() {

$(function()
{
    $(".calo-form").fadeOut()
});
         });

 $("#fecharrel").click( function() {

$(function()
{
    $(".carl-form").fadeOut()
});
         });

$("#add").click( function() {

$(function(){
            var form1 = $(".cal-form");

            form1.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
        });
$(function()
{
    $(".cal-form").fadeIn()
});

$(function(){
$("#add").before($(".cal-form"))});

         });

$("#addcoc").click( function() {

$(function(){
            var form1 = $(".cac-form");

            form1.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
        });
$(function()
{
    $(".cac-form").fadeIn()
});

$(function(){
$("#addcoc").before($(".cac-form"))});

         });

$("#addrel").click( function() {

$(function(){
            var form1 = $(".carl-form");

            form1.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
        });
$(function()
{
    $(".carl-form").fadeIn()
});

$(function(){
$("#addrel").before($(".carl-form"))});

         });




$("#addproj").click( function() {

$(function(){
            var form1 = $(".cap-form");

            form1.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
        });
$(function()
{
    $(".cap-form").fadeIn()
});

$(function(){
$("#addproj").before($(".cap-form"))});

         });


$("#calo").click( function() {  

$(function()
{
    $("#cli").fadeOut()
});

$(function()
{
    $("#local").fadeIn()
});
      $(function(){
$("#inserthere").before($("#local"))
});
 });

$("#showcoc").click( function() {  

$(function()
{
    $("#showproj1").fadeOut()
});
$(function()
{
    $("#taskgeral").fadeOut()
});

$(function()
{
    $("#cacgeral").fadeIn()
});
      $(function(){
$("#projethere").before($("#cacgeral"))
});
 });


$("#showtask").click( function() {  

$(function()
{
    $("#cacgeral").fadeOut()
});
$(function()
{
    $("#showproj1").fadeOut()
});

$(function()
{
    $("#taskgeral").fadeIn()
});
      $(function(){
$("#projethere").before($("#taskgeral"))
});
 });









$("#clientgrid").click( function() {  

$(function()
{
    $("#local").fadeOut()
});

$(function()
{
    $("#cli").fadeIn()
});
      $(function(){
$("#inserthere").before($("#cli"))
});
    
 });


$("#projetogrid").click( function() {  

$(function()
{
    $("#cacgeral").fadeOut()
});
$(function()
{
    $("#taskgeral").fadeOut()
});

$(function()
{
    $("#showproj1").fadeIn()
});
      $(function(){
$("#projethere").before($("#showproj1"))
});
    
 });



$("#addlocal").click( function() {

$(function(){
            var form3 = $(".calo-form");

            form3.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
        });
$(function()
{
    $(".calo-form").fadeIn()
});

$(function(){
$("#addlocal").before($(".calo-form"))});

         });



$("#addtask").click( function() {

$(function(){
            var form3 = $(".catask-form");

            form3.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
        });
$(function()
{
    $(".catask-form").fadeIn()
});

$(function(){
$("#addtask").before($(".catask-form"))});

         });


$(function(){
            var form = $(".cap-form");

            form.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
        });
$(function(){
            var form = $(".catask-form");

            form.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
        }); 

$(function(){
            $(window).on('resize', function(){
                if ($(this).width() <= 800) {
                    $(".sidebar").addClass('compact');
                } else {
                    $(".sidebar").removeClass('compact');
                }
            });
        });

        function pushMessage(t){
            var mes = 'Info|Implement independently';
            $.Notify({
                caption: mes.split("|")[0],
                content: mes.split("|")[1],
                type: t
            });
        }

        $(function(){
            $('.sidebar').on('click', 'li', function(){
                if (!$(this).hasClass('active')) {
                    $('.sidebar li').removeClass('active');
                    $(this).addClass('active');
                }
            });
        });

  });
