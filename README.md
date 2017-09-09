site-snapshot
===

site-snapshot is a tool to capture the webpage while crawling specified links of the page.

# Install

```
$ npm install -g site-snapshot
```

# Usage

```
$ siteshot --help

  Usage: siteshot [options]


  Options:

    -V, --version              output the version number
    -s, --sitefile [sitefile]  The path to site.json file
    -h, --help
```

# site.json

site-snapshot need to receive a json file which specifies the path to be crawled. The format of the file is here.

```
{
	"name": "index",
	"selector": null,
	"baseUrl": "http://www.lewuathe.com",
	"children": [
		{
			"name": "menu",
			"selector": ".element",
			"children": []
		}
	]
}
```

With this file, site-snapshot tries to crawl recursively.

1. Capture root page
2. Capture child pages specified by selector in children object


# License

[MIT License](https://opensource.org/licenses/MIT)
