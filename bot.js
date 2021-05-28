// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory } = require('botbuilder');
const { QnAMaker } = require('botbuilder-ai');
class EchoBot extends ActivityHandler {
    constructor(configuration, qnaOptions) {
        super();
        if (!configuration) throw new Error('[QnaMakerBot]: Missing parameter. configuration is required');

        // now create a QnAMaker connector.
        this.qnaMaker = new QnAMaker(configuration, qnaOptions);
        this.onMessage(async (context, next) => {
           const replyText = `Echo: ${ context.activity.text }`;
            await context.sendActivity(MessageFactory.text(replyText, replyText));
        
            // send user input to QnA Maker.
            const qnaResults = await this.qnaMaker.getAnswers(context);
        
            // If an answer was received from QnA Maker, send the answer back to the user.
            if (qnaResults[0]) {
                await context.sendActivity(`QnA Maker Returned: ' ${ qnaResults[0].answer}`);
            }
            else {
                // If no answers were returned from QnA Maker, reply with help.
                await context.sendActivity('No QnA Maker response was returned.'
                    + 'This example uses a QnA Maker Knowledge Base that focuses on smart light bulbs. '
                    + `Ask the bot questions like "Why won't it turn on?" or "I need help."`);
            }
            await next();
        });
        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            const welcomeText = 'Welcome echo bot, please write a message or leave a note.';
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                
                 if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
                }
                
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}

  
module.exports.EchoBot = EchoBot;

// class EchoBot extends ActivityHandler {
//     constructor() {
//         super();
//         // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
//         this.onMessage(async (context, next) => {
//             if(context.activity.text=='Hi, how are you?'){
//                 await context.sendActivity(MessageFactory.text('fine, how can I help you?'));
//             }
//            else if(context.activity.text=='what is the weather today?'){
//                 await context.sendActivity(MessageFactory.text('its sunny, temperature is 38c'));
//             }
//             // const replyText = `Echo: ${ context.activity.text }`;
//             // await context.sendActivity(MessageFactory.text(replyText, replyText));
//             // By calling next() you ensure that the next BotHandler is run.
//             await next();
//         });

     













// var activity = await result as Activity;    
//     // calculate something for us to return    
//     int length = (activity.Text ? ? string.Empty).Length;    
//     // return our reply to the user    
//     //test    
    // if (activity.Text.Contains("technology")) {    
    //     await context.PostAsync("Refer C# corner website for tecnology http://www.c-sharpcorner.com/");    
    // } else if (activity.Text.Contains("morning")) {    
    //     await context.PostAsync("Hello !! Good Morning , Have a nice Day");    
    // }    
//     //test    
//     else if (activity.Text.Contains("night")) {    
//         await context.PostAsync(" Good night and Sweetest Dreams with Bot Application ");    
//     } else if (activity.Text.Contains("date")) {    
//         await context.PostAsync(DateTime.Now.ToString());    
//     } else {    
//         await context.PostAsync($ "You sent {activity.Text} which was {length} characters");    
//     }    
//     Wait(MessageReceivedAsync); 