"use strict"

//chest positioning
function getRandomNumber() {
    let x = document.body.offsetWidth
	let y = document.documentElement.clientHeight
	let randomX = Math.floor(Math.random()*x);
	let randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];   
}

// chest object 
let chestObject = {
    chestX: getRandomNumber()[0],
    chestY: getRandomNumber()[1]
}

// chest embeding 
	let img = document.createElement('img');
	img.setAttribute("style", "position:absolute;");
	img.setAttribute("src", "kindpng_4614546 (1).png");
	img.setAttribute('id', 'chest-image')
	img.style.display = 'none'
	document.body.appendChild(img);
	let imgX= parseInt(img.style.left = chestObject.chestX + 'px')
	let imgY= parseInt(img.style.top = chestObject.chestY+ 'px')

    // document.getElementById('chest-position').innerHTML = 'X: ' + imgX + ', Y: ' + imgY;

//Game starts
document.addEventListener('click', treasureHunt) 
let clicks = 0 

function treasureHunt(event) {
   let cX = event.clientX;
   let cY = event.clientY
   clicks++
   let coords1 = "client - X: " + cX + ", Y coords: " + cY;
	// document.getElementById("cursor-coordinate").innerHTML = coords1 ;

	let distance = getDistance(event, chestObject);

	function alertDistance () {
	if(distance < 100) {
		myFunction()
		window.setTimeout(refreshPage, 2000) 
		return('Tresure, welcome to Dubai! ' + 'Found in ' + clicks + ' clicks')
		
	} else if (distance < 200) {
		return ("Really hot")
		} else if (distance < 300) {
		return ("Hot")
		} else if (distance < 400) {
		return ("Warm")
		}else if (distance <500) {
			return('cold')
		}
		else if (distance <1100){ 
			return('Freezing!')
		}
	}
	document.getElementById('distance-hint').innerText = alertDistance()

}		

// Reveal the chest 
function myFunction() {
	let x = document.getElementById('chest-image')
	if (x.style.display === "none") {
	  x.style.display = "block";
	}else {x.style.display = "none";}
  	}

// Get distance of between the cursor and the burreid chest
function getDistance (event, chestObject){
    let diffX = event.clientX - chestObject.chestX
    let diffY = event.clientY - chestObject.chestY
	let dist = Math.sqrt((diffX*diffX)+(diffY*diffY))
	// document.getElementById('distance').innerText = 'distance: ' + dist
    return dist
}
// Reloads the current URL; like refresh button. 
function refreshPage (){
	location.reload()
}



	




