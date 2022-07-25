// Notion Environment

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: "secret_ooFtx37cBiEUH97LBRqkYWKa9draYMePQIrFvLswJcD" });


// ATTENTION: Déclarer propAcceptId & proplastNameId!

const database_id="24cfcb07-8066-4805-8d18-6fc35fef6ca2";
const propAcceptId="LPf%3D";
const proplastNameId="HI%3CN";
const emailId="i%5Epr";
const firstNameId="title";
const lastNameId="HI%3CN";

//#######################################################

// Pages List & Page Content

async function readDatabase(databaseId) {
    // Return en json la liste des pages des personnes acceptées, non-cochées
  
    const database = await notion.databases.query({database_id: databaseId, filter: { and: [{"property":"Mails sent ?","checkbox": {equals:false}},{"property":"Accept ?","select":{equals:"Accepted"}}]}});
    const listPages = database.results;
    if (listPages.length==0) {
        console.log("You have not accepted any new applicant.");
    }
    else {
        console.log(`You have accepted ${listPages.length} new applicants.`);
    }
    //const listProperties = database.results[0].properties; // await notion.pages.retrieve( { page_id: listPages.results[0].id });
    return listPages;
  }
  
async function readProperty(propertyId, pageId){
    // return le contenu de la propriété d'id <propertyId> de la page d'id <pageId> 
    const responseProp = await notion.pages.properties.retrieve({ page_id: pageId, property_id: propertyId });
    //console.log(responseProp);
    return responseProp;
  }

async function function_list(databaseId){
    // return la liste des pageId des personnes acceptées et refusées
    const listPages = await readDatabase(databaseId);
    //console.log(listPages);
  
    let moveAccepted = []; // Liste des personnes acceptées 
    let moveDeclined = []; // Liste des personnes refusées 
  
    for (let page of listPages){
        /* console.log(page);
        console.log("---------------------------"); */
      try {
        let box = await readProperty(propAcceptId, page.id);
        box = box.select.name;
  
        if (box == 'Accepted') {
          // Si le candidat est accepté 
          moveAccepted.push(page.id);
          //console.log('Accepted : ' + listPages[i].id);
        }
        else if (box == 'Rejected') {
          // Si le candidat est refusé 
          moveDeclined.push(page.id);
          //console.log('Rejected : ' + listPages[i].id);
        }
      } catch(e) {
        //console.log(e.name + " : " + e.message);
        
        // Erreur qui peut arriver souvent :
        // Si la page n'a ni l'attribut "Rejected" ou "Accepted"
        if(e.message == "Cannot read properties of null (reading 'name')"){
          // On indique dans la console que la personne de nom de famille <First Name> n'a pas encore été traité (n'a ni <Accepted>, <Rejected>)
          let lastName = await readProperty(proplastNameId, listPages[i].id);
          lastName = lastName.results[0].rich_text.text.content;
          console.log(lastName + " has not yet been processed as <Accepted> or <Refused>");
        }
      }
        
    }
    return [moveAccepted, moveDeclined];
  }

async function readPage(pageId) {
    // Return la page en json
    const responsePage = await notion.pages.retrieve({ page_id: pageId });
    return responsePage;
  }

//#######################################################

// Check "Mails sent ?" function

async function checkMail(pageId) {
    const response = await notion.pages.update({
        page_id: pageId,
        properties: {
          'Mails sent ?': {
            checkbox: true,
          }
        },
    })};

//#######################################################

// Check "Reminder Mail" function

async function checkReminder(pageId) {
    const response = await notion.pages.update({
        page_id: pageId,
        properties: {
          'Reminder Mail': {
            checkbox: true,
          }
        },
    })};
//#######################################################

// Retrieve 90 days Users

async function function_expire(databaseId) {

}

//######################################################


module.exports= {
    readDatabase:readDatabase,
    readProperty:readProperty,
    function_list:function_list,
    readPage:readPage,
    checkMail:checkMail,
    checkReminder:checkReminder
}