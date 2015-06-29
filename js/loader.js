/*---------------Countdown-----------------*/

var d = new Date();
var date = d.getDate();
var month = d.getMonth();
var year = d.getYear();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();

var date1 = 26;
var month1 = 11;
var year1 = 2015;
var hour1 = 24;
var minute1 = 60;
var second1 = 60;

var months = month1-month;
var days = date1-date + months*30;
var hours = hour1-hour;
var minutes = minute1-minute;
var seconds = second1-second;
seconds = days*86400 + hours*3600 + minutes*60 + seconds;
		
function tick() {
	if(seconds==0)
		document.write("Completed");
	sec = seconds % 60;
	minutes = Math.floor((seconds/60)%60);
	hours = Math.floor((seconds/3600)%24);
	days = Math.floor(seconds/86400);
    if (sec < 10)
        sec = "0" + sec;
	if (minutes < 10)
        minutes = "0" + minutes;
	seconds--;
	
	var p1 = document.getElementById("days");
	var p2 = document.getElementById("hours");
	var p3 = document.getElementById("minutes");
	var p4 = document.getElementById("seconds");

	p1.innerHTML = days;
	p2.innerHTML = hours;
	p3.innerHTML = minutes;
	p4.innerHTML = sec;
}

function startCountdown() {
    var intervalHandle = setInterval(tick, 1000);
}

function counter() {
	$("#container").fadeTo("500",0.2,function() {
		$("#day").css("display","block");
	});
	$("#day").delay(500).animate({top:'91%'},350,function() {
		$("#s1").css("display","block");
	});	
	$("#s1").delay(850).animate({top:'72%'},350,function() {
		$("#days").css("display","block");
		$("#hour").css("display","block");
	});
	$("#hour").delay(1200).animate({top:'91%'},350,function() {
		$("#s2").css("display","block");
	});
	$("#s2").delay(1550).animate({top:'72%'},350,function() {
		$("#hours").css("display","block");
		$("#minute").css("display","block");
	});
	$("#minute").delay(1900).animate({top:'64.5%'},350,function() {
		$("#s3").css("display","block");
	});
	$("#s3").delay(2250).animate({top:'45.5%'},350,function() {
		$("#minutes").css("display","block");
		$("#second").css("display","block");
	});
	$("#second").delay(2600).animate({top:'64.5%'},350,function() {
		$("#s4").css("display","block");
	});
	$("#s4").delay(2950).animate({top:'45.5%'},350,function() {
		$("#seconds").css("display","block");
		$("#s1").fadeOut(3000);
		$("#s2").fadeOut(3000);
		$("#s3").fadeOut(3000);
		$("#s4").fadeOut(3000);
		$("#days").fadeOut(3000);
		$("#hours").fadeOut(3000);
		$("#minutes").fadeOut(3000);
		$("#seconds").fadeOut(3000);
		$("#day").fadeOut(3000);
		$("#hour").fadeOut(3000);
		$("#minute").fadeOut(3000);
		$("#second").fadeOut(3000);
		$("#container").fadeTo(5000,1);
	});
}

/*---------------------------------*/

/*------------Menu-----------------*/

function menu(){
    $("#btn1").click(function(){
        $("#box").animate({height: "300px"},{duration:400,easing:'swing'});
        $("#text1").delay(50).animate({left: '240px'},{duration: 300,easing:'swing'});
        $("#text2").delay(100).animate({left: '150px'});
        $("#text3").delay(200).animate({left: '150px'});
        $("#text4").delay(300).animate({left: '150px'});
        $("#text5").delay(400).animate({left: '210px'});
        $("#text6").delay(500).animate({left: '150px'});
    });
    $("#btn2").click(function(){
        $("#box").animate({height: "0px"},{duration:900});
        $("#text1").delay(500).animate({left: '-150px'},{duration: 300,easing:'swing'});
        $("#text2").delay(400).animate({left: '-150px'});
        $("#text3").delay(300).animate({left: '-150px'});
        $("#text4").delay(200).animate({left: '-150px'});
        $("#text5").delay(100).animate({left: '-190px'});
        $("#text6").delay(0).animate({left: '-150px'});
    });
}

/*---------------------------------*/

$("document").ready(function () {
	counter();
	startCountdown();
	menu();
});
