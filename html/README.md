# html

## css-html linking, javascript-html linking, comments, doctype, html tags
<hr>

`<link>` - can be used to connect a css file to the html file
```html
<link rel="stylesheet" type="text/css" href="style.css">
```

`<script>` - can be used to connect a javascript file to the html file
```html
<script src="script.js"></script> 
```

- comment - used to label or describe part of a code
```html
<!-- this is a comment -->
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
## head, title, attributes, meta tag, viewport and page icon
<hr>

- `<head>` - provides additional information about the html page
```html
<head>
	<!-- code here -->
</head>
```

- `<title>` - sets the title of the html page
```html
<title>My First Page</title>
```

attributes - provide additional information about the element
```html
<p title="This is a tooltip">The weather today is fair</p>
```

meta - provides additional information about the web page
```html
<meta charset="UTF-8">
```

viewport - how the visible part of the web page should be sized
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```



page icon - displays a small icon near the page title
```html
<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
```

## body, heading, paragraph, lang attribute, boilerplate code
<hr>

`<body>` - contains html elements that are visible in the html page
```html
<body>
	<!-- code here -->
</body>
```

`<h1>` - display a heading with values 1 to 6
```html
<h1>Programming Notes</h1>
```

`<p>` - create a paragraph
```html
<p>This is a paragraph</p>
```

`lang` - specifies the language of the web page
```html
<html lang="en">
	<!-- code here -->
</html>
```

boilerplate code - code that is always added because it is usually needed for a program to work

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

## id and class attribute, bookmark, img tag, bold text
<hr>

`<img>` - image element
```html
<img src="images/cat_pic1.jpg" alt="cat" width="200" height="100">
```

id attribute - unique name of an html element used for modifying its style

class attribute - a group name which the element belongs to and is used for modifying the group's style

bookmark - when a web page is very big, specific portions of the page can be bookmarked for quick navigation

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

svg

form

button

input
