# VideoFeed

# Installation
To use this project as is, first clone the repo from GitHub, then run:

$ cd VideoFeed/ <br>
$ npm install<br>
run: $ gulp - to create "dev" folder<br>

# Running localy

$ cd VideoFeed/server<br>
run: $ node server.js<br>
Open in browser: http://localhost:8088

<br>
Run watcher:<br>
$ cd VideoFeed<br>
$ gulp watch<br>
<br>
Run tests:<br>
Install Karma<br>
$ cd VideoFeed<br>
$ karma start<br>
<br>
# Build for production

$ cd VideoFeed/<br>
Open: "Gulpfile.js"<br>
Uncomment: //environments.current(production); <br>
run: $ gulp <br>
zip "release" folder<br>