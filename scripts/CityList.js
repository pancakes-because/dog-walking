
import { getWalkers } from "./database.js" 
import { getCities } from "./database.js"


const walkers = getWalkers()
const cities = getCities()  

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

/* First, define a function that will get all objects in the walkerCities array that are for the walker that was clicked on. It should return an array of all matching objects. */ 

/* The function needs the walker information, so define a parameter */ 
// we're naming the parameter "walker". 
/* Define an empty array to store all of the assignment objects */ 
// we're naming variable, that holds the array, "assignments". 
/* Iterate the array value of walkerCities. */ 
// use a for...of loop to loop through each item, or "assignment", in the "walkerCities" array
/* Check if the primary key of the walker equals the foreign key on the assignment */ 
// "walker.id" should be an individual walker's "id" 
// "assignment.walkerId" is looking at the walkerID of each object inside the "walkerCities" array
/* If it does, add the current object to the array of assignments */ 
// use the .push array method here to add the individual "assignment" to the empty "assignments" array 

const filterWalkerCitiesByWalker = (walker) => {

    const assignments = []

    for (const assignment of walkerCities) {

        if (assignment.walkerId === walker.id) {

            assignments.push(assignment)
        }
    }

    return assignments
} 

/* Then, define a function that take in the array of matching objects, and use the cityId property on each one to find the matching city name. It should return a string containing all the city names. */ 

/* Define a function that builds a string of city names. Needs a paramter for assignments array. */ 
// we're naming the parameter, "assignments"
/* Define an empty string that will get appended with matching cities */ 
// we're naming the variable, containg an empty string, "matchingCities"
/* Iterate the array of assignment objects */ 
// use a for...of loop to loop through each item/"assignment" in the "assignments" array
/* For each assignment, iterate the cities array to find the match */ 
// use a for...of loop to loop through each item/"city" in the "cities" arra
// use an if...else statement to match the "city.id" to the "cityId" in the "walkerCities" object. 
// the "walkerCities" object is stored in the "assignments" variable above, so use "assignment.cityId" to access this. 
/* Add the name of the matching city to the array of city names */ 
// use another for...of loop to loop through each "city" in the "cities" array
/* After the loop is done, return the string */ 
// i retun "cityNames" to myself 

const assignedCityNames = (assignments) => {

    const cityNames = ""

    for (const assignment of assignments) {
        for (const city of cities) {
            if (city.id === assignment.cityId) {

                cityNames += `${city.name}`
                // shouldn't this be "+="" not "="? 
                // cityNames is empty right now, so just do += ${city.name}? 
            }
        }
    }
    return cityNames 
}

/* You need to find all cities for the walker and display them. */ 
// we're just putting everything that we made above together here 

// for (const walker of walkers) {
//     if (walker.id === parseInt(walkerId)) {
//         const assignments = filterWalkerCitiesByWalker(walker)
//         const cities = assignedCityNames(assignments)

//         window.alert(`${walker.name} services ${cities}`)
//     }
// }

/* IMPORTANT: Once you implement this refactor of the code, your assignments text at the bottom of the screen will all end with undefined. This is expected, and acceptable. You may choose to fix that, but we have no expectation as it is a significant refactoring of the code again. */ 


// original error: const walkers = getWalker()
// it should be "getWalkers", so line 3 was missing an "s" on getWalker()

// original error: citiesHTML += `<li>${currentWalker.city}</li>`
// iterating through the "walkers" array, so each object inside is a "walker"