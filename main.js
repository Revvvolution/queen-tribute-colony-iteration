/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/

const queens = []
const tributeChest = []

const payTribute = (tributeId, description, queenId) => {
    const tributeObject =
    {
        id: tributeId,
    queenId: queenId,
    description: description
    }
    tributeChest.push(tributeObject)
}

payTribute(1, "Jewels", 4)
payTribute(2, "Delicacies", 3)
payTribute(3, "Songs", 1)
payTribute(4, "Gil", 2)


const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Sydney Noh")
createQueen(3, "Christina Ashworth")
createQueen(4, "Aja Washington")
createQueen(5, "Juanita Bonita")


console.log(queens[0].name)
console.log(queens[0].id)

console.log(queens)
console.log(tributeChest)


const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
};

for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)  // What should be passed as an argument?
    console.log(hailMessage)
};

for (const queenObject of queens) {
    for (const tributeObject of tributeChest) {
        if (tributeObject.id === queenObject.id) {
            console.log(`${queenObject.name} receives ${tributeObject.description}`)
        }
    }
}

const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
console.log(athena);

/******************************************************************************************/
/******************************************************************************************/
