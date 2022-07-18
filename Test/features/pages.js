/* 
--------------------------------------------------------------------
    moves to SAVE Members database the pages that have their id in the list moveAccepted
    moves to SAVE Rejected database the pages that have their id in the list moveAccepted
--------------------------------------------------------------------
*/

// Environnement Notion
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Importations
//const candidatsList = require("./candidatsList.js");

// Constants et variables
const registrationsDatabaseId = 'c7ea75ce-14a2-43ec-b734-107ff94dbeff';              
const membersDatabaseId = 'b745cd8f8fc3411aafb34d5293788b69';//'54379786-8ba6-484f-89d6-80f75196b04a';
const rejectedDatabaseId = 'abd1e970-bf6e-4bff-9f9f-0248a9024fad';

const propAcceptId = "LPf%3D";
const proplastNameId = "HI%3CN";

const pageId = 'c9b5278e-bee4-4d5e-99b3-a620a5167753'; 
const pageIdThibaud = "23bccb09-6780-49ab-b32b-d3600e511f6f";
  
        
// -----------------------------------------------------------------
// FONCTIONS GENERALES 
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
            console.log(data);
            return data;
        })
        .catch((err) => {console.log(err);});
}

async function createPage(databaseId,pageId){
    // Copie la page d'id <pageId> dans la database d'id <databaseId>

    // On récupère entièrement la page d'id <pageId> dans la database SAVE Registrations 
    const database = await notion.databases.query({database_id: registrationsDatabaseId}); 
    const listProperties = database.results[0].properties;
    //console.log(listProperties);
    for (let i in database.results){
        // On parcourt toutes les pages pour trouver celle qui correspond à la page d'id <pageId> 
        if (database.results[i].id == pageId){
            // On récupère le contenue de la page
            let page = database.results[i];
            var propriete1 = await notion.pages.properties.retrieve({ page_id: pageId, property_id: '%3Bmu%7C' });
            console.log(propriete1);

            const response = await notion.pages.create({
                parent: {"type": "database_id","database_id": databaseId},
                properties: {

                        

                        //'Country of Residence': { propriete1 /* id: '%3Bmu%7C' */ },
                        'Country of Residence': 
                        { 
                            //object: 'property_item',
                            type: 'select',
                            id: '%3Bmu%7C',
                            select: {
                                id: '1e5dcaa5-bb7b-4d0e-8737-76b507b53af7',
                                name: 'France',
                                color: 'orange'},
                        },
                        
                        //'Complete Phone Call (Include Country Code)': { id: '%3Cu%3Ei' },
                        'Complete Phone Call (Include Country Code)':
                        {
                            //object: 'property_item',
                            type: 'phone_number',
                            id: '%3Cu%3Ei',
                            phone_number: '+33777938099'
                        },
                          
                        //'English Level': { id: '%40rN%3B' },
                        'English Level': 
                        {
                            //object: 'property_item',
                            type: 'select',
                            id: '%40rN%3B',
                            select: {
                              id: '6259b6dc-ae51-4aa6-8ffc-f3bc5a390c32',
                              name: 'Mother Tongue',
                              color: 'gray'
                            }
                        },
                          
                        //'Please detail any previous social impact related experience': { id: 'ADTR' },
                        'Please detail any previous social impact related experience':
                        {
                            object: 'property_item',
                            results: [
                              {
                                object: 'property_item',
                                type: 'rich_text',
                                id: 'ADTR',
                                rich_text: [Object]
                              }
                            ],
                            next_cursor: null,
                            has_more: false,
                            type: 'list',
                            property_item: { id: 'ADTR', next_url: null, type: 'rich_text', rich_text: {} }
                        },  

                        'Creation Date': { id: 'BUjm' },
                        'Date of Registration': { id: 'DJPe' },
                        'Security Word': { id: 'DQJE' },
                        'Other Languages': { id: 'F_%5Bw' },
                        'Please indicate the time you will need to complete the SAVE Member Program (maximum 6 months is allowed)': { id: 'G%3Bzd' },
                        'Last Name': { id: 'HI%3CN' },
                        'If yes, please indicate the arrival date.': { id: 'Is%5DH' },
                        'Accept ?': { id: 'LPf%3D' },
                        'If no, please indicate which city you live in': { id: 'Tl%40r' },
                        'What interests you the most ?': { id: 'UtD%3A' },
                        'Submission Date': { id: 'W%3BLw' },
                        'Do you have any supporting documentation to provide? (CV, Motivational Letter, Video, Testimonial Letter, etc.)': { id: 'YDAQ' },
                        'Do you require SAVE Certification ? If so, why ?': { id: '%5CHky' },
                        'What does being a change-agent mean to you ?': { id: 'auSh' },
                        'Availability': { id: 'eWVl' },
                        'Are you planning a trip to Paris in the near future to join our local activities ?': { id: 'hIbC' },
                        'Email': { id: 'i%5Epr' },
                        'Nationality': { id: 'jLMI' },
                        'What motivated you to join us at SAVE ?': { id: 'kDNn' },
                        'Are you based in Paris ?': { id: 'kM%5Et' },
                        'French Level': { id: 'k%5DP%5E' },
                        'Reminder': { id: 'kz%7BF' },
                        'If student, which school/academic program are you enrolled in ?': { id: 'mftA' },
                        'Date Of Birth': { id: 'oCny' },
                        'I understand there is a €10 Euro monthly donation to become a Serve The City Paris volunteer and participate in the S.A.V.E. Program': { id: 'tEuH' },
                        'Current Employement Status': { id: 'tPi%5C' },
                        'What skills or experiences are you open to share with others ?': { id: '~%3AyB' },
                        'Please indicate when you would like to start the SAVE program': { id: '~NgK' },
                        'First Name': {id: 'title' }                       
                      
                }
            });
        }
    }  
}

async function createPageTest(databaseId,pageId){
    const response = await notion.pages.create({
        parent:{"page_id": pageId},
        properties:{
            "title": [{"text": {"content": "SAVE Registration"}}],
        },
        children:[],
    });
}

createPage(membersDatabaseId,pageIdThibaud)
    .then((data) => {
        //console.log(data);
    })
    .catch((e) => {
        console.log(e);
});
  
//async function function_moveTo(databaseStartId,databaseEndId,pageId){}




  