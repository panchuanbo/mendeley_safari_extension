# mendeley_safari_extension
didn't like the favorites bar, so added a small little extension for Mendeley.

Essentially does what the bookmark bar does, which is to call the following:
`document.getElementsByTagName("body")[0].appendChild(document.createElement("script")).setAttribute("src","https://static.mendeley.com/bin/extensions/bookmarklet.js");`

Built through Extension Builder.
