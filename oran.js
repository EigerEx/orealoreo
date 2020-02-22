const arrayOfUsers = [
    "289012161617854465"
];//ORAN


let arrayOfBotObjs = [];


const channelIds = {
  
    /* Fake Centra Server */ /* Real */
  
    /* Top Category */
    "619990145684471867" : "548244973359726612", //indeterminate
    "619990190362066987" : "426848728645763083", //games
    "619990420700790787" : "486144630006480897", //education
    "619990496235749376" : "522913751687626767", //robotica
  
    /* Other Category */
    "619990928651845714" : "440608954939080704", //orans channel
    "619991073061732373" : "538705893739724800", //centra channel
    "619991147456233472" : "615611489071661066", //music recommendations
    "619991207480655877" : "460512247148445696", //programming
    "619991459407331331" : "438249042086985739", //meme-image dump
  
    /* Archive Category */
    "619991592480276481" : "485104771213033474", //plans
    "619991691897602048" : "452161639278706690", //operation-big-man
    "619991758151090186" : "594595116761743390", //spam-links
    "619991832562237490" : "453309217697300521", //despacito
    "619991933921656842" : "612003047778025482", //rent-shite
    "619991987268878376" : "457680076214108181", //sailing
    "619992082156617768" : "368835734729129995", //old-general
    "619992206349959208" : "456449511930331137", //jew-dox
    "619992252428713984" : "394840786845433867", //meme-production-bunker
    "619992366870298685" : "362338367314067477", //old-school
    "619992417973698581" : "482236120130912257", //camping
    "619992468620050462" : "455096836710203425"  //lovelycanseu

};





function checkIfOranSentMessage(msg) {
    if (msg.author.bot == '289832908389089281') { 
        //Message belongs to real oran account
        console.log("Message sent by oran");
        console.log(msg.content);
        let msgContent = msg.content;
        let channelId = msg.channel.id;
      
        const bot = arrayOfBotObjs[ arrayOfUsers.indexOf(senderId) ]; // Corresponding Selfbot Of Message Sender
        
        if (channelIds[msg.channel.id]){
            let correspondingChannel = bot.channels.get(channelIds[channelId]); 
            //A then needs to go here
          
            if (msgContent == "") {
                /* Image message */

                msg.attachments.forEach(attachment => {
                    let newAttachmentJSON = {
                        files : [attachment.url]
                    };
                    correspondingChannel.send("\t", newAttachmentJSON);
                });
            } else {
                /* Text Message */
                let newMsg = centraToFakeMention(emojis.centraToFake(msgContent) );
                
                
                correspondingChannel.send(newMsg)
                .then(newMsg => {sentMessagesObj.push([msg.id,newMsg.id]);});
            }
        }

    } else {
        console.log("Message sent in fake centra");
    }
}




function startTyping(channel, user) {
    //console.log("TYPING BEGAN");
    if (arrayOfUsers.indexOf(user.id) == -1){
        return;               //if the account that changed status is not in arrayOfUsers
    }
  
    const bot = arrayOfBotObjs[ arrayOfUsers.indexOf(user.id) ]; // Corresponding Selfbot Of Message Sender
    if (channelIds[channel.id]){
        let correspondingChannel = bot.channels.get(channelIds[channel.id]);
        correspondingChannel.startTyping();
        setTimeout(stopTyping(channel, user),20000);
    }
}

function stopTyping(channel, user) {
    //console.log("TYPING END");
    if (arrayOfUsers.indexOf(user.id) == -1){
        return;               //if the account that changed status is not in arrayOfUsers
    }
  
    const bot = arrayOfBotObjs[ arrayOfUsers.indexOf(user.id) ]; // Corresponding Selfbot Of Message Sender
    if (channelIds[channel.id]){
        let correspondingChannel = bot.channels.get(channelIds[channel.id]);
        correspondingChannel.stopTyping();
    }
}