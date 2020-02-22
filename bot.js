const discord = require("discord.js");
const fs = require('fs');

const http = require('http');
const express = require('express');
const app = express();

/* Tatsumaki Module */
const tatsumaki = require('./tatsumaki.js');
const emojis = require("./emojis.js");

//let realCentra = "135734887410958336";
let realCentra = "135734887410958336"; //Centra Test Ground
let fakeCentra = "619989672478638091";

/* Each token must be initialised */
/* And put in bot obj array */

const arrayOfUsers = [
    "289012161617854465",
    "135734573047873536",
    "319421760338526210",
    "284822134688186376",
    "355271020715966466",
    "281550411058642946",
    "193787856261611523",
    "319424911527378944"
];

//At anytime we can go bot.user.send message
let arrayOfBotObjs = [];


let sentMessagesObj = [];

const userAccounts = {
    "289012161617854465" : {
        token : process.env.FAKE_MARK,
        personName : "Mark",
        fakeid : "620031308688785408"
    },
    "135734573047873536" : {
        token : process.env.FAKE_CATHAL_OC,
        personName: "Cathal OC",
        fakeid : "620030575646081034"
    },
    "319421760338526210" : {
        token : process.env.FAKE_AIDAN,
        personName : "Aidan",
        fakeid : "620023798141419530"
    },
    "284822134688186376" : {
        token : process.env.FAKE_ETIENNE,
        personName : "Etienne",
        fakeid : "620222213601099787"
    },
    "355271020715966466" : {
        token : process.env.FAKE_CATHAL_M,
        personName : "Cathal M",
        fakeid : "620028091770863619"
    },
    "281550411058642946" : {
        token : process.env.FAKE_AISAN,
        personName : "Aisan",
        fakeid : "620238236882567170"
    },
    "193787856261611523" : {
        token : process.env.FAKE_ANTON,
        personName : "Anton",
        fakeid : "620029352322531355"
    },
    "319424911527378944" : {
        token : process.env.FAKE_ROY,
        personName : "Roy",
        fakeid : "620026584983666689"
    }
};

const forwardUserIds = {
  //  "real ID" : "selfbot ID"
      "289012161617854465": "620031308688785408", //Mark
      "135734573047873536" : "620030575646081034", //cathalOc
      "319421760338526210" : "620023798141419530" , //Aidan
      "284822134688186376" : "620222213601099787", //Etienne
      "355271020715966466" : "620028091770863619", //CathalM
      "281550411058642946" : "620238236882567170", //Aisan
      "193787856261611523" : "620029352322531355", //Anton
      "319424911527378944" : "620026584983666689", //Roy
      "289832908389089281" : "619625808876797963", //Oran
}
const reverseUserIds = {
  //  "selfBot ID" : "real ID"
      "620031308688785408" : "289012161617854465", //Mark
      "620030575646081034" : "135734573047873536", //cathalOc
      "620023798141419530" : "319421760338526210", //Aidan
      "620222213601099787" : "284822134688186376", //Etienne
      "620028091770863619" : "355271020715966466", //CathalM
      "620238236882567170" : "281550411058642946", //Aisan
      "620029352322531355" : "193787856261611523", //Anton
      "620026584983666689" : "319424911527378944", //Roy
      "619625808876797963" : "289832908389089281", //Oran
}
const channelIds = {
    /* Centra Test Spot */
    "620039391636619267" : "619990145684471867",
  
    /* Centra Server */ /* Real */
  
    /* Top Category */
    "548244973359726612" : "619990145684471867", //indeterminate
    "426848728645763083" : "619990190362066987", //games
    "486144630006480897" : "619990420700790787", //education
    "522913751687626767" : "619990496235749376", //robotica
  
    /* Other Category */
    "440608954939080704" : "619990928651845714", //orans channel
    "538705893739724800" : "619991073061732373", //centra channel
    "615611489071661066" : "619991147456233472", //music recommendations
    "460512247148445696" : "619991207480655877", //programming
    "438249042086985739" : "619991459407331331", //meme-image dump
  
    /* Archive Category */
    "485104771213033474" : "619991592480276481", //plans
    "452161639278706690" : "619991691897602048", //operation-big-man
    "594595116761743390" : "619991758151090186", //spam-links
    "453309217697300521" : "619991832562237490", //despacito
    "612003047778025482" : "619991933921656842", //rent-shite
    "457680076214108181" : "619991987268878376", //sailing
    "368835734729129995" : "619992082156617768", //old-general
    "456449511930331137" : "619992206349959208", //jew-dox
    "394840786845433867" : "619992252428713984", //meme-production-bunker
    "362338367314067477" : "619992366870298685", //old-school
    "482236120130912257" : "619992417973698581", //camping
    "455096836710203425" : "619992468620050462"  //lovelycanseu

};

const fakeTatsumakiBackdoor = process.env.tatsumaki_bot_TOKEN;


/* Centra to Fake Mention Convertor */
function centraToFakeMention(msgText) {
    let returnText = msgText;
  
    for (let num in arrayOfUsers) {
        let mentionText = arrayOfUsers[num];
        let newMentionText = userAccounts[arrayOfUsers[num]].fakeid;
        returnText = returnText.replace(mentionText,newMentionText);
    }
  
    return returnText;
}

app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
      http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);  //pings itself
      http.get(`http://spiderbotyeet.glitch.me/`); //pings other bot (other bot pings DTB-bot too)
}, 300000);

//---------------
const bot = new discord.Client();

function cheese(eee) {
    //console.log(eee);
    for (let i = 0;i < eee.length;i++) {
        console.log(eee[i].author.username);
        console.log(": " + eee[i].content);
      
    }
}

