export interface ContentfullAsset {
  title: string;
  file: {
    url: string;
    details: { size: number; image: { width: number; height: number } };
    fileName: string;
    contentType: string;
  };
}
