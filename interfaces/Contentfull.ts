export interface ContentfullAsset {
  title: string;
  file: {
    url: string;
    details: { size: number; image: { width: number; height: number } };
    fileName: string;
    contentType: string;
  };
}

export interface ContentfullAssetInEntry {
  sys: any;
  fields: {
    title: string;
    description?: string;
    file: {
      url: string;
      details: Object;
      fileName: string;
      contentType: string;
    };
  };
}

export interface ContentfullContactos {
  image: ContentfullAsset;
  slug: string;
  images: [ContentfullAssetInEntry, ContentfullAssetInEntry, ContentfullAssetInEntry, ContentfullAssetInEntry];
  heading: string;
  subHeading: string;
  button: string;
  labelMarketing:string;
  labelContacto:string;
}

export interface ContentfullSobreNos {
  image: ContentfullAsset;
  content: {
    content: string;
    contentSignature: string;
    teamImage: ContentfullAssetInEntry;
  };
}
