# html

## comments and basic html tags (doctype, html, head and title tags)
<hr>

comment - used to label or describe parts of a code
```html
<!-- this is a comment -->
```

`<doctype>` - tells the browser the file is an html5 document
```html
<!DOCTYPE html>
```

`<html>` - html elements are placed inside the html tag
```html
<html>
	<!-- code block here -->
</html>
```

`<head>` - provides additional information about the html page
```html
<head>
	<!-- code here -->
</head>
```

`<title>` - sets the title of the html page
```html
<title>My First Page</title>
```

## meta, body, link tags, viewport and page icon
<hr>

meta

viewport

page icon - displays a small icon near the page title
```html
<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
```

`<body>` - contains html elements that are visible in the html page
```html
<body>
	<!-- code here -->
</body>
```

`<link>` - can be used to connect a css file to the html file
```html
<link rel="stylesheet" href="styles.css">
```

## heading, paragraph, attributes, lang attribute, boilerplate code
<hr>

`<h1>` - display a heading with values 1 to 6
```html
<h1>Programming Notes</h1>
```

`<p>` - create a paragraph
```html
<p>This is a paragraph</p>
```

attributes - provides additional information about the element
```html
<p title="This is a tooltip">The weather today is fair</p>
```

`lang` - specifies the language of the web page
```html
<html lang="en">
	<!-- code here -->
</html>
```

vs code -> new file -> save with a .html file extension & set language to html -> write ! -> press tab -> boilerplate code is generated

## urls, file path, link, _blank attribute, mailto
<hr>

relative address - a website address that is short since it is in the same domain

absolute address - a complete website address which usually points to an external site

relative path - a short file address where the file exists in the same or nearby location

absolute path - a complete file address where the file is located

`<a>` - create a link
```html
<a href="www.google.com">Google Link</a>
```

`_blank` - open the link in a new tab
```html
<a href="www.google.com" target="_blank">Google Link</a>
```

`mailto` - use the link to send an email
```html
<a href="mailto:zenferringson@gmail.com">Send an email to the link</a>
```

## bookmark, img tag, element id, element class, bold text
<hr>

`<img>` - image element
```html
<img src="images/cat_pic1.jpg" alt="cat" width="200" height="100">
```

bookmark - when a web page is very big, specific portions of the page can be bookmarked for quick navigation

element id - unique name of an html element used for modifying its style

element class - a group name where the element belongs to used for modifying their style

`<b>` - bold text
```html
<p>This is a <b>short</b> paragraph</p>
```

`<ul>` - used for lists without worrying about the order of items
```html
<ul>
	<!-- code here -->
</ul>
```

`<ol>` - used for lists with numbered items
```html
<ol>
	<!-- code here -->
</ol>
```

`<li>` - the item in a list
```html
<li>read a book</li>
```

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

form

button

input
