export interface SitemapItem {
    loc: string;
    lastmod?: string;
}
export interface CreateSitemapIndexOptions {
    filePath: string | undefined;
    sitemaps: SitemapItem[];
}
export declare function createSitemapIndex({ filePath, sitemaps }: CreateSitemapIndexOptions): string;
