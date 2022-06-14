export interface ZoraContent {
  url: string;
  size: string;
  mimeType: string;
  mediaEncoding: ZoraMediaEncoding;
}

export interface ZoraMediaEncoding {
  large: string;
  poster: string;
  preview: string;
  original: string;
  thumbnail: ZoraMediaEncoding;
}
