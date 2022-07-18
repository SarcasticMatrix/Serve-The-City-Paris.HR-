/* 
--------------------------------------------------------------------
Contains all of the features concerning the databases 
--------------------------------------------------------------------
*/

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Importations
const candidatsList = require("./features/candidatsList");


// Constants et variables
const registrationsDatabaseId = 'c7ea75ce-14a2-43ec-b734-107ff94dbeff';              
const membersDatabaseId = '54379786-8ba6-484f-89d6-80f75196b04a';
const rejectedDatabaseId = 'abd1e970-bf6e-4bff-9f9f-0248a9024fad';

const propAcceptId = "LPf%3D";
const proplastNameId = "HI%3CN";

let acceptedUsers = [];
let declinedUsers = [];
let remindUsers = [];

// -----------------------------------------------------------------
//  GENERALES 
// -----------------------------------------------------------------

candidatsList.function_list(registrationsDatabaseId)
    .then((data) => {
       let moveAccepted = data[0];
       let moveDeclined = data[1];

       console.log(moveAccepted);
       console.log('------------------------')
       console.log(moveDeclined);
    })

    .catch((e) => {
        console.log(e);
    });



