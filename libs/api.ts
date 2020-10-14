import axios from 'axios';
import { createClient } from 'contentful';

export async function fechtEntry(param: string) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
    });
    const entry = await client.getEntry(param);
    return entry.fields;
  } catch (error) {
    throw new Error(error);
  }
}

export async function fechtAsset(param: string) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
    });
    const entry = await client.getAsset(param);
    return entry.fields;
  } catch (error) {
    throw new Error(error);
  }
}
