
  $("h1").addClass("big-title margin-50");
  $("h1").text("GoodBye!!!");
$("button").text("Don't click!");
$("button").html("<em>Please Don't click!</em>");
console.log($("button").attr("name"));
console.log($("button").attr("name", "fame"));
console.log($("button").attr("name"));

$("h1").click(function(){
  $("h1").css("color", "purple");
});

// for(var i=0; i<document.querySelectorAll("button").length ; i++)
// {
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   });
// }

$("button").click(function(){
  $("h1").css("color", "purple");
});

$("input").keypress(function(event){
  console.log(event.key);
})

$(document).keypress(function(event){
  $("h1").html(event.key);
})

$("h1").on("mouseover", function(){
  $("h1").css("color", "blue");
});

$("button").on("click", function(){
  $("h1").slideUp().slideDown(), animate({opacity: 0.5});
});
