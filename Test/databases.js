/* 
--------------------------------------------------------------------
Contains all of the features concerning the databases 
--------------------------------------------------------------------
*/
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Constants    
const registrationsDatabaseId = 'c7ea75ce-14a2-43ec-b734-107ff94dbeff';              
const membersDatabaseId = '54379786-8ba6-484f-89d6-80f75196b04a';
const rejectedDatabaseId = 'abd1e970-bf6e-4bff-9f9f-0248a9024fad';

const propAcceptId = "LPf%3D";
const pageId = '23bccb09-6780-49ab-b32b-d3600e511f6f';
const databaseId = 'c7ea75ce-14a2-43ec-b734-107ff94dbeff';
                    

// -----------------------------------------------------------------
// FONCTIONS GENERALES 
// -----------------------------------------------------------------

async function readDatabase(databaseId) {
  // Return en json la liste des pages

  const database = await notion.databases.query({database_id: databaseId});
  const listPages = database.results;
  const listProperties = database.results[0].properties; // await notion.pages.retrieve( { page_id: listPages.results[0].id });

  return listPages;
}



function function_readDatabase(databaseId){
// Implémente la fonction asynchrone readDatabase en gerant les promises

readDatabase(databaseId)
  .then((data) => {
    console.log(data);})
  .catch((err) => {console.log(err);});
}

// -----------------------------------------------
// Acceptation of an application
// -----------------------------------------------


// -----------------------------------------------
// Zone de test
// -----------------------------------------------

try {
  function_readDatabase(databaseId);
} catch(err) {
  console.log(err);
}

// -----------------------------------------------------------------
// FONCTIONS USELESS  
// -----------------------------------------------------------------

async function readPageProperties(pageId) {
  // Return en json toutes les propriétés et leur id sous le format : 
  //                     'property': { id: 'propertyId' } 

  
  const responsePage = await notion.pages.retrieve({ page_id: pageId });
  // Liste de toutes les propriétés 
  return responsePage.properties;;
}



function function_readPageProperties(pageId){
// Implémente la fonction asynchrone readPage en gerant les promises

readPageProperties(pageId)
    .then((data) => {console.log(data);})
    .catch((err) => {console.log(err);});
  }



async function readProperty(propertyId, pageId){
    // Lit la propriété sur la page pageId associée à l'id propertyId 

    // Récupère les infos concernant la propriété d'id propertyId
    const responseProp = await notion.pages.properties.retrieve({ page_id: pageId, property_id: propertyId });
    return responseProp;
}



function function_readProperty(propertyId, pageId){
  // Implémente la fonction asynchrone readProperty

  readProperty(propertyId, pageId)
    .then((date) => {console.log(data);})
    .catch((err) => {console.log(err);});
}
