const util = require('util');
const fs = require('fs');

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv1 = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class Store {
  read() {
    return readFileAsync('db/db.json', 'utf8');
  }

  write(note) {
    
  }

  getNotes() {

    // read and return notes
  

      // If notes isn't an array or can't be turned into one, send back a new empty array
      
  }

  addNote(note) {
    // creat note object with validation
    

    // Add a unique id to the note using uuid package
    

    // Get all notes, add the new note, write all the updated notes, return the newNote
    
  }

  removeNote(id) {
    // Get all notes, remove the note with the given id, write the filtered notes
    
  }
}


// export
