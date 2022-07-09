// const teamRoster = require('./data.json');
// import teamRoster from './data.json';
// var teamRoster = JSON.parse('data');
var teamRoster;
// fetch('./data.json')
//     .then(res => res.json())
//     .then(data => {
//         teamRoster = data;
//         console.log(data);
//     })
// teamRoster = JSON.parse(data)
// var teamRoster = data;
$.getJSON('./data.json', function (result) {
    teamRoster = result;
    // teamRoster = Object.entries(teamRoster);
    console.log(typeof teamRoster);
    // console.log(Object.entries(teamRoster));
    // console.log(length(teamRoster))
    populatePage();
})

var managerEl = $('#managerEl');
var teamEl = $('#teamEl');
var element = teamEl;


// console.log(teamRoster);
function populatePage() {
    for (person of teamRoster) {
        if (person.role === 'Manager') {
            element = managerEl;
        }
        console.log(person, 'sdfsd');
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
    };
};