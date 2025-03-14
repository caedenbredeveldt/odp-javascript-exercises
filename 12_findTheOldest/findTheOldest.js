const findTheOldest = function(people) {
    const date = new Date();
    const currYear = date.getFullYear(); 

    const oldest = people.reduce((oldestPerson, person) => {
        let currentAge = (person.yearOfDeath === undefined ? currYear : person.yearOfDeath) -person.yearOfBirth;
        let oldestAge = (oldestPerson.yearOfDeath === undefined ? currYear : oldestPerson.yearOfDeath) -oldestPerson.yearOfBirth;
        return oldestAge <= currentAge ? person : oldestPerson;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
