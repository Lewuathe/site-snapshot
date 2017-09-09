site-snapshot [![npm](https://img.shields.io/npm/v/site-snapshot.svg)]()
===

site-snapshot is a tool to capture the webpage while crawling specified links of the page.

[![NPM](https://nodei.co/npm/site-snapshot.png)](https://nodei.co/npm/site-snapshot/)

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

Snapshot is created in `index` directory in this case.

```
$ tree index
index
├── index.html.pdf
└── menu
    ├── menu-about.pdf
    ├── menu-contact.pdf
    └── menu-writing.pdf

1 directory, 4 files
```


# License

[MIT License](https://opensource.org/licenses/MIT)
