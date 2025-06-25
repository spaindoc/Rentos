import { client, urlFor } from "./sanity";
const getHeroData = async () => {
  const query = `*[_type == "heroSection"][0]{
    statBlocks[]{ value, label{en, uk}, description{en, uk} },
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
  const query = `*[_type == "newsItem"] | order(date desc){
    _id,
    caption{en, uk},
    image,
    date,
    link
  }`;
  const data = await client.fetch(query);

  const newsWithUrls = data.map((news) => {
    const formattedDate = news.date
      ? new Date(news.date).toLocaleDateString("uk-UA")
      : null;

    return {
      ...news,
      date: formattedDate,
      imageUrl: news.image ? urlFor(news.image).url() : null,
    };
  });

  return newsWithUrls;
};

const getAboutData = async () => {
  const query = `*[_type == "aboutSection"][0]{
  title{ en, uk },
  image,
  introBlock {
    text{ en, uk },
    items[]{ en, uk }
  },
  part2{ en, uk },
  objects{ en, uk }
}`;

  const data = await client.fetch(query);

  return {
    ...data,
    imageUrl: data.image ? urlFor(data.image).url() : null,
    imageAlt: data.image?.alt || null,
  };
};

const getPhilosophyData = async () => {
  const query = `*[_type == "companyPhilosophy"][0]{
    block1 { title { en, uk }, subtitle { en, uk } },
    block2 { title { en, uk }, subtitle { en, uk } },
    block3 { title { en, uk }, items[] { en, uk } }
  }`;

  return await client.fetch(query);
};

const getServicesData = async () => {
  const query = `*[_type == "services"][0]{
    items[]{
      title { en, uk },
      text { en, uk }
    }
  }`;
  return await client.fetch(query);
};

export {
  getHeroData,
  getAboutData,
  getPhilosophyData,
  getProjectsData,
  getNewsData,
  getServicesData,
};
