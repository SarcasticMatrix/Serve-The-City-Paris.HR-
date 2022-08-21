// Import functions

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: "secret_ooFtx37cBiEUH97LBRqkYWKa9draYMePQIrFvLswJcD" });


const NotionAPI = require("./NotionAPI");
const NodemailerAPI = require("./NodemailerAPI");

/// Sending Script

// Initialize the variables
const database_id="24cfcb07-8066-4805-8d18-6fc35fef6ca2";
const emailId="i%5Epr";
const firstNameId="title";
const lastNameId="HI%3CN";

const reminderId="kz%7BF";

var acceptedUsersPagesId = new Array();
var declinedUsersPagesId = new Array();

var acceptedUsers = new Array();
var pagesIdToCheck = new Array();

var remindUsers = new Array();
var pagesIdToCheck2 = new Array();


/// Script !

// Acceptance mail script
// Extracts two lists: [[acceptedPagesId],[declinedPagesId]]
NotionAPI.function_list(database_id)
    .then( (data)=>{
        data[0].forEach(element => {
            acceptedUsersPagesId.push(element);
        });
        
        data[1].forEach(element => {
            declinedUsersPagesId.push(element);
        });

        return [acceptedUsersPagesId,declinedUsersPagesId];
    }) 
    //Returns [[acceptedUserPageId1,acceptedUserPageId2...],[declinedUserPageId1,declinedUserPageId2...]]
    .then(async (pagesId) => {
        for (var pageId of pagesId[0]) {
            //Stores the email,firstName,lastName,dateSinceSubscription of every acceptedUser
            var responseEmail = await NotionAPI.readProperty(emailId,pageId);
            var responseFirstName = await NotionAPI.readProperty(firstNameId,pageId);
            var responseLastName= await NotionAPI.readProperty(lastNameId,pageId);
            var responseReminder= await NotionAPI.readProperty(reminderId,pageId);
            var mail = responseEmail.email;
            var firstName = responseFirstName.results[0].title.plain_text;
            var lastName = responseLastName.results[0].rich_text.plain_text;
            var reminder = responseReminder.formula.number;
            
            //Concentrates the userData in the acceptedUsers list
            acceptedUsers.push([firstName,lastName,mail,reminder]);
            //Stores the pagesId that need to be marked as "treated by the script"
            pagesIdToCheck.push(pageId);
        }
        return acceptedUsers;
        //acceptedUsers=[[email,firstName,lastName,subscriptionDuration],[...],...]
    })
    .then(async (acceptedUsers) => {
        //Sends the acceptation mail template to every "Accepted" user
        await NodemailerAPI.sendAccepted(acceptedUsers);
        return acceptedUsers;
    })
    .then(async (acceptedUsers) => {
        if(pagesIdToCheck.length<4) { //If the mails were sent, check the corresponding boxes
            for (var pageId of pagesIdToCheck) {
                await NotionAPI.checkMail(pageId);
            }
        };
        return acceptedUsers;
    })
    /// Reminder Mail script
    // The idea is the same as the previous part. Only the filters differ.
    .then(async (acceptedUsers) => {
        /* Users that are already accepted AND not reminded AND are subscribed for more than 80 days*/
        const response = await notion.databases.query({database_id: database_id, filter: { and: [{"property":"Mails sent ?","checkbox": {equals:true}},{"property":"Reminder Mail","checkbox": {equals:false}},{"property":"Remaining days","formula":{number: {greater_than_or_equal_to:80}}},{"property":"Accept ?","select":{equals:"Accepted"}}]}});
        const pagesList = response.results;
        var pagesListId = new Array();
        for (page of pagesList) {
            pagesListId.push(page.id);
        }
        return[acceptedUsers,pagesListId];
    })
    .then(async (data) => {
        for (var pageId of data[1]) {
            var responseEmail = await NotionAPI.readProperty(emailId,pageId);
            var responseFirstName = await NotionAPI.readProperty(firstNameId,pageId);
            var responseLastName= await NotionAPI.readProperty(lastNameId,pageId);
            var responseReminder= await NotionAPI.readProperty(reminderId,pageId);
            var mail = responseEmail.email;
            var firstName = responseFirstName.results[0].title.plain_text;
            var lastName = responseLastName.results[0].rich_text.plain_text;
            var reminder = responseReminder.formula.number;
            
            remindUsers.push([firstName,lastName,mail,reminder]);
            pagesIdToCheck2.push(pageId);
        }
        return remindUsers;
    })
    .then(async (remindUsers) => {
        if (remindUsers.length>0) {
            await NodemailerAPI.sendReminderBcc(remindUsers);
            console.log(`Reminder mail was sent to ${remindUsers.length} members:`);
            for (const member of remindUsers) {
                console.log(member[2]);
            }
        }
        // No member selected
        else {
            console.log(`Reminder mail was sent to ${remindUsers.length} members.`)
        }
        return remindUsers;
    })
    .then(async (remindUsers) => {
        for (var pageId of pagesIdToCheck2) {
            await NotionAPI.checkReminder(pageId);
        }
        return remindUsers;
    })

    .catch((err) => {
        console.error(err);
    });
//const declinedUsersPagesId=NotionAPI.function_list(database_id)[1];

