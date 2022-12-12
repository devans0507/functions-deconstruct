const wakeUp = () => {
    // Code to wake up
}

const goPee = () => {
    // Code to go pee
}

const washHands = () => {
    // Code to wash hands
}

const makeBreakfast = () => {
    // Code to make breakfast
}

const getEggs = () => {
    // Code to gather eggs
}

const getpan = () => {
    // Code to gather pan
}

const cookEggs = () => {
    // Code to cook the eggs
}

const enjoyEggs = () => {
    // Code to enjoy your eggs
    console.log("Wake up!! Time to make some breakfast!!")
}

wakeUp()
goPee()
washHands()
makeBreakfast()
getEggs()
getpan()
cookEggs()
enjoyEggs()


// #4 design a calculator
const subtract = (firstNumber, secondNumber) => {
    const difference = firstNumber - secondNumber
    return difference
}

const multiply = (firstNumber, secondNumber) => {
    const product = firstNumber * secondNumber
    return product
}

const divide = (firstNumber, secondNumber) => {
    const quotient = firstNumber / secondNumber
    return quotient
}

const square = (originalNumber) => {
    const squared = originalNumber * originalNumber
    return squared
}

let result = subtract(50, 15)
console.log(result)


//#5 design a car factory

// No parameters defined because function needs nothing to do its job
const createChassis = () => {
    // Create a new object. No properties yet.
    const newChassisObject = {}

    return newChassisObject
}

const addBody = (chassisObject) => {
    // Use dot notation to add a new property
    chassisObject.body = "Fever"

    // Return the chassis that now has a body property on it
    return chassisObject
}

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4

    return chassisObject
}

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"

    return chassisObject
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"

    return chassisObject
}

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two wheel drive"

    return chassisObject
}

// const blankChassis = createChassis()
// const bodyAdded = addBody(blankChassis)
// const wheelsAdded = addWheels(bodyAdded)
// const engineAdded = addEngine(wheelsAdded)
// const steeringWheelAdded = addSteeringWheel(engineAdded)
// const driveTrainAdded = addDriveTrain(steeringWheelAdded)

let myCar = createChassis()
myCar = addBody(myCar)
myCar = addWheels(myCar)
myCar = addEngine(myCar)
myCar = addSteeringWheel(myCar)
myCar = addDriveTrain(myCar)

//console.log(myCar)


// #6 design a candy factory

const buyChocolate = () => {
    const candyObject = { type: "milk chocolate" }

    return candyObject
}
console.log(buyChocolate())

const candyObj = buyChocolate()

const addFlavoring = (candyObject) => {
    candyObject.flavor = "Mint"

    return candyObject
}
console.log(addFlavoring(candyObj))


const makeBarkMixture = (candyObject) => {
    if (candyObject.flavor === "Mint") {
        candyObject.mixed = true

        return candyObject
    }
}
console.log(makeBarkMixture(candyObj))


const bakeCandy = (candyObject) => {
    if (candyObject.mixed === true) {
        candyObject.baked = true
    }
    else {
        candyObject.baked = false

    }
    return candyObject
}
console.log(bakeCandy(candyObj))



  