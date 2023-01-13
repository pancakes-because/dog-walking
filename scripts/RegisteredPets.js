import { getPets } from "./database.js"

import { getWalkers } from "./database.js" 
// added this import statement so we can reference walkers for the 2nd event listener

/* Add a click event listener to your HTML document. */
// refactored the event listener code from Walkers.js module. 

/* Store the target HTML element of the click event in a variable. */
// changed the code on the line, "if (itemClicked.id.startsWith("walker")) {". 
// replaced "walker" with "pet", so the event listener's target is pet <li>. 

/* Check if the id property of the element starts with the string of "pet".*/
// do this in dev tools in the browser. 



document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a pet <li> was clicked
        */
        if (itemClicked.id.startsWith("pet")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("pet--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `petPrimaryKey` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */

            const [, petPrimaryKey] = itemClicked.id.split("--")
            // use the split() method on the id property to get an array of two string (e.g. ["pet", "4"])
            // Used array deconstruction to assign the primary key to a variable named petPrimaryKey.

            /*
                Find the whole pet object by iterating the array of pet objects 
            */

            // for (const pet of pets) {

            /*
                and comparing each primary key to the integer value of the petPrimaryKey variable. 
            */

            // for making pets bark at me when I click on a pet name 
            // if (pet.id === parseInt(petPrimaryKey)) {
            //     window.alert(`${pet.name} barks at you`)
            // }

            // ***for showing a walker walking their assigned pet when I click on a pet name***
            let matchingPet = null
            // variables that store the petId to help match with their walker 

            /* Find the whole pet object to get the name */
            for (const pet of pets) {
                if (parseInt(petPrimaryKey) === pet.id) {
                    matchingPet = pet
                }
            }

            let matchingWalker = null 
            // variable that stores the foreign key, which is the walker id. 

            /* Find the related walker object assigned to the pet */ 
            for (const walker of walkers) {
                if (matchingPet.walkerId === walker.id) {
                    matchingWalker = walker
                }
            }

            window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}`)
        }
    }
)

/* Update the code in RegisteredPets module so that the <li> for each pet has an id attribute with the following format id="pet--1". The primary key should be correct for each element. */

const pets = getPets()
const walkers = getWalkers() // to help us get the walker foreign key starting line 76 

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

