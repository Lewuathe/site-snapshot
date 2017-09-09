import {Crawer} from "./crawer";
import {readFileSync} from "fs";
import * as pack from '../package.json';
import * as program from 'commander';

program.version(pack["version"])
  .option('-s, --sitefile [sitefile]', "The path to site.json file", (val) => val.toString())
  .parse(process.argv);

let json = JSON.parse(readFileSync(program.sitefile).toString());
let c = new Crawer(json["baseUrl"]);

c.crawl(json);
