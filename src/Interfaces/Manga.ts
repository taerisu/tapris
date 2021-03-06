// https://github.com/DjDeveloperr/Manga/blob/main/src/types.ts

export const USER_AGENT =
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0";

export const BASE_URL = "https://manganato.com";
export const READ_BASE_URL = "https://readmanganato.com";

export interface RecentMangaChapter {
	chapter: number;
	ago: string;
}

export interface RecentManga {
	id: string;
	name: string;
	url: string;
	author: string;
	thumbnail: string;
	chapters: RecentMangaChapter[];
}

export interface PopularManga {
	id: string;
	name: string;
	url: string;
	thumbnail: string;
	chapter: number;
}

export interface Home {
	popular: PopularManga[];
	recent: RecentManga[];
}

export interface SearchResult {
	id: string;
	internalId: string;
	idEncoded: string;
	name: string;
	nameUnsigned: string;
	lastChapter: string;
	thumbnail: string;
	author: string;
	url: string;
}

export interface Manga {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
	authors: string;
	status: string;
	genres: string[];
	lastUpdated: string;
	views: number;
	rating: string;
	chapters: MangaChapter[];
}

export interface MangaChapter {
	id: string;
	title: string;
	// chapter: number;
	// vol: number;
	views: number;
	uploaded: string;
}

export interface ChapterPage {
	number: number;
	title: string;
	url: string;
}
