/* 
--------------------------------------------------------------------
Extract : 
-> moveAccepted : list of the pageIds (string) of the accepted applications
-> moveDeclined : list of the pageIds (string) of the accepted applications
--------------------------------------------------------------------
*/
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Constants    
const registrationsDatabaseId = 'c7ea75ce-14a2-43ec-b734-107ff94dbeff';              
const membersDatabaseId = '54379786-8ba6-484f-89d6-80f75196b04a';
const rejectedDatabaseId = 'abd1e970-bf6e-4bff-9f9f-0248a9024fad';

const propAcceptId = "LPf%3D";
const proplastNameId = "HI%3CN";

const propertyId = 'jLMI';
const pageId = '23bccb09-6780-49ab-b32b-d3600e511f6f';
const databaseId = registrationsDatabaseId;

let acceptedUsers = [];
let declinedUsers = [];
let remindUsers = [];
                    

// -----------------------------------------------------------------
// FONCTIONS GENERALES 
// -----------------------------------------------------------------

async function readDatabase(databaseId) {
  // Return en json la liste des pages

  const database = await notion.databases.query({database_id: databaseId});
  const listPages = database.results;
  //const listProperties = database.results[0].properties; // await notion.pages.retrieve( { page_id: listPages.results[0].id });

  return listPages;
}


async function readProperty(propertyId, pageId){
  // return le contenue de la propriété d'id <propertyId> de la page d'id <pageId> 
  const responseProp = await notion.pages.properties.retrieve({ page_id: pageId, property_id: propertyId });
  //console.log(responseProp)
  return responseProp;
}



async function function_list(databaseId){
  // return la liste des pageId des personnes acceptées et refusées
  const listPages = await readDatabase(databaseId);

  let moveAccepted = []; // Liste des personnes acceptées 
  let moveDeclined = []; // Liste des personnes refusées 

  for (let i in listPages){
    try {
      let box = await readProperty(propAcceptId, listPages[i].id);
      box = box.select.name;

      if (box == 'Accepted') {
        // Si le candidat est accepté 
        moveAccepted.push(listPages[i].id);
        //console.log('Accepted : ' + listPages[i].id);
      }
      else if (box == 'Rejected') {
        // Si le candidat est refusé 
        moveDeclined.push(listPages[i].id);
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
        console.log(lastName + " has not yet been processed");
      }
    }
      
  }
  return [moveAccepted, moveDeclined];
}


// -----------------------------------------------
// Zone de test
// -----------------------------------------------

function_list(databaseId)
  .then((data) => {
    console.log(data[0]);
    console.log('------------------------------------------');
    console.log(data[1]);
  })
  .catch((err) => {
    console.log(err);
  })

/*
// -----------------------------------------------------------------
// FONCTIONS USELESS  
// -----------------------------------------------------------------

async function readPage(pageId) {
  // Return la page en json

  
  const responsePage = await notion.pages.retrieve({ page_id: pageId });
  return responsePage;
}


function function_readPage(pageId){
// Implémente la fonction asynchrone readPage en gerant les promises

readPage(pageId)
    .then((data) => {
      return data;
      console.log(data);})
    .catch((err) => {console.log(err);});
}


function function_readDatabase(databaseId){
// Implémente la fonction asynchrone readDatabase en gerant les promises
  readDatabase(databaseId)
    .then((data) => {
      console.log(data);
      console.log('----------------------------')
      return data;})
    .catch((err) => {console.log(err);});
}


function function_readProperty(propertyId, pageId){
  // Implémente la fonction asynchrone readProperty
    readProperty(propertyId, pageId)
      .then((data) => {
        //console.log(data);
        return data;
        })
      .catch((err) => {console.log(err);});
}


function test(databaseId){ 
  // Implémente la fonction asynchrone function_List
  function_list(databaseId)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {console.log(err);});
}

*/