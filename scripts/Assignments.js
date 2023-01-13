import { getPets, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML += "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

// original error: const findWalker = (pet, allWalker) => {
// the parameter "allWalker" on line 9 was greyed out, so seemed not defined
// looking further at line 12, should match allWalkers, so just missing an "s" 

// original error: const currentPetWalker = findPetWalker(currentPet, walkers)
// findPetWalker was not defined on line 26 for Assignments.js 
// see line 9, the function is grayed out and is called "findWalker"
// it seems like line 12 should match this and be called "findWalker"

// original error: assignmentHTML = "<ul>"; assignmentHTML = `
// using = instead of += on line 23 and line 27 