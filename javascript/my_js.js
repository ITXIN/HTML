
// import "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
function myFunction() {
  x = document.getElementById('demo')
  x.innerHTML='Hello javascript'
  x.style.color='red';
}
function checkNumber() {
  var x = document.getElementById('input').value;
  if (x =="" || isNaN(x)) {
    alert("Not Number");
  }
}
// person = {
//   firstname = "bill",
//   lastname = "bill",
//   age = 56,
//   eyecolor = "blue",
// }
function person(firstname,lastname,age,eyecolor)
{
  this.firstname=firstname;
  this.lastname=lastname;
  this.age=age;
  this.eyecolor=eyecolor;
  this.changeName = changeName;
function changeName(name) {
  this.lastname = name;

}
}

function testJQuery()
{
$("#h01").attr("style","color:red").html("hello jquery")
}
function jquery_onload() {
  // $(document).ready(function(){
  //   $("p").click(function() {
  //     // $(this).hide();
  //     $("p").css("background-color","red");
  //   })
  // });

  // $(document).ready(function() {
  //   $(".ex .hide").click(function() {
  //     $(this).parents(".ex").hide("slow");
  //   });
  // });
    $(document).ready(function() {
    //   $("#hide").click(function(){
    // $("p").hide();
    // });
    // $("#show").click(function(){
    // $("p").show();
    $(".ex .hide").click(function() {
            $("p").toggle();
      });

    // });
    });



}


function testFadeIn() {
  $(document).ready(function() {
      x = document.getElementById('fadeInButton')

      // $("#divFadeIn01").fadeIn();
      // $("#divFadeIn02").fadeIn("slow");
      // $("#divFadeIn03").fadeIn(3000);

      // $("#divFadeIn01").fadeOut();
      // $("#divFadeIn02").fadeOut("slow");
      // $("#divFadeIn03").fadeOut(3000);

      // $("#divFadeIn01").fadeToggle();
      // $("#divFadeIn02").fadeToggle("slow");
      // $("#divFadeIn03").fadeToggle(3000);

      $("#divFadeIn01").fadeTo("slow",0.15,function() {
        alert("ok");
      });
      $("#divFadeIn02").fadeTo("slow",0.4);
      $("#divFadeIn03").fadeTo("slow",0.7);


  });
}

function flip_click() {
  $(document).ready(function(){
    // $(".panel").slideDown("slow");
    //
    // $(".panel").slideUp("slow");//slideToggle
    $(".panel").slideToggle("slow");
});
}
function startAnimate() {
  $(document).ready(function() {
    // $(".divAnimate").animate({
    //   left:'250px',
    //   opacity:'0.5',
    //   // height:'+=250px',
    //   height:'toggle',
    //   // width:'+=250px',
    // },"slow",function() {
    //   $(".divAnimate").animate({
    //     left:'10px',
    //     opacity:'1',
    //     // height:'-=150px',
    //     // width:'-=150px',
    //   })
    //
    // });


    var div = $('.divAnimate');
    div.animate({height:'300px',opacity:'0.4',fontSize:'3em'},"slow");
    div.animate({width:'300px',opacity:'0.8',fontSize:'1em'},"slow");
    div.animate({height:'100px',opacity:'0.4',fontSize:'2em'},"slow");
    div.animate({width:'100px',opacity:'0.8',fontSize:'3em'},"slow");



  });
}

function testLink() {
  $(document).ready(function() {
      $(".linkP").css("color","red")
      .slideUp(2000)
      .slideDown(2000);
  });
}

function dom() {
  alert("text:"+$(".test").text("hello world")+"html:"+$(".test").html("<b>hello world</>")+"input:"+$(".inputClass").val("hello world")+" attr: "+$(".testattr").attr("href"));
}
function getOrder() {
  $(document).ready(function() {
      // $(".order1").text(function(i,origText) {
      //   return "old text: " +origText+"new text: hello world";
      // });
      // $(".order2").html(function(i,origText) {
      //   return "old html: " +origText+"new text: hello<b> world</b>";
      // });
      // // $(".w3s").attr({
      // //     "href":"https://www.baidu.com",
      // //     "title":"W3Schools jQuery Tutorial",
      // // });
      // $(".w3s").attr("href",function(i,origText) {
      //   return origValue +"/jquery";
      // });

      $("p").append("Some appended text.");
      var text1 = "<p>text1</p>";
      var text2 = $("<p></p>").text("text2");
      var text3 = document.createElement("p");
      text3.innerHTML = "text3";
      $("p").append(text1,text2,text3);

  });
}

function insertContent() {
  $(document).ready(function() {
      $("img").before("<b>before</b>");
      $("img").after("<i>after</i>");
      $("img").remove();
      $("p").remove(".removeP");
  });
}
function testEmpty() {
  $(document).ready(function() {
      $(".emptyDiv").remove();
  });
}
function useAddClass() {
$(document).ready(function() {
  // $("h1,h2,p").addClass("blue important");
  // $("div").addClass("important blue")
  // $("h1,h2,p").removeClass("blue important");
  $("h1,h2,p").toggleClass("blue important");
  alert("background color"+$("p").css({
    "background-color":"yellow",
    "font-size":"200%",
  }));
});
}

function loadTest() {
  $(document).ready(function() {
    alert('loandtest');
    $(".textTest").load('../res/test_text.txt');
    // $(".textTest").text('../res/text.txt');
  });
}

function getData() {
  $(document).ready(function() {
    alert("get start");
    $.get("test_text.txt",function(data,status) {
      alert("数据:"+data+"\n"+status);
    });
    alert("get end");
  });

}
