interface ContentfullBase {
    image: ContentfullAsset;
    slug: string;
}
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

export interface ContentfullContactos extends ContentfullBase {
    images: [
        ContentfullAssetInEntry,
        ContentfullAssetInEntry,
        ContentfullAssetInEntry,
        ContentfullAssetInEntry
    ];
    heading: string;
    subHeading: string;
    subHeaderAlternative: string;
    button: string;
    labelMarketing: string;
    labelContacto: string;
}

export interface ContentfullSobreNos extends ContentfullBase {
    image: ContentfullAsset;
    content: {
        content: string;
        contentSignature: string;
        teamImage: ContentfullAssetInEntry;
    };
}

export interface ContentfullObrigado extends ContentfullBase {
    content: string;
}

export interface ContentfullPortfolio extends ContentfullBase {
    image: ContentfullAsset;
    imagesGroups: {
        id: string;
        name: string;
        type: 'Array' | 'slug';
        items?: [];
        images?: ContentfullAssetInEntry[];
    }[];
}
