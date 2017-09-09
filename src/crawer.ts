import {URL} from 'url';
import {mkdirSync, existsSync} from 'fs';
import * as puppeteer from 'puppeteer';

export class Crawer {
	private baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	crawl(site: any) {
		(async () => {
			const browser = await puppeteer.launch();
			const page = await browser.newPage();

			await this.crawlInternal(page, `${this.baseUrl}/index.html`, site["children"], site["name"]);

		  browser.close();
		})();
	}

	/**
	  * Crawling the site recursively
		* selectors is a list of selectors of child pages.
		*/
	async crawlInternal(page: any, path: string, selectors: [string], dirname: string) {
		if (!existsSync(dirname)) {
			mkdirSync(dirname);
		}
		let url = new URL(path);
		await page.goto(path, {waitUntil: 'networkidle'});
		await page.pdf({path: `${dirname}/${url.pathname.slice(1).replace("/", "-")}.pdf`, format: 'A4'});
		if (selectors.length == 0) {
			return;
		}
		let items: [string] = await page.evaluate((sel) => {
			let ret = [];
			for (let item of document.querySelectorAll(sel)) {
				let href = item.getAttribute("href");
				ret.push(href);
			}
			return ret;
		}, selectors[0]["selector"]);

		for (let item of items) {
			console.log(`Capturing ${item}`);
			await this.crawlInternal(page, `${item}`, selectors[0]["children"], `${dirname}/${selectors[0]["name"]}`)
		}
	}
}
