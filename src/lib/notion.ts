import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAboutContent = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_ABOUT_DB_ID || '',
  });
  return response.results[0];
};

export const getBlogPosts = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID || '',
    sorts: [{ property: 'Date', direction: 'descending' }],
  });
  return response.results;
};

export const getServices = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_SERVICES_DB_ID || '',
  });
  return response.results;
};