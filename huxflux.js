// Här är filen du ska ändra i! Huxflux-funktionen ska returnera
// en lista med 7 unika slumpmässiga heltal mellan 1 och 35. När
// du öppnat projektet i browsern, kan du trycka på "Prova funktionen"
// för att köra den och "Kör tester på funktionen" för att se om alla
// krav uppfylls.

const huxflux = () => {
  // Denna funktion behöver fyllas på med logik så att den returnerar
  // en lista med 7 unika slumpmässiga heltal mellan 1 och 35!

  //Declaring a variable for storing a list array
let list = [];

//Looping seven times,
for (let i = 0; list.length < 7; i++) {

// declaring a number variable containing a random number between 1 and 35,
let number = Math.floor(Math.random() * 35) +1;

// if the random number is not already in the list array,
if (!list.includes(number)) {

//adding it to the list array.
  list.push(number);
}

//Else backing one iteration in the loop to start with another random number.
else {
  i--;
}

}

//Returning the list containing 7 random numbers from the function huxflux
return list;
}

export {
  huxflux
}
