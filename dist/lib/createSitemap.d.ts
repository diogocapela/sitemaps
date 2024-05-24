type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
export interface UrlItem {
    loc: string;
    lastmod?: string;
    changefreq?: ChangeFreq | string;
    priority?: number;
}
export interface CreateSitemapOptions {
    filePath: string | undefined;
    urls: UrlItem[];
}
export declare function createSitemap({ filePath, urls }: CreateSitemapOptions): string;
export {};
