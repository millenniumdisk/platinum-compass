# HTML

## section 1 - external css/javascript, doctype, html, head and body tags
<hr>

- external css/javascript
	- `<link>` - can be used to connect a css file to the html file when placed inside `<head>`
	```html
	<link rel="stylesheet" type="text/css" href="style.css">
	```
	- `<script>` - can be used to connect a javascript file to the html file when placed inside `<body>` but at the very bottom part to let html elements load first then execute the javascript file
	```html
	<script src="script.js"></script> 
	```
- `<head>` - provides additional information about the html page
```html
<head>
	<!-- code here -->
</head>
```
- `<doctype>` - tells the browser the file is an html5 document
```html
<!DOCTYPE html>
```
- `<html>` - html elements are placed inside the html tag
```html
<html>
	<!-- code block here -->
</html>
```
- `<body>` - contains html elements that are visible in the html page
```html
<body>
	<!-- code here -->
</body>
```
summary
```html
<!-- p1 simple starting html code -->
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
		<script src="script.js"></script>
	</body>
</html>
```

## section 2 - comments, title, meta tags, attributes and viewport
<hr>

- comment - used to label or describe part of a code
```html
<!-- this is a comment -->
```
- `<title>` - sets the title of the html page
```html
<title>My First Page</title>
```
- attributes - provide additional information about the element
```html
<p title="This is a tooltip">The weather today is fair</p>
```
- meta - provides additional information about the web page
```html
<meta charset="UTF-8">
```
- viewport - how the visible part of the web page should be sized
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
summary
```html
<!-- p2 html with charset, viewport and title -->
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Random Trivias</title>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
		<script src="script.js"></script>
	</body>
</html>
```

## section 3 - page icon, heading, paragraph, lang attribute and boilerplate code
<hr>

- page icon - displays a small icon near the page title
```html
<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
```
- `<h1>` - display a heading with values 1 to 6
```html
<h1>Programming Notes</h1>
```
- `<p>` - create a paragraph
```html
<p>This is a paragraph</p>
```
- `lang` - specifies the language of the web page
```html
<html lang="en">
	<!-- code here -->
</html>
```
- boilerplate code - code that is always added because it is usually needed for a program to work

vs code -> new file -> save with a .html file extension & set language to html -> write ! -> press tab -> boilerplate code is generated

summary
```html
<!-- p3 heading, paragraph, lang attribute -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Random Trivias</title>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
		<h1>Amazing TIL (Today I Learned)</h1>
		<p>This is a paragraph</p>
		<script src="script.js"></script>
	</body>
</html>
```

## section 4 - urls, file path, link, _blank attribute
<hr>

- url types
	- relative address - a website address that is short since it is in the same domain
	- absolute address - a complete website address which usually points to an external site
- file path types
	- relative path - a short file address where the file exists in the same or nearby location
	- absolute path - a complete file address where the file is located
- `<a>` - create a link
```html
<a href="www.google.com">Google Link</a>
```
- `_blank` - open the link in a new tab
```html
<a href="www.google.com" target="_blank">Google Link</a>
```

## section 5 - mailto, id and class attribute, bookmark, img tag
<hr>

- `mailto` - use the link to send an email
```html
<a href="mailto:zenferringson@gmail.com">Send an email to the link</a>
```
- `<img>` - image element
```html
<img src="images/cat_pic1.jpg" alt="cat" width="200" height="100">
```
- id attribute - unique name of an html element used for modifying its style
- class attribute - a group name which the element belongs to and is used for modifying the group's style
- bookmark - when a web page is very big, specific portions of the page can be bookmarked for quick navigation

## section 6 - bold text, unordered list, ordered list, list item, nested list

- `<b>` - bold text
```html
<p>This is a <b>short</b> paragraph</p>
```
- `<ul>` - used for lists without worrying about the order of items
```html
<ul>
	<!-- code here -->
</ul>
```
- `<ol>` - used for lists with numbered items
```html
<ol>
	<!-- code here -->
</ol>
```
- `<li>` - the item in a list and is placed inside `<ul>` or `<ol>`
```html
<li>read a book</li>
```
- nested list - a list inside a list




table

block

inline

div

header
nav
section
article
aside
footer

span

main

self-closing tags

put id attribute before bookmark

html entities

html symbols

svg

form

button

input
