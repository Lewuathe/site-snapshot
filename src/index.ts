import {Crawer} from "./crawer";
import {readFileSync} from "fs";
import * as program from 'commander';

program.version("0.0.1")
	.option('-s, --sitefile [sitefile]', "The path to site.json file", (val) => val.toString())
	.parse(process.argv);

let json = JSON.parse(readFileSync(program.sitefile).toString());
let c = new Crawer(json["baseUrl"]);

c.crawl(json);
