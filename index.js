let counter = 0;




function age() {
counter++;
document.querySelector('h2').innerHTML=counter;
}


function age2() {

counter--;

document.querySelector('h2').innerHTML=counter;


}



function ok() {

if (counter>21) {
	console.log("eligible")
}

else {
	console.log("not eligible")
}


}








