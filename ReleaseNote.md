1.1.4 (12/10/2019)
-----
* Bump the lodash version to 4.17.15 to eliminate vulnerabilities.

1.1.3 (10/22/2019)
-----
+ Minor bug fixes on palet reload -- palet states should not be cached.

1.1.2 (09/04/2019)
-----
+ Fixed a bug when the client side embeded a palet whose endpoint ID can't be properly recognized.
+ Improved error handling

1.1.1
-----
+ Fixed a bug when a palet with endpoint ID is reloaded from the client side.

1.1.0
-----
+ A new feature to extend existing CSS classes.

1.0.4
-----
+ github is complaining about the security vulnerabilities regarding the 'server-static' module. Rewrite some code to avoid using that module.

1.0.0
-----
+ The first official release.
+ The core engine has been completely written.
+ HTML code generation has been switched from string templates to node.js modules.
+ NOT backward compatible with previous versions.

0.12.3
------
+ Fixed a bug which would cause problems when paring URIs with ID.

0.12.4
------
+ allow the main block to has its own id, and to become searchable.
+ continuing code clean up.

0.12.3
------
+ allow web page path to include uni-code characters.

0.12.2
------
+ Improved the SSE implementation.

0.12.0
------
+ For a HTML block, a HTML file (or fragment) was needed to markup the contents. In this release, a markdown file can be used instead of a HTML file for the same purpose.

+ A trial implementation of Server-Sent Events (SSE) was provided.

0.11.3
------
+ Just keeping dependencies up to date.

0.11.2
------
+ Minor bug fix in the Design Console (failed to create a new website).

0.11.1
------
+ A new print() function to print out HTML codes inside templates.
+ Input parameters to blocks are now verified.

0.11.0
------
+ Simplified the syntax to invoke block or wcomp.
+ Allowing input parameters to a block to be explicitly specified. This will make block programming more managable.
+ The design console has been enhanced.

0.10.7
------
+ Added an access protection scheme. You can easily protect the whole or part of the website from unauthorized access.
+ The block controller gets a new function: getParent() which can be used to get the controller of the parent block.
+ A "noWrapper" option is supported to display a wcomp without the additional wrapper.
+ Properly handling JSON inputs (when using the HTTP POST).

0.10.6
------
+ Fixed a bug in multi-lingual support.
+ Fixed a bug in creating a new layout using the design console.

0.10.5
------
+ Minor bug fixes.
+ Test cases were rewritten with Expresso.

0.10.4
------
+ If you run multiple websites on coServ, static files (such as images) of the same name from different websites can get confused. Now you can prepend '/$website_code_name/cont' to the file path to distinguish them.
+ wFront.js is the main (front-end) controller. This file can be updated with new coServ release, so it's better to be served from coServ than from websites (which may use older versions). This is enforced in this release.
+ Fixed an obvious bug in coServ.js which cause coServ failed to start.

0.10.3
------
+ Make coServ ready to deploy to Heroku right out of box.
+ The node-sass module is removed out of the default modules. If you want coServ to compile SASS automatically, you can install the node-sass module by yourself.
+ The "region" feature is officially removed.

0.10.2
------
+ The server core has been shrunk to run even faster.
+ When a new website is created with the design console, it can be properly initiated without having to restart the coServ server.
+ Fixed bugs when dynamically embedding blocks.
+ fixed bugs in creating new layouts (in the design console).

0.10.1
------
+ Nested dynamic block loading (by ctrl.reload()) now works.
+ Change the editor theme to a dark one.

0.10.0
------
+ Allowed file upload. Previously, file uploads were all directed to the COIMOTION API services. Now websites on coServ can receive their own file uploads.
+ The website file structure has been slightly changed. Now each website can has its own file directory (websites directory were grouped under the same web directory in the previous releases).
+ A new feature 'wcomp' is introduced while 'region' is deprecated.
+ The web design console now can export & import websites.
+ When creating a new website, there are a few templates to choose from.
+ The "region" feature is deprecated. It would still work, but not recommended. The "region" feature may be completely removed in teh v1.0 release.

0.9.10
------
+ The web design console now can automatically make block creation/deletion effective without restarting the coServ server.
+ Fixed a problem that web themes cannot be properly matched when running multiple websites on a server.
+ Make the demo work again.
+ Clean up some UI glitches in the design console.

0.9.9
-----
+ The major addition to this release is the new "website design console" which is a web interface to manage/design websites running on coServ.
+ Cleaned up website templates.
+ Fixed the block reload problem.
+ Fixed bugs in cli/AddSite and cli/AddBlock.
+ A bunch of bug fixes.

0.9.8
-----
+ Fixed a bug when passing parameters to embedded blocks.
+ Allowed page description to be specified in the siteURI.json file.
+ cli/addPage renamed to cli/addBlock. Also, addBlock will not overwrite the existing block.
+ A bunch of minor bug fixes.

0.9.7
-----
+ Lots of codes have been rewritten and cleaned up. This release can be considered as the release candidate of verion 1.0.
+ We're also starting to add test cases to improve the code quality.

0.9.6
-----
+ Added support for server side redirect.

0.9.5
-----
+ Upgraded dependencies to work with the latest node version.

0.9.4
------
+ Fixed a bug in block reload problem which would cause __.getCtrl() fail to work properly.

0.9.3
------
+ Using gulp.js to support live reload.
+ Fixed a block reload problem when reloading a block, event handlers of a block would lost.
+ Fixed a problem that block include files cannot be loaded when the block include file (.inc) is created on Windows.
+ Fixed a bug that coServ can't pickup a web theme based on the client device.
+ Now the server port and http max-sockets can be specified in the config.json file.

0.9.2
------
+ Added server-side device detection capabilities.
+ Fixed the problem that cli/AddSite and cli/AddPage would not create on the relocated www directory.

0.9.1
------
+ Fixed a bug which would cause JS and CSS templates failed to read multi-lingual phrases.

0.9.0
------
+ Introduce JASS.

0.8.9
------
+ The 'www' path is now configurable.
+ Fix bugs about some multi-hosting problems.
+ Fix some path problems when running on Windows.

0.8.8
------
+ Support SASS with server-side automatic compilation.
+ Replaced all fs.readFileSync() calls with fs.readFile() for performance improvement.
+ Added blogs to the demo. Two themes are available to display contents stored in COIMOTION.
+ Fixed bugs in CSS aggregation. Key-frames and selector groups failed to work previously.


0.8.7
------
+ Added a shared block 'editor': to be invoked by websites to provide page editing capabilities.
+ An example to utilize the COIMOTION BaaS was added to the demo app.
+ A few bug fixes including problems connecting to BaaS services.


0.8.6:
------
+ Added command line interfaces (CLI) to
        1. add websites to coServ
        2. add new pages to a website.
+ Release Date: 5/29/2014


0.8.5:
------
+ Changed how a local module is invoked. The run() method now will take a second parameter which is
    a callback function. A local module calls the provided callback function to notify coServ that
    its job has done.
+ Bug fixes to help coServ better deal with more content types (not just JSON).
+ Fixed a bug in uploader. The bug could cause coServ fail to upload files to the COIMOTION API engine.
+ A new demo is included in this release. The old demo is still around. If you want to run the old demo,
    try http://localhost:8080. You can also modify the www/sites.json file to bring back the old demo.


0.8.0:
------
+ The first public release.
