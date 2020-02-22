
## Lean Techniques Photo Album

### Developer: Mark Bentley

### Information
Technical showcase for Lean Techniques. The project was developed using Node.js and unit tests created with Chai and Mocha. 

## How to build the project
Install the latest version of npm and node js.

Run inside of the photo-album root directory
```
apt install npm
```

## How to run the project 
#### Option 1: *with npm link*
First create the symlink with npm link
```
npm link
```

View a list of photo ids and titles for given album id
```
photo-album - <albumid>

photo-album - 2
``` 

#### Option 2: *without npm link*
Navigate to the ../photo-album/bin/ directory

View a list of photo ids and titles for given album id
```
node index.js photo-album <albumid>

node index.js photo-album 2
``` 



## How to run unit tests

Navigate to the ../photo-album/ directory
```
npm test
```
