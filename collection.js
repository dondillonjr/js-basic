
/* collection example */
var collection = 
{
    "123" : {
        "album": "Stepping Out",
        "artist": "Slave",
        "color": ["white", "black"]
    },

    "456" : {
        "album": "Golden"
    },

    "789" : {
        "album": "1999",
        "artist": "Prince",
        "color": ["red", "purple"]
    },
}

function updateRecords( id, prop, value)
{
    if ( value  === "" )
    {
        delete collection[id][prop];
    }
    else if ( prop === "color" )
    {
        collection[id][prop] = collection[id][prop] || [];
        /*** push - adds a new member to array */
        collection[id][prop].push(value);
    }
    else{ /* entered if artist does not exist */
        collection[id][prop] = value;
    }
    return collection;
}

/**************** MAIN *******************/
var collectionCopy = JSON.parse( JSON.stringify(collection) );

updateRecords(789, "color", "test");
console.log( updateRecords(456, "artist", "Maxwell") );