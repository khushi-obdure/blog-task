export interface NewsItem {
    timestamp: string;
    title: string;
    snippet: string;
    images?: {
        thumbnail?: string;
        thumbnailProxied?: string;
    };
    hasSubnews?: boolean;
    newsUrl: string;
    publisher: string;
    subnews?: NewsItem[];
}

export interface SingleNewsCardProps {
    news: NewsItem;
    formatDate: (timestamp: string) => string;
}