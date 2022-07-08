const teamRoster = require('./index.js')

var managerEl = $('#managerEl');
var teamEl = $('#teamEl');
var element = teamEl;


console.log(teamRoster);

for (person of teamRoster) {
    if (person.role === 'Manager') {
        element = managerEl;
    }
    let tile = $('<div>');
    tile.append($('<h2>')).text(person.name);
    tile.append($('<h3>').text(person.role));
    tile.append($('<h4>').text('ID: ', person.id));
    tile.append($('<h4>').text('email: ', person.email));
    switch (person.role) {
        case 'Manager':
            tile.append($('<h4>').text('Office Number: ', person.officeNo));
            // break;
        case 'Engineer':
            tile.append($('<h4>').text('Github: ', person.github));
            // break;
        case 'Intern':
            tile.append($('<h4>').text('School: ', person.school));
    }
    element.append(tile);
    // Name , role, ID, email, office#/Github/school
}