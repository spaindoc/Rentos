import { client, urlFor } from "./sanity";
const getHeroData = async () => {
  const query = `*[_type == "heroSection"][0]{
    statBlocks[]{ value }
  }`;
  return await client.fetch(query);
};

const getProjectsData = async () => {
  const query = `*[_type == "project"]{
    _id,
    name{en, uk},
    description{en, uk},
    image,
    link
  }`;
  const data = await client.fetch(query);
  const projectsWithUrls = data.map((project) => {
    return {
      ...project,
      imageUrl: project.image ? urlFor(project.image).url() : null,
    };
  });
  return projectsWithUrls;
};

const getNewsData = async () => {
  const query = `*[_type == "newsItem"]{
    _id,
    caption{en, uk},
    image,
    date,
    link
  }`;
  const data = await client.fetch(query);
  const newsWithUrls = data.map((news) => {
    return {
      ...news,
      imageUrl: news.image ? urlFor(news.image).url() : null,
    };
  });
  return newsWithUrls;
};

export { getHeroData, getProjectsData, getNewsData };
