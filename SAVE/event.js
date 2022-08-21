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


/// Script !

// Extracts two lists: [[acceptedPagesId],[declinedPagesId]]
NotionAPI.function_listEvent(database_id)
    .then( (data)=>{
        data[0].forEach(element => {
            acceptedUsersPagesId.push(element);
        });
        
        data[1].forEach(element => {
            declinedUsersPagesId.push(element);
        });
        
        //console.log(acceptedUsersPagesId);
        return [acceptedUsersPagesId,declinedUsersPagesId];
    }) //[pageId,pageId...] OF APPLICANTS THAT ARE ACCEPTED
    .then(async (pagesId) => {
        //console.log(pagesId[0]);
        for (var pageId of pagesId[0]) {
            //console.log(pageId);
            var responseEmail = await NotionAPI.readProperty(emailId,pageId);
            var responseFirstName = await NotionAPI.readProperty(firstNameId,pageId);
            var responseLastName= await NotionAPI.readProperty(lastNameId,pageId);
            var responseReminder= await NotionAPI.readProperty(reminderId,pageId);
            //console.log(response);
            var mail = responseEmail.email;
            var firstName = responseFirstName.results[0].title.plain_text;
            var lastName = responseLastName.results[0].rich_text.plain_text;
            var reminder = responseReminder.formula.number;
            
            acceptedUsers.push([firstName,lastName,mail,reminder]);
        }
        //console.log(acceptedUsers);
        return acceptedUsers;
    })
    .then(async (acceptedUsers) => {
        if (acceptedUsers.length>0) {
            await NodemailerAPI.eventAccepted(acceptedUsers);
            console.log(`Event mail was sent to ${acceptedUsers.length} members:`);
            for (const member of acceptedUsers) {
                console.log(member[2]);
            }
        }
        // No member selected
        else {
            console.log(`Reminder mail was sent to ${acceptedUsers.length} members.`)
        }
        return acceptedUsers;
    })
    .catch((err) => {
        console.error(err);
    });