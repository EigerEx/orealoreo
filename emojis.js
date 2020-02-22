/* Emoji Handling Code */
/* Converts messages emoji codes */

// :/ Code doesn't work, me not know why :druggo:

/* REAL CENTRA EMOJIS */
const centraArray = [
    /* Cathals Emojis */
    "382654051873062912",//:fake:
    "382653674431709184",//:real:
    "379308418768437248",//:thonk:
    "367063764526432256",//:feelsbadman
    "281555372551045121"//:Enda:
];


/* FAKE CENTRA EMOJIS */
const fakeCentraArray = [
    /* Cathals Emojis */
    "620220784652058634",//:fake:
    "620220762221051906",//:real:
    "620220723562020879",//:thonk:
    "620220666720944158",//:feelsbadman
    "620220618410950656"//:Enda:
];

exports.centraToFake = function(msgText) {
    let returnText = msgText;
  
    for (let num in centraArray) {
        returnText.replace(centraArray[num],fakeCentraArray[num]);
    }
  
    return returnText;
}


//Oran will use this
exports.fakeToCentra = function(msgText) {
    let returnText = msgText;
  
    for (let num in fakeCentraArray) {
        returnText.replace(fakeCentraArray[num],centraArray[num]);
    }
  
    return returnText;
}
