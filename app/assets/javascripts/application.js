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
//= require jquery.purr
//= require best_in_place
//= require jstree
//= require_tree .



$(document).ready(function() { 

    $(function(){
 $(".cal-form").hide()
});
    $(function()
{
    $(".cadcon-form").hide()
});

 $(function(){
 $(".cadcoc-form").hide()
});
   $(function(){
 $("#esconderrelato").hide()
});

    $(function(){
 $("#editproj1").hide()
});

    $(function(){
 $(".cad-form").hide()
});
        $(function(){
 $("#relatosproj").hide()
});


 $(function(){
 $("#relatogeralfi").hide()
});

$(function(){
 $("#relatocond").hide()
});


  $(function(){
 $("#tabelinha").hide()
});

  $(function(){
 $("#cadreltask").hide()
});


        $(function(){
 $("#cadrelato").hide()
});

        $(function(){
 $(".catask-form").hide()
});

        $(function(){
 $(".cac-form").hide()
});

    $(function(){
 $(".calo-form").hide()
});


    $(function(){
 $("#local").hide()
});

        $(function(){
 $("#cadproj").hide()
});

                $(function(){
 $("#cacgeral").hide()
});

                                $(function(){
 $("#taskgeral").hide()
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
            var form = $(".carledit-form");

            form.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
        });

$(function(){
            var form = $(".careltask-form");

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
    $(".cal-form").hide()
});
         });

$("#fecharreli").click( function() {

$(function()
{
    $(".careltask-form").hide()
});


$(function()
{
    $("#relatogeralfi").show()

});
         });

$("#fecharcond").click( function() {

$(function()
{
    $(".cadcon-form").hide()
});

$(function()
{
    $("#relatocond").show()

});
         });


 $("#fecharcap").click( function() {

$(function()
{
    $(".cap-form").hide()
});
         });

 


 $("#fecharcac").click( function() {

$(function()
{
    $(".cac-form").hide()
});
         });


 $("#fecharcalo").click( function() {

$(function()
{
    $(".calo-form").hide()
});
         });

 $("#fecharrel").click( function() {

$(function()
{
    $(".carl-form").hide()
});
         });

$("#relatogridfin").click( function() {

$(function()
{
    $("#relatogeral").hide()

});
$(function()
{
    $(".cadcon-form").hide()
});


$(function()
{
   $("#relatocond").hide()

});
$(function()
{
    $("#relatogeralfi").show()

});

$(function(){
$("#relatoinsert").before($("#relatogeralfi"))
});

         });

$("#relatogridcond").click( function() {

$(function()
{
    $("#relatogeral").hide()

});
$(function()
{
    $("#relatogeralfi").hide()

});

$(function()
{
    $("#relatocond").show()

});  
$(function(){
$("#relatoinsert").before($("#relatocond"))
});

         });




$("#addativid").click( function() {

$(function()
{
    $("#relatogeral").hide()

});
$(function()
{
    $("#cadreltask").show()

});

 $(function(){
$("#relatoinsert").before($("#cadreltask"))
});



         });

$("#addconsultor").click( function() {

$(function()
{
    $("#consultorgeral").hide()

});
$(function()
{
    $("#cadconsultor").show()

});

 $(function(){
$("#inserthereconsul").before($("#cadconsultor"))
});



         });

$("#fecharcadform").click( function() {

$(function()
{
    $("#cadconsultor").hide()

}); });




$("#relatogrid").click( function() {

$(function()
{
    $("#relatogeralfi").hide()

});
$(function()
{
 $("#relatocond").hide()

});

$(function()
{
    $(".cadcon-form").hide()
});

$(function()
{
    $("#relatogeral").show()

});

 $(function(){
 $("#cadreltask").hide()
});

 $(function(){
$("#relatoinsert").before($("#relatogeral"))
});

         });

$("#relatogridfin").click( function() {

$(function()
{
    $("#relatogeral").hide()

});
$(function()
{
 $("#relatocond").hide()

});

$(function()
{
    $(".cadcon-form").hide()
});

$(function()
{
    $("#relatogeralfi").show()

});

 $(function(){
 $("#cadreltask").hide()
});

 $(function(){
$("#relatoinsert").before($("#relatogeralfi"))
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
    $(".cal-form").show()
});

$(function(){
$("#add").before($(".cal-form"))
});

         });

$("#addcondit").click( function() {

$(function(){
            var form1 = $(".cadcon-form");

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
    $(".cadcon-form").show()
});

$(function(){
$("#addcondit").before($(".cadcon-form"))
});

         });



$(function(){
            var form1 = $(".cadedit-form");

            form1.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
        });

$(function(){
            var form1 = $(".cadprojedit-form");

            form1.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
        });

$(function(){
            var form1 = $(".caledit-form");

            form1.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".5s",
                "transition": ".5s"
            });
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
    $(".carl-form").show()
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
    $(".cap-form").show()
});

$(function(){
$("#addproj").before($(".cap-form"))});

         });

$("#editarrelato").click( function() { 
$(function()
{
    $("#esconderrelato").show()
});
});




$("#calo").click( function() {  

$(function()
{
    $("#cli").hide()
});

$(function()
{
    $("#local").show()
});
      $(function(){
$("#inserthere").before($("#local"))
});
 });

$("#showcoc").click( function() {  

$(function()
{
    $("#showproj1").hide()
});
$(function()
{
    $("#taskgeral").hide()
});

$(function()
{
    $("#cacgeral").show()
});
      $(function(){
$("#projethere").before($("#cacgeral"))
});
 });

$("#dadosproj").click( function() {  


$(function()
{
    $("#atividades").hide()
});
$(function()
{
    $("#relatosproj").hide()
});

$(function()
{
    $("#editproj1").show()
});
      $(function(){
$("#projethere").before($("#editproj1"))
});
 });

$("#dadosrel").click( function() {  

$(function()
{
    $("#atividades").hide()
});
$(function()
{
    $("#editproj1").hide()
});

$(function()
{
    $("#relatosproj").show()
});
      $(function(){
$("#projethere").before($("#relatosproj"))
});
 });


$("#dadosativ").click( function() {  

$(function()
{
    $("#editproj1").hide()
});
$(function()
{
    $("#relatosproj").hide()
});
$(function()
{
    $("#atividades").show()
});


      $(function(){
$("#projethere").before($("#atividades"))
});
 });




$("#showtask").click( function() {  

$(function()
{
    $("#cacgeral").hide()
});
$(function()
{
    $("#showproj1").hide()
});

$(function()
{
    $("#taskgeral").show()
});
      $(function(){
$("#projethere").before($("#taskgeral"))
});
 });









$("#clientgrid").click( function() {  

$(function()
{
    $("#local").hide()
});

$(function()
{
    $("#cli").show()
});
      $(function(){
$("#inserthere").before($("#cli"))
});
    
 });


$("#projetogrid").click( function() {  

$(function()
{
    $("#cacgeral").hide()
});
$(function()
{
    $("#taskgeral").hide()
});

$(function()
{
    $("#showproj1").show()
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
    $(".calo-form").show()
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
    $(".catask-form").show()
});

 $(function(){
 $("#tabelinha").show()
});

 $(function(){
 $("#taskgeral1").hide()
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
