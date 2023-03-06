//a a function called checkSeason, 
//it takes a month parameter and 
//returns the season:Autumn, Winter, Spring or Summer.
function checkSeason  (months){
    switch (months) {
        case months === 'december' || 'january' || 'february':
            console.log("it\'s Summer time" );
            break;
        case 'september' || 'october' || 'november':
            console.log("it\'s Autumn season")
            break;
        case 'march' || 'april' || 'may':
            console.log("it\'s winter season");
            break;
        case 'june' || 'july' || 'August':
            console.log("it\'s spring season");
            break;
        default:
            console.log(`that is not a month`);

    }
}
checkSeason('december')