/* Tatsumaki Code */
const hackermanText = [
    "Try to program the FTP program, maybe it will program the online program!",
    "If we navigate the firewall, we can get to the EXE firewall through the primary EXE firewall!",
    "quantifying the circuit won't do anything, we need to copy the virtual HDD circuit!",
    "Try to back up the PCI monitor, maybe it will back up the redundant monitor!",
    "If we parse the circuit, we can get to the AGP circuit through the cross-platform AGP circuit!",
    "The RSS bandwidth is down, connect the open-source bandwidth so we can connect the RSS bandwidth!"
];


/* Urls To Beautiful Images*/
const beautifulImages = {
  
}


exports.tat = function(msg) {
    let nickname = msg.member.nickname;
    if (nickname == undefined) nickname = msg.member.user.username;
  
    switch (msg.content.toLowerCase().substring(msg.content.indexOf(" ") + 1)) {
        case "t!help": {
            msg.channel.send("```c\n" +
                /* Iconic Help Test */
                "`Standard Commands List` ```\n" + //hmmm colour needs to be fixed
                "Use `t!help [command]` to get more info on a specific command, for example:`t!help rank`\n" + 
                "**1. Core -** `help` `invite` `leveledroles` `ping` `selfroles` `support`\n" +
                "**2. Social -** `background` `badges` `dailies` `played` `profile` `rank` `reputation` `setinfo` `settitle` `top`\n" +
                "**3. Fun -** `8ball` `cah` `cat` `catfacts` `choose` `coin` `cookie` `dice` `dog` `dogfacts` `fishy` `fortune` `numberfacts` `psychopass` `ratewaifu` `reverse` `rps` `slots` `tags` `tatsugotchi`\n" + 
                "**4. Economy -** `credits` `points`\n" + 
                "**5. Utilities -** `color` `converter` `crypto` `google` `image` `lotto` `math` `remindme` `shorten` `stocks` `strawpoll` `todo` `urban` `vote` `weather` `wiki` `youtube`\n" +
                "**6. Information -** `apikey` `avatar` `botlist` `changelog` `channel` `info` `role` `server` `shared` `usage`\n" +
                "**7. Anime -** `anime` `manga` `osu` `sic`\n" + 
                "**8. Memes -** `beautiful` `hackerman`\n\n" + 
                "```\n" + "# Don't include the example brackets when using commands!\n" +
                "# To view mod commands, use t@help\n" + "```" ); 
            break;
        }
        case "t!hackerman": {
            let randomNum = Math.floor(Math.random() * hackermanText.length);
            console.log(randomNum);
            msg.channel.send(":keyboard: | ** Hackerman " + nickname + "**\n" + 
                            "```asciidoc\n" + hackermanText[randomNum] + "\n```");
            break;
        }
        case "t!reverse": {
            //t!reverse - Sneachta ✔ᵛᵉʳᶦᶠᶦᵉᵈ#8371:
            //Reverse :/
            let reversedString = msg.content.replace("!treverse ","").reverse;
            msg.channel.send("`t!reverse - "+ nickname + "\n" + reversedString);
            
            break;
        }
        case "t!beautiful": {
        
            break;
        }
        case "t!xd": {
            msg.guild.setRolePosition("507601734630113281",14);
            console.log("xd");
            break;
        }
        default: {
            /* If we don't implement it */
            /* Use the cool down fallback */
            msg.channel.send(nickname + " , please cool down! (2 seconds left)");
        }
    }
}