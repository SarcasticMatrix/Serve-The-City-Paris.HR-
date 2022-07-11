const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
  const pageId = '23bccb09-6780-49ab-b32b-d3600e511f6f';
  const propertyId = "i%5Epr"
  const response = await notion.pages.properties.retrieve({ page_id: pageId, property_id: propertyId });
  console.log(response);
})();