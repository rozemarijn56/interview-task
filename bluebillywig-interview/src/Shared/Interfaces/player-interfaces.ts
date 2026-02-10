export interface LoadParams {
  clipId?: number;
  cliplistId?: number;
  xmlUrl?: string;
  seekTo?: number;
  autoPlay?: boolean;
  token?: string;
  useSession?: boolean;
}

export interface Subtitle {
  id: number;
  languageid: number;
  name: string;
  languagename: string;
  default: boolean;
  isocode: string;
  status: string;
  parsedData: any[];
}

export interface RelatedClip {
  id: string;
  title?: string;
  type?: string;
  mediatype?: string;
  length?: number;
  sourcetype?: string;
  deeplink?: string;
  gendeeplink?: string;
}

export interface Logo {
  position: string;
  url: string;
  src: string;
  id: string;
}
