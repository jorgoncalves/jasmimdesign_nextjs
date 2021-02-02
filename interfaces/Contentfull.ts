export interface ContentfullBase {
    image?: ContentfullAsset;
    logo_159x70?: ContentfullAsset;
    logo_522x230?: ContentfullAsset;
    slug?: string;
}

export interface LayoutProps extends ContentfullBase {
    children: any;
}
export interface ContentfullAsset {
    title: string;
    file: {
        url: string;
        details: {size: number; image: {width: number; height: number}};
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

export interface ContentfullLogos {
    jasmimLogo522x230: {sys: any; fields: ContentfullAsset};
    jasmimLogo159x70: {sys: any; fields: ContentfullAsset};
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
