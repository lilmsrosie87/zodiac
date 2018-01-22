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
var zodiacMofo = [
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

// realized you named the array and a property of the array the same name "zodiac". Must go through code to make sure names are in proper area. Changed array name to zodiacMofo

// can also attempt code for enter key also

function myZodiac() {
	// originally called #astrology, but example showed the id for input tag placed. Will try
	var userInput = document.getElementById("type");
	// altered from myZodiac() above
	// var text = "";
	// var i; 
	// originally #astrology as console.log parameter 
	console.log(userInput);
	console.log("users value lowercase is: " + userInput.value);
		
		
// for loop to look through zodiac array
for(i = 0; i < zodiacMofo.length; i + 1) {
	// removed from original myZodiac()
	// text += userInput.elements[i].value + "<br>";
	
	console.log("users value lowercase is: " + userInput.value.toLowerCase());
	console.log("current zodiac sign in loop is: " + zodiacMofo[i].zodiac);
	
// if statement lowercase
	if(userInput.value.toLowerCase() === zodiacMofo[i].zodiac {
		console.log("if statement ran");
		
		console.log("users typed in: " + userInput.value);
		console.log("current image value is: " + zodiacMofo[i].sign);
		console.log("current fortune value is: " + zodiacMofo[i].traits);


document.getElementById("bem-aqui").textContent = "Not one of the of the signs. Please try again";		
document.getElementById("pic").textContent = " ";
document.getElementById("horoscope").src = "";

}

