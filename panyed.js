let i = 0;
let n = ' Faraa';
let g = 'Good ';

let pagi = g + 'morning,' + n;
let siang = g + 'afternoon,' + n;
let malam = g + 'evening,' + n;
let malem = g + 'night,' + n;

//DOM elements
let showTeks = document.querySelector('.teks');
let showJam = document.querySelector('.jam');
let random = document.querySelector('.quo');
let element = document.querySelector("#background")
let showBg = document.body.style.backgroundColor;

//Quotes alay
const texts = [

    "Kamu tau apa yang lebih berat dari pegunungan?, ya hanya bisa mencintaimu dari jauh. -Faraa",
    "aku memiliki kesetiaan untukmu meskipun tidak bisa memberikan sentuhan dan pelukan untukmu. -Ferdi",
    "Kita dapat saling memberi kasih sayang dan cinta meski kita tidak pernah bertemu -Faraa Ferdi",
    "Faraa♡Ferdi",
    "I Love You Baby. -Ferdi",
    "I wish we can spend the day together. -Ferdi",
    "Every second, I Love You. -Ferdi",
    "I will come for you and for our love. -Ferdi"

];

//Initialize
function init() {
    startTime();
    randQuo();
	jamS();
}

//Show clock
function startTime() {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
	var s = today.getSeconds();
	
    m = checkTime(m);
	s = checkTime(s);
	
    showJam.innerHTML = h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
	
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};
	return i;
	
  }

  //Show random quote
  function randQuo() {

    random.innerHTML = texts[Math.floor(Math.random()*texts.length)]

  }

  //Show clock
  function jamS() {
	
    var myDate = new Date();
	var hourNow = myDate.getHours();
	
    if (hourNow < 12) {
      showTeks.innerHTML = pagi;
      showBg = element.classList.add("pagi");
    } else if (hourNow >= 12 && hourNow <= 15) {
	  showTeks.innerHTML = siang;
	  showBg = element.classList.add("siang");
    } else if (hourNow > 15 && hourNow < 19) {
      showTeks.innerHTML = siang;
      showBg = element.classList.add("sore");
    } else if ( hourNow >= 19 && hourNow <= 24){
      showTeks.innerHTML = malam;
      showBg = element.classList.add("malam");
    } else {
	  showBg = element.classList.add("malam");
    }
  }

  var brd = document.createElement("DIV");
		document.body.insertBefore(brd, document.getElementById("board"));

		const duration = 3000;
		const speed = 0.5;
		const cursorXOffset = 0;
		const cursorYOffset = -5;

		var hearts = [];
        
    //Generate heart effect
	function generateHeart(x, y, xBound, xStart, scale) {
        
        var heart = document.createElement("DIV");
		heart.setAttribute('class', 'heart');
		brd.appendChild(heart);
		heart.time = duration;
		heart.x = x;
		heart.y = y;
		heart.bound = xBound;
		heart.direction = xStart;
		heart.style.left = heart.x + "px";
		heart.style.top = heart.y + "px";
		heart.scale = scale;
        heart.style.transform = "scale(" + scale + "," + scale + ")";
        
		if(hearts == null)
				hearts = [];
			hearts.push(heart);
			return heart;
		}

		var down = false;
		var event = null;

		document.onmousedown = function(e) {
			down = true;
			event = e;
		}

		document.onmouseup = function(e) {
			down = false;
		}

		document.onmousemove = function(e) {
			event = e;
		}

		document.ontouchstart = function(e) {
			down = true;
			event = e.touches[0];
		}

		document.ontouchend = function(e) {
			down = false;
		}

		document.ontouchmove = function(e) {
			event = e.touches[0];
		}

		var before = Date.now();
		var id = setInterval(frame, 5);
		var gr = setInterval(check, 100);

		function frame() {

			var current = Date.now();
			var deltaTime = current - before;
			before = current;
			for(i in hearts) {
				var heart = hearts[i];
				heart.time -= deltaTime;
				if(heart.time > 0)
				{
					heart.y -= speed;
					heart.style.top = heart.y + "px";
					heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) / heart.y * 200 + "px";
				}
				else
				{
					heart.parentNode.removeChild(heart);
					hearts.splice(i, 1);
				}
			}
		}

		function check() {
            
            if(down) {
                
                var start = 1 - Math.round(Math.random()) * 2;
				var scale = Math.random() * Math.random() * 0.8 + 0.2;
                var bound = 30 + Math.random() * 20;
                generateHeart(event.pageX - brd.offsetLeft + cursorXOffset, event.pageY - brd.offsetTop + cursorYOffset, bound, start, scale);

			}
		}