import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
        resources[0...6]->{
          title,
          _id,
          appLink,
          "image": poster.asset->url,
          slug,
          views,
          category
        }
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        appLink,
        "image": poster.asset->url,
         slug,
         category,
         views
      }`
    );
    return resources;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailResources = async (params: { id: string }) => {
  const { id } = params;
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resource" && _id == "${id}"]{
          title,
          _id,
          appLink,
          "image": poster.asset->url,
          slug,
          views,
          category
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};
