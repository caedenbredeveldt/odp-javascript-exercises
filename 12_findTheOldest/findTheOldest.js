const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

const findTheOldest = function(people) {
    const oldest = people.reduce((oldestPerson, currentPerson) => {
        let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        let oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);;
        return oldestAge < currentAge ? currentPerson : oldestPerson;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
