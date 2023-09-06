/* let video1 = document.getElementById("video1");
let video2 = document.getElementById("video2");
let video3 = document.getElementById("video3");
let video4 = document.getElementById("video4");
let video5 = document.getElementById("video5");
let video6 = document.getElementById("video6"); */

//pausar todos os elementos <iframe>
var stopVideos = function () {
	var videos = document.querySelectorAll('iframe, video');
	Array.prototype.forEach.call(videos, function (video) {
		if (video.tagName.toLowerCase() === 'video') {
			video.pause();
		} else {
			var src = video.src;
			video.src = src;
		}
	});
};

function showSeries() {
 document.getElementById("content1").style.display="flex"
 document.getElementById("bntHide").style.display="flex" 
 document.getElementById("bntShow").style.display="none"
 document.getElementById("huh1").style.display="none"
 
}

function hideSeries() {
 document.getElementById("content1").style.display="none"
 document.getElementById("bntShow").style.display="flex"
 document.getElementById("bntHide").style.display="none"
}

function showSeasons() {
 document.getElementById("serie").style.display="none"
 document.getElementById("videos").style.display="flex"
 document.getElementById("huh2").style.display="none"
}


function showEp1() {
 document.getElementById("epp").style.display="flex"
 document.getElementById("titleEp1").style.display="flex"
 document.getElementById("img1").style.display="none"
 document.getElementById("huh3").style.display="none"

	document.getElementById("epSeason").style.display="none"
	


}
function hideEp1() {
 document.getElementById("ep1").style.display="none"
 document.getElementById("closeEp1").style.display="none"

 
}


function showEp2() {
 document.getElementById("ep2").style.display="flex"
 document.getElementById("closeEp2").style.display="flex"
 document.getElementById("img2").style.display="none"
}
function hideEp2() {
 document.getElementById("ep2").style.display="none"
 document.getElementById("closeEp2").style.display="none"
 document.getElementById("img2").style.display="flex"
}


function showEp3() {
 document.getElementById("ep3").style.display="flex"
 document.getElementById("closeEp3").style.display="flex"
 document.getElementById("img3").style.display="none"
	document.getElementById("hu3").style.display="none"
}
function hideEp3() {
 document.getElementById("ep3").style.display="none"
 document.getElementById("closeEp3").style.display="none"
 document.getElementById("img3").style.display="flex"
}




function showEp4() {
 document.getElementById("ep4").style.display="flex"
 document.getElementById("closeEp4").style.display="flex"
 document.getElementById("img4").style.display="none"
}
function hideEp4() {
 document.getElementById("ep4").style.display="none"
 document.getElementById("closeEp4").style.display="none"
 document.getElementById("img4").style.display="flex"
}


function showEp5() {
 document.getElementById("ep5").style.display="flex"
 document.getElementById("closeEp5").style.display="flex"
 document.getElementById("img5").style.display="none"
}
function hideEp5() {
 document.getElementById("ep5").style.display="none"
 document.getElementById("closeEp5").style.display="none"
 document.getElementById("img5").style.display="flex"
}


function showEp6() {
 document.getElementById("ep6").style.display="flex"
 document.getElementById("closeEp6").style.display="flex"
 document.getElementById("img6").style.display="none"
 
}
function hideEp6() {
 document.getElementById("ep6").style.display="none"
 document.getElementById("closeEp6").style.display="none"
 document.getElementById("img6").style.display="flex"
}
//pausar video usando database local e usando o elemento <video> 

/* function stopVideo1() {
 video1.pause();
 video1.currentTime = 0;
}
function stopVideo2() {
 video2.pause();
 video2.currentTime = 0;
}
function stopVideo3() {
 video3.pause();
 video3.currentTime = 0;
}
function stopVideo4() {
 video4.pause();
 video4.currentTime = 0;
}
function stopVideo5() {
 video5.pause();
 video5.currentTime = 0;
}
function stopVideo6() {
 video6.pause();
 video6.currentTime = 0; */



function refreshPage(){
 window.location.reload();}