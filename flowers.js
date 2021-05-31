const flowers = [
    {
        id: 1,
        color: "White",
        species: "Rose",
        price: 0.90
    },
    {
        id: 2,
        color: "Red",
        species: "Tulip",
        price: 1.10
    }
]

const addFlower = (flowerObject) => {
        const lastIndex = flowers.length-1
        const currentLastflower=flowers[lastIndex]
        const maxId=currentLastflower.id
        const idForNewFlower=maxId+1
        flowerObject.id=idForNewFlower
        flowers.push(flowerObject)
    }

    const newFlower = {
        color: "pink",
        species: "dianthus",
        price: 0.75
    }

    addFlower(newFlower)

const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code

    for (const flower of flowers){
        if (flower.price>=1.00){
            expensiveFlowers.push(flower)
        }
    }

    return expensiveFlowers  // Do not change this code
}

// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