async function lots_of_messages_getter(channel, limit = 500) {
    const sum_messages = [];
    let last_id;

    while (true) {
        const options = { limit: 100 };
        if (last_id) {
            options.before = last_id;
        }

        const messages = await channel.fetchMessages(options);
        sum_messages.push(...messages.array());
        last_id = messages.last().id;

        if (messages.size != 100 || sum_messages >= limit) {
            break;
        }
    }
  
    return sum_messages;
}

/* Callback Functions */
function botReady() {
    /* Fake Tatumaki is ready to setup all the fake bots */
    //console.log("BOT WORKS YEET");
    bot.user.setActivity("Use t!help");
    /* Cheese */
    
    console.log("ee " + bot.guilds.array())
  let chan = bot.channels.get("548244973359726612");
  
    chan.fetchMessages({ limit: 100 })
  .then (messages => cheese(messages.array()))
  //let ww = chan.createInvite7()
  //.then(code => {console.log(code)});
  //console.log(ww);
  lots_of_messages_getter(chan)
  .then (messages => console.log(messages.array()))

  
    console.log("Logging in the bots");
    var loginCounter = 0;
    for (const botClientIds in arrayOfUsers) {
        loginCounter++;
        //console.log(arrayOfTokens[botClientIds]);
        const userJSON = userAccounts[arrayOfUsers[botClientIds]];
      
        const botObj = new discord.Client();
  
        botObj.login(userJSON.token).then(function() {
                  //after all selfbots log in, loop through their statuses
            console.log("\tLogged in " + userJSON.personName + ", " + "TOKEN" + ", "+ arrayOfUsers[botClientIds]);
                    
            if ( arrayOfUsers[botClientIds] in forwardUserIds ) {
                bot.fetchUser( arrayOfUsers[botClientIds] )
                    .then( realAccount => {
                        someoneChangesStatus(realAccount, realAccount )
                        console.log('\t\tAccount: '+realAccount.username);
                    })
                    .catch(console.error);
            }

          })
          .catch(console.error);
        arrayOfBotObjs.push(botObj);
  
    }
}




function someoneSentMessage(msg) {
    /* Tatsumaki Handling Code */
    if (msg.content.startsWith("t!")) {
        tatsumaki.tat(msg);
    } else if (msg.author.bot == true) {
        //Message belongs to tatsumaki/bot
    } else if (msg.guild.id == realCentra) {
        const correspondingUser = userAccounts[msg.member.id];
        console.log("Message sent in real centra");
      
        console.log(msg.content);
      
        let senderId = msg.author.id;
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


function someoneChangesStatus(oldMember, newMember) {
    /* Someone goes offline etc */
        let userId = newMember.id;
        let userName = '';
        if (newMember.user){
            userName = newMember.user.username;
            userId = newMember.user.id
        }
        else{
            userName = newMember.username
            userId = newMember.id
        }
  
        if (arrayOfUsers.indexOf(userId) == -1) {
            console.log(userId)
            //if the account that changed status is not in arrayOfUsers
            //console.log('ID not in user list found' + userId);
            console.log('\t+ Bot account changed status, so doing noting')
            return;               
        } else {

          
        let newPresence = newMember.presence;
        let currentStatus = newPresence.status;
        let currentGame = newPresence.game;
        let currentClientStatus = newPresence.clientStatus
        console.log("\t\t" + userName + ' is currently set to ' + newPresence.status);
        if (currentStatus == 'offline') {
            currentStatus = 'invisible';
        }
          
          
        const selfBot = arrayOfBotObjs[ arrayOfUsers.indexOf(userId) ]; // Corresponding Selfbot Of Message Sender          
        
        if (currentGame != null) {   //if hes playing a game
            let playingGame = newPresence.game.name;
            console.log(currentGame);
            selfBot.user.setPresence({
                game: {
                    name: playingGame
                },
                status: currentStatus
            })
            console.log(selfBot.user.username + ' changed Status to ' + currentStatus +' and playing '+ playingGame);
        } else {                       //if its just a status change, no game
            selfBot.user.setPresence({
                status: currentStatus,
                game: {name: currentGame}
            })
            .then(resp => { console.log('\t\tChanged ' + selfBot.user.username + ' Status To ' + currentStatus) })
            .catch(console.error);
            
        }
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


//New Experimental Code
function messageUpdate(oldMessage, newMessage) {
    //When a new message is made, we take note of its corresponding message id
    //In the spoof server
  
    //When someone edits the message
    //We also edit the message in the other server
    //No changes need to be made for orans account
  
    console.log("YEET");
  
    for (let msg in arrayOfBotObjs) {
        if (msg[0] == newMessage.id) {
            console.log("YEET");
        }
    }
    
}


function channelUpdate(oldChannel, newChannel) {
    if (channelIds[newChannel.id]){
        let correspondingChannel = bot.channels.get(channelIds[newChannel.id]);

        correspondingChannel.setName(newChannel.name);
    }
  
    //Now if the channel isn't there
    //Do it with fake orans account
    //This code needs to be written first :)
}


/* Events and Callbacks */
bot.on("ready", botReady);
bot.on("message", someoneSentMessage);
bot.on("presenceUpdate", someoneChangesStatus);

bot.on("typingStart", startTyping);
bot.on("typingStop", stopTyping);

/* Server Updating Events */
bot.on("messageUpdate", messageUpdate);
bot.on("channelUpdate", channelUpdate);

bot.login(fakeTatsumakiBackdoor);
  
  
