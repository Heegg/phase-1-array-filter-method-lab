// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function findMatching(drivers, attribute) {
//     return drivers.filter(function (driver) { return driver.toLowerCase() === attribute.toLowerCase() })
//   }

// function fuzzyMatch(drivers, attribute) {
//     return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
//   }
  
// function matchName(drivers, argument) {
//     return drivers.filter(function (driver) { return driver.name === argument })
//   }


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const argument = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, string) {
    const result = drivers.filter(driversName => driversName.toLowerCase() === string.toLowerCase())
    return result
    }

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(driversName => driversName.startsWith(string))
    return result
}

function matchName(drivers, argument) {
   const result = drivers.filter(driversName => driversName.name === argument)
   return result
}