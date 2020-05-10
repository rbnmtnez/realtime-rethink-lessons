# realtime-rethink-lessons
Forked project. Contains lessons for a pluralsight course on realtime socket development with React, Socket.io, and RethinkDB.

Lessons exercises from 1 to 9 are resolved in its folder.

## Requirements
- Yarn
- RethinkDB
- Follow the author course on pluralsight: https://app.pluralsight.com/library/courses/react-socketio-rethinkdb-building-real-time-apps

### RethinkDB configuration on Windows
The easiest way to follow the course on Windows is to install RethinkDB in a docker container. To do so, just follow this tutorial: https://docs.docker.com/kitematic/rethinkdb-dev-database/

The exercises have the port 32772 set in order to work that way.
Your Kitematic config should be this:

![Kitematic RethinkDB config](https://raw.githubusercontent.com/rbnmtnez/realtime-rethink-lessons/master/config/kitematic_rethinkdb.png "Kitematic RethinkDB config")

Access http://localhost:32773 to launch RethinkDB administration panel


