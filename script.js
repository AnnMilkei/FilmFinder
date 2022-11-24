movies.map((movie) => {
    let afbeeldingUrl = movie.poster; // url uit array halen uit listmovies.js en in variabele plaatsen

    let posterAfbeelding = document.createElement("img");  //afbeelding die in html geplaatst wordt in variabele zetten
    posterAfbeelding.src = afbeeldingUrl // plak de source (url) in het image element

    let listItem = document.createElement("li"); // li item creeeren in de DOM 
    const pakUl = document.querySelector("UlForJavascript"); // selecteer de ul waarin alles moet gebeuren. 

    listItem.appendChild(posterAfbeelding); //hier komt IMG de posterAfbeelding is een img element 
    pakUl.appendChild(listItem); // listItem komt in de UL 
    return movie; 

}); 

const pakAlleFilms = document.getElementsByName("films");
console.log("Voorbeeld van een type film pakken:", pakAlleFilms[3]); //url uit array halen in listMovies.js 


