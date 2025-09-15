export interface BlogResponse {
  errorCode: string | null;
  status: number;
  message: string;
  success: boolean;
  data: {
    status: string;
    items: Blog[];
  };
}

export interface Blog {
  timestamp?: string;
  title?: string;
  snippet?: string;
  images?: {
    thumbnail: string;
    thumbnailProxied: string;
  };
  subnews?: Subnews[];
  newsUrl?: string;
  publisher?: string;
}

export interface Subnews {
  timestamp?: string;
  title?: string;
  snippet?: string;
  images?: {
    thumbnail: string;
    thumbnailProxied: string;
  };
  newsUrl?: string;
  publisher?: string;
}
