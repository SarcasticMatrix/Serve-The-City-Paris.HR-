const { NotionClient } = require('@notionhq/client').Client;

const notion = new NotionClient({ auth: process.env.NOTION_API_KEY });

(async () => {
  const databaseId = 'c7ea75ce14a243ecb734107ff94dbeff';
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'Accept ?',
          select: {
            equals: "Accepted",
          },
        },
      ],
    },
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'ascending',
      },
    ],
  });
  console.log(response);
})();