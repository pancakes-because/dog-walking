import { getWalkers } from "./database.js"
import { getCities } from "./database.js"
import { getWalkerCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        /* code helps make the event listener work  */
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

const filterWalkerCitiesByWalker = (walker) => {

    const assignments = []

    for (const assignment of walkerCities) {

        if (assignment.walkerId === walker.id) {

            assignments.push(assignment)
        }
    }

    return assignments
}

const assignedCityNames = (assignments) => {

    let cityNames = " "

    for (const assignment of assignments) {
        for (const city of cities) {
            if (city.id === assignment.cityId) {

                cityNames += `${city.name}`
                // book hint says use cityNames = `${cityNames} and ${city.name}`
                // shouldn't this be "+="" not "="? 
                // cityNames is empty right now, so just do += ${city.name}? 
                // Sydney said I was right! 
            }
        }
    }
    return cityNames
}

/* event listener starts here */
document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
        if (itemClicked.id.startsWith("walker")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [, walkerId] = itemClicked.id.split("--")

            /*
                Now that you have the primary key of a walker object,
                find the whole object by iterating the walkers array.
            */
            // for (const walker of walkers) {

            /*
                Compare the primary key of each walker to the one
                you have. As soon as you find the right one, display
                the window alert message.
            */

            // if (walker.id === parseInt(walkerId)) {
            //     window.alert(`${walker.name} services ${walker.city}`)
            // }

            const parsedWalkerId = parseInt(walkerId) 

            for (const walker of walkers) {
                if (walker.id === parsedWalkerId) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = assignedCityNames(assignments)

                    window.alert(`${walker.name} services ${cities}`)
                }
            }

            /* IMPORTANT: Once you implement this refactor of the code, your assignments text at the bottom of the screen will all end with undefined. This is expected, and acceptable. You may choose to fix that, but we have no expectation as it is a significant refactoring of the code again. */


        }
    }
)
/* event listener ends here */




// original error: import { getWalker } from "./database.js"
// it should be "getWalkers", so line 1 was missing an "s" on "getWalker"

// original error: no return statement under "walkerHTML += "</ul>""" on line 13  
// a variable called "walkerHTML" was declared on line 7, so it must be returned 
// figured this out because "Walkers" on line 6 was coming up as "Void" in dev tools

//original error:  walkerHTML += `<li>${walker.fullName}</li>`
// "walker.fullname" should be "walker.name" on line 10 according to the database.js 