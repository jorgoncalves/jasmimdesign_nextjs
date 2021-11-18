import { createClient } from 'contentful';

export async function fetchEntry(param: string) {
    try {
        const client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID!,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
        });
        const entry = await client.getEntry(param);

        return entry.fields;
    } catch (error) {
        if (error instanceof Error)
            throw new Error(error.message);
        else throw new Error(`Something went wrong: ${error}`);
    }
}

export async function fetchAsset(param: string) {
    try {
        const client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID!,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
        });
        const entry = await client.getAsset(param);
        return entry.fields;
    } catch (error) {
        if (error instanceof Error)
            throw new Error(error.message);
        else throw new Error(`Something went wrong: ${error}`);
    }
}

export async function fetchContentType(param: string) {
    try {
        const client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID!,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
        });
        const entry = await client.getContentType(param);

        return entry;
    } catch (error) {
        if (error instanceof Error)
            throw new Error(error.message);
        else throw new Error(`Something went wrong: ${error}`);
    }
}
