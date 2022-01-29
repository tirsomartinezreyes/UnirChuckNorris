import fetch from 'node-fetch';

    fetch('http://api.icndb.com/jokes/random/10')
    .then(response => response.json())
    .then(response => {
        response.value.forEach(element => {
            console.log(`${element.id}: ${element.joke}`)
        });
    });