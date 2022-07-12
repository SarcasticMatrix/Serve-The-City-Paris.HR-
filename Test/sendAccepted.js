
// Client Creation - Using a customized Azure Active Directory application
const {
    Client } = require("@microsoft/microsoft-graph-client");
const {
    TokenCredentialAuthenticationProvider
} = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");
const {
    DeviceCodeCredential
} = require("@azure/identity");
/* const msal = require('@azure/msal-node');
const msalConfig = {
  auth: {
      clientId: "e0bcb58f-e00a-45b0-bc15-5905df9f5654",
      authority: "https://login.microsoftonline.com/d1beaacb-c6b5-42b9-8869-2810fb362440",
      clientSecret: "l3l8Q~iXflF0IKA.VHKKrudTRVbyc48qf9G8gbKf",
 }
};
const cca = new msal.ConfidentialClientApplication(msalConfig); */

const credential = new DeviceCodeCredential('d1beaacb-c6b5-42b9-8869-2810fb362440', 'e0bcb58f-e00a-45b0-bc15-5905df9f5654', 'l3l8Q~iXflF0IKA.VHKKrudTRVbyc48qf9G8gbKf');
const authProvider = new TokenCredentialAuthenticationProvider(credential, {
    scopes: ["user.read", "mail.send"]
});


/* Locataire 'd1beaacb-c6b5-42b9-8869-2810fb362440'
Client 'e0bcb58f-e00a-45b0-bc15-5905df9f5654' 
Secret 'l3l8Q~iXflF0IKA.VHKKrudTRVbyc48qf9G8gbKf'*/


/* const azureClient = AzureClient.initWithMiddleware({
    debugLogging: true,
    authProvider
    // Use the authProvider object to create the class.
}); */


///////////

/*
acceptedUsers[[prénom,nom,mail],[...]]
*/

var acceptedUsers=[["Thibaud","Southiratn","southiratn.thibaud@gmail.com"],["Tiboobs","Tibolognaise","thibaud.southiratn@telecom-sudparis.eu"]];


///////////

const options = {
    authProvider,
    debugLogging: true
};

const client = Client.initWithMiddleware(options);

const sendMail = {
  message: {
    subject: 'Meet for lunch?',
    body: {
      contentType: 'Text',
      content: 'The new cafeteria is open.'
    },
    toRecipients: [
      {
        emailAddress: {
          address: 'southiratn.thibaud@gmail.com'
        }
      }
    ],
    /* ccRecipients: [
      {
        emailAddress: {
          address: 'danas@contoso.onmicrosoft.com'
        }
      }
    ] */
  },
  saveToSentItems: 'false'
};

(async () => {
  const response= await client.api('/me/sendMail').post(sendMail);
  console.log(response);
})();