// moved the function below zodiac array to see if this will work better

// function myZodiac {
	// var userInput = document.getElementById("astrology");
	// var text = "";
	// var i; 
	
// for (i = 0; i < userInput.length; i++) {
	// text += userInput.elements[i].value + "<br>";
	// }
	// document.getElementById("results").innerHTML = text;
// }

// zodiac array below
var zodiac = [
{
	zodiac: "Aries",
	sign: "img/Aries.jpg",
	traits: "warrior, strong willied, caring, the bold ram is ready to take on any challenge",
},
{
	zodiac: "Capricorn",
	sign: "img/Capricorn.jpg",
	traits: "the ambitous goat is alway on top",
},
{
	zodiac: "Pisces",
	sign: "img/pisces.jpg",
	traits: "the dreamy fish flow with the currents",
},
{
	zodiac: "Leo",
	sign: "img/leo.jpg",
	traits: "the generous lion lives to express itself",
},
{
	zodiac: "Saggitarius",
	sign: "img/saggitarius",
	traits: "the far seeing archer is always expanding",
},
{
	zodiac: "Taurus",
	sign: "img/taurus.jpg",
	traits: "the determined bull knows that slow and steay wins the race",
},
{
	zodiac: "Virgo",
	sign: "img/virgo.jpg",
	traits: "the discerning virgin strives for perfection",
},
{
	zodiac: "Gemini",
	sign: "img/gemini.jpg",
	traits: "the quick thinking twins shake things ups",
},
{
	zodiac: "Libra",
	sign: "img/libra.jpg",
	traits: "the worldy water barrier marches to its own beat",
},
{
	zodiac: "Cancer",
	sign: "img/cancer.jpg",
	traits: "the sensitive carb loves to love others",
}
];

// can also attempt code for enter key also


function myZodiac() {
	var userInput = document.getElementById("astrology");
	// altered from myZodiac() above
	// var text = "";
	// var i; 
	console.log("users value lowercase is: "
	
for (i = 0; i < userInput.length; i + 1) {
	// removed from original myZodiac()
	// text += userInput.elements[i].value + "<br>";
	}
	document.getElementById("results").innerHTML = text;
	console.log("userInput");
}

