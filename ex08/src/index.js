var contacts = [
    {
    "firstName": "John",
    "lastName": "Doe",
    "number": "12365495208",
    "likes": ["C", "C++", "C#"]
    },
    {
    "firstName": "Jane",
    "lastName": "Doe",
    "number": "4568295761",
    "likes": ["Python", "Swift", "R"]
    },
    {
    "firstName": "Richard ",
    "lastName": "Roe",
    "number": "6938257149",
    "likes": ["React", "Angular", "Vue"]
    },
    {
    "firstName": "Jane",
    "lastName": "Roe",
    "number": "unknown",
    "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
    ];
    function lookUpProfile(name, prop){
    // Only change code below this line
    for (var i = 0; i < contacts.length; i += 1);{
        var contact = contacts[i];
        
        if(contact.firstName === name) {
            if (contact[prop] != undefined){
                    return contact[prop];
            }
        }
    }
        
    // Only change code above this line
    }
    console.log(lookUpProfile(name, prop)); // Change this line
    module.exports = lookUpProfile;
    