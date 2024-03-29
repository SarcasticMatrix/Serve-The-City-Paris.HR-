const nodemailer = require('nodemailer');
///////////////////////////////////////////////////////////////
// TEMPLATES
const acceptTemplate =(acceptedUser) => {
    return `<div>
<p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">Dear ${acceptedUser[0]} ,&nbsp;&nbsp;</span><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
<p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;</span></b><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
<p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">I am<span>&nbsp;</span><span id="DWT165" class="ZmSearchResult" style="background-color: #fffec4;">Munther</span><span>&nbsp;</span>Elsaddig, the SAVE Program Manager at Serve The City Paris (STCP). I&rsquo;m writing to welcome you to the membership program and to help you get started!<b>&nbsp;</b></span><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
<p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">First of all, thank you for your donation to be a member. Your donation is a tax-deductible donation, and it will support our programs for the refugee and asylum seeker community and the homeless in Paris.&nbsp;<b>&nbsp;</b></span><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
<p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
<p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">We are very excited for you to begin the SAVE Program. Just follow the following steps&nbsp;<b><i>(</i></b></span><b><i><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0; background: white;">1. Telegram</span></i></b><b><i><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">,</span></i></b><b><i><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;&nbsp;</span></i></b><b><i><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0b5394;">2. Basic Volunteer Training and other workshops)</span></i></b><b><i><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;</span></i></b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">and you will get the hang of everything in no time. Below is where to start:<br /><b>&nbsp;</b></span><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
<p class="x_xmsolistparagraph" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">1.</span></b><b><span lang="EN-GB" style="border: 1pt none; font-size: 7pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></b><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">Telegram&nbsp;</span></b><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: #0c64c0;">&nbsp;</span></p>
<p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">Please join our Telegram group to get messages and updates on all STCP volunteering events and activities. Here's the link:</span><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">&nbsp;</span><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #741b47;"><span class="x_MsoHyperlink" style="margin: 0px; color: blue; text-decoration: underline;"><span style="margin: 0px; color: #741b47;"><span class="Object" role="link" id="OBJ_PREFIX_DWT166_com_zimbra_url" style="color: #005a95; text-decoration: none; cursor: pointer;"><a href="https://t.me/joinchat/RmDV1gXvGdVTOdMM" rel="noopener noreferrer nofollow noopener noreferrer" target="_blank" style="color: #005a95; text-decoration: none; cursor: pointer; margin: 0px;"><span style="margin: 0px; color: #0c64c0;">https://t.me/joinchat/RmDV1gXvGdVTOdMM</span></a></span></span></span></span><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">&nbsp;</span></b><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: #0c64c0;">&nbsp;</span></p>
<p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;</span><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
<p class="x_xmsolistparagraph" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"></p>
<p class="x_MsoNormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;"></span></p>
<p class="x_xmsolistparagraph" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">2.</span></b><b><span lang="EN-GB" style="border: 1pt none; font-size: 7pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></b><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">Basic Volunteer Training and other workshops&nbsp;</span></b><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: #0c64c0;">&nbsp;</span></p>
<p class="x_x_MsoNormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;"><span style="font-size: 14.6667px; margin: 0px; background-color: #ffffff; display: inline !important;">Being a SAVE member, you&nbsp;can participate in those workshops especially targeted to SAVE participants.&nbsp;</span><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; margin: 0px; padding: 0cm; background-color: #ffffff;">You can discover all our upcoming volunteering activities and workshops on our</span><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; margin: 0px; padding: 0cm; background-color: #ffffff; color: #0c64c0;">&nbsp;</span><span class="x_x_x_x_MsoHyperlink" style="font-family: 'times new roman', serif; margin: 0px; color: blue; text-decoration: underline; background-color: #ffffff;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm;"><span class="Object" role="link" id="OBJ_PREFIX_DWT167_com_zimbra_url" style="color: #005a95; text-decoration: none; cursor: pointer;"><a href="https://www.servethecity.paris/current-volunteer-events/" rel="noopener noreferrer nofollow noopener noreferrer" target="_blank" style="color: #005a95; text-decoration: none; cursor: pointer; margin: 0px;"><span style="color: #0c64c0;">Events Calendar</span></a></span></span></span></span></p>
<p class="x_x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;</span></b><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
<p style="margin: 0px; color: #000000; font-family: calibri, arial, helvetica, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; background-color: #ffffff;"></p>
<p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">As a community, we are very happy to have you join our mission to change the world with kindness and actions. Your ability and willingness to be a change agent mean a lot to your city! We can't wait to meet you in person soon.&nbsp;</span><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
<p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;</span></b><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
<p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black; background: white;">Sincerely,<br /><i><span id="DWT169" class="ZmSearchResult" style="background-color: #fffec4;">Munther</span><span>&nbsp;</span>and the STCP Leadership Team</i></span><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;</span></b></p>
</div>
<div id="6997eb98-a5ab-4657-b8d4-27050949d0e4">
<table width="500" cellspacing="0" cellpadding="0" border="0">
<tbody>
<tr style="font-size: 1px;"></tr>
</tbody>
</table>
<div>
<table width="500" cellspacing="0" cellpadding="0" border="0">
<tbody>
<tr>
<td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
</tr>
</tbody>
</table>
</div>
</div>`}

const remindTemplate =() => {
    return `Insert your HTML code here !`}

const eventSubject =() => {
    return `Insert your subject title here !`
}

const eventTemplate =() => {
    return `Insert your HTML code here !`}

//////////////////////////////////////////////////////////////
// FUNCTIONS

const sendReminderBcc = async (remindUsers)=> {

    const transporter = nodemailer.createTransport( {
        service:"hotmail",
        auth: {
            user: "stcpdev@outlook.com",
            pass: "st-dev-cp"
        }
    });

    const options = {
        from: "stcpdev@outlook.com",
        to:"stcpdev@outlook.com",
        bcc:remindUsers.join(),
        subject: "Welcome to the SAVE Program",
        html: remindTemplate()
    };

    transporter.sendMail(options, function(err,info) {
        if (err){
            console.log(err);
            return;
        }
        console.log("Sent: "+info.response);
    });
}

const sendAccepted1 = async (acceptedUser)=> {

    const transporter = nodemailer.createTransport( {
        service:"hotmail",
        auth: {
            user: "stcpsender1@outlook.com",
            pass: "st-sender1-cp"
        }
    });

    const options = {
        from: "stcpsender1@outlook.com",
        to: acceptedUser[2],
        cc:"stcpdev@outlook.com",
        subject: "Welcome to the SAVE Program",
        html: acceptTemplate(acceptedUser)
    };

    transporter.sendMail(options, function(err,info) {
        if (err){
            console.log(err);
            return;
        }
        console.log("Sent: "+info.response);
    });
}

const sendAccepted2 = async (acceptedUser)=> {

    const transporter = nodemailer.createTransport( {
        service:"hotmail",
        auth: {
            user: "stcpsender2@outlook.com",
            pass: "st-sender2-cp"
        }
    });

    const options = {
        from: "stcpsender2@outlook.com",
        to: acceptedUser[2],
        cc:"stcpdev@outlook.com",
        subject: "Welcome to the SAVE Program",
        html: acceptTemplate(acceptedUser)
    };

    transporter.sendMail(options, function(err,info) {
        if (err){
            console.log(err);
            return;
        }
        console.log("Sent: "+info.response);
    });
}

const sendAccepted3 = async (acceptedUser)=> {

    const transporter = nodemailer.createTransport( {
        service:"hotmail",
        auth: {
            user: "stcpsender3@outlook.com",
            pass: "st-sender3-cp"
        }
    });

    const options = {
        from: "stcpsender3@outlook.com",
        to: acceptedUser[2],
        cc:"stcpdev@outlook.com",
        subject: "Welcome to the SAVE Program",
        html: acceptTemplate(acceptedUser)
    };

    transporter.sendMail(options, function(err,info) {
        if (err){
            console.log(err);
            return;
        }
        console.log("Sent: "+info.response);
    });
}

const sendAccepted = async (acceptedUsers) => {
    if (acceptedUsers.length >3) {
        console.error("You've accepted more than 3 applicants. Please unselect some of them.")
    }
    else {
        switch (acceptedUsers.length) {
            case 0:
                console.log("0 accepted recipients selected.");
                break;
            case 1:
                sendAccepted1(acceptedUsers[0]);
                console.log("Mail sent to 1 accepted recipient.");
                break;
            case 2:
                await sendAccepted1(acceptedUsers[0]);
                await sendAccepted2(acceptedUsers[1]);
                console.log("Mail sent to 2 accepted recipients.");
                break;
            case 3:
                await sendAccepted1(acceptedUsers[0]);
                await sendAccepted2(acceptedUsers[1]);
                await sendAccepted3(acceptedUsers[2]);
                console.log("Mail sent to 3 accepted recipients.");
                break;
            default:
                console.error("An error has occured. Please unselect some applicants.")
        }
    }
}

//"subject" argument is a String type
const eventAccepted = async(acceptedUsers) => {
    const transporter = nodemailer.createTransport( {
        service:"hotmail",
        auth: {
            user: "stcpdev@outlook.com",
            pass: "st-dev-cp"
        }
    });

    const options = {
        from: "stcpdev@outlook.com",
        to:"stcpdev@outlook.com",
        bcc:acceptedUsers.join(),
        subject: eventSubject(),
        html: eventTemplate()
    };

    transporter.sendMail(options, function(err,info) {
        if (err){
            console.log(err);
            return;
        }
        console.log("Sent: "+info.response);
    });
}

//////////////////////////////////////////////////////////////
// EXPERIMENTAL FUNCTIONS
const sendAcceptedCci = async (acceptedUsers)=> {

    const transporter = nodemailer.createTransport( {
        service:"hotmail",
        auth: {
            user: "stcpdev@outlook.com",
            pass: "st-dev-cp"
        }
    });

    const options = {
        from: "stcpdev@outlook.com",
        to:"stcpdev@outlook.com",
        bcc:acceptedUsers.join(),
        subject: "Welcome to the SAVE Program",
        html: `<div>
        <p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">Dear volunteer,&nbsp;&nbsp;</span><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
        <p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;</span></b><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
        <p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">I am<span>&nbsp;</span><span id="DWT165" class="ZmSearchResult" style="background-color: #fffec4;">Munther</span><span>&nbsp;</span>Elsaddig, the SAVE Program Manager at Serve The City Paris (STCP). I&rsquo;m writing to welcome you to the membership program and to help you get started!<b>&nbsp;</b></span><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
        <p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">First of all, thank you for your donation to be a member. Your donation is a tax-deductible donation, and it will support our programs for the refugee and asylum seeker community and the homeless in Paris.&nbsp;<b>&nbsp;</b></span><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
        <p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
        <p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">We are very excited for you to begin the SAVE Program. Just follow the following steps&nbsp;<b><i>(</i></b></span><b><i><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0; background: white;">1. Telegram</span></i></b><b><i><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">,</span></i></b><b><i><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;&nbsp;</span></i></b><b><i><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0b5394;">2. Basic Volunteer Training and other workshops)</span></i></b><b><i><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;</span></i></b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">and you will get the hang of everything in no time. Below is where to start:<br /><b>&nbsp;</b></span><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
        <p class="x_xmsolistparagraph" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">1.</span></b><b><span lang="EN-GB" style="border: 1pt none; font-size: 7pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></b><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">Telegram&nbsp;</span></b><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: #0c64c0;">&nbsp;</span></p>
        <p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">Please join our Telegram group to get messages and updates on all STCP volunteering events and activities. Here's the link:</span><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">&nbsp;</span><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #741b47;"><span class="x_MsoHyperlink" style="margin: 0px; color: blue; text-decoration: underline;"><span style="margin: 0px; color: #741b47;"><span class="Object" role="link" id="OBJ_PREFIX_DWT166_com_zimbra_url" style="color: #005a95; text-decoration: none; cursor: pointer;"><a href="https://t.me/joinchat/RmDV1gXvGdVTOdMM" rel="noopener noreferrer nofollow noopener noreferrer" target="_blank" style="color: #005a95; text-decoration: none; cursor: pointer; margin: 0px;"><span style="margin: 0px; color: #0c64c0;">https://t.me/joinchat/RmDV1gXvGdVTOdMM</span></a></span></span></span></span><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">&nbsp;</span></b><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: #0c64c0;">&nbsp;</span></p>
        <p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;</span><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
        <p class="x_xmsolistparagraph" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"></p>
        <p class="x_MsoNormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;"></span></p>
        <p class="x_xmsolistparagraph" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">2.</span></b><b><span lang="EN-GB" style="border: 1pt none; font-size: 7pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></b><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: #0c64c0;">Basic Volunteer Training and other workshops&nbsp;</span></b><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: #0c64c0;">&nbsp;</span></p>
        <p class="x_x_MsoNormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;"><span style="font-size: 14.6667px; margin: 0px; background-color: #ffffff; display: inline !important;">Being a SAVE member, you&nbsp;can participate in those workshops especially targeted to SAVE participants.&nbsp;</span><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; margin: 0px; padding: 0cm; background-color: #ffffff;">You can discover all our upcoming volunteering activities and workshops on our</span><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; margin: 0px; padding: 0cm; background-color: #ffffff; color: #0c64c0;">&nbsp;</span><span class="x_x_x_x_MsoHyperlink" style="font-family: 'times new roman', serif; margin: 0px; color: blue; text-decoration: underline; background-color: #ffffff;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm;"><span class="Object" role="link" id="OBJ_PREFIX_DWT167_com_zimbra_url" style="color: #005a95; text-decoration: none; cursor: pointer;"><a href="https://www.servethecity.paris/current-volunteer-events/" rel="noopener noreferrer nofollow noopener noreferrer" target="_blank" style="color: #005a95; text-decoration: none; cursor: pointer; margin: 0px;"><span style="color: #0c64c0;">Events Calendar</span></a></span></span></span></span></p>
        <p class="x_x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;</span></b><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
        <p style="margin: 0px; color: #000000; font-family: calibri, arial, helvetica, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; background-color: #ffffff;"></p>
        <p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">As a community, we are very happy to have you join our mission to change the world with kindness and actions. Your ability and willingness to be a change agent mean a lot to your city! We can't wait to meet you in person soon.&nbsp;</span><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
        <p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;</span></b><span lang="EN-GB" style="font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; color: black;">&nbsp;</span></p>
        <p class="x_xmsonormal" style="margin: 0px; color: #000000; font-size: 12pt; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: 'times new roman', serif; background: white;"><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black; background: white;">Sincerely,<br /><i><span id="DWT169" class="ZmSearchResult" style="background-color: #fffec4;">Munther</span><span>&nbsp;</span>and the STCP Leadership Team</i></span><b><span lang="EN-GB" style="border: 1pt none; font-size: 11pt; font-family: calibri, sans-serif; margin: 0px; padding: 0cm; color: black;">&nbsp;</span></b></p>
        </div>
        <div id="6997eb98-a5ab-4657-b8d4-27050949d0e4">
        <table width="500" cellspacing="0" cellpadding="0" border="0">
        <tbody>
        <tr style="font-size: 1px;"></tr>
        </tbody>
        </table>
        <div>
        <table width="500" cellspacing="0" cellpadding="0" border="0">
        <tbody>
        <tr>
        <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>`
    };

    transporter.sendMail(options, function(err,info) {
        if (err){
            console.log(err);
            return;
        }
        console.log("Sent: "+info.response);
    });
}

//////////////////////////////////////////////////////////////
// MODULE EXPORTATION
module.exports = {
    sendAccepted:sendAccepted,
    sendAccepted1:sendAccepted1,
    sendAccepted2:sendAccepted2,
    sendAccepted3:sendAccepted3,
    sendAcceptedCci:sendAcceptedCci,
    sendReminderBcc:sendReminderBcc,
    eventAccepted:eventAccepted
};
