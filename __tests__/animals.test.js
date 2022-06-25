const fs = require("fs");

const {
    filterByQuery,
    findById,
    createNewAnimal,
    validateAnimal,
} = require("../lib/animals.js");
const { animals } = require("../data/animals");

jest.mock('fs');

test("creates an animal object", () => {
    const animal = createNewAnimal(
        { name: "Darlene", id: "jhgdja3ng2" },
        animals
    );

    expect(animal.name).toBe("Darlene");
    expect(animal.id).toBe("jhgdja3ng2");
});

test("filters by query", () => {
    const startingAnimals = [
        {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
        },
        {
        id: "4",
        name: "Noel",
        species: "bear",
        diet: "carnivore",
        personalityTraits: ["impish", "sassy", "brave"],
        },
    ];

    const updatedAnimals = filterByQuery({ species: "gorilla" }, startingAnimals);

    expect(updatedAnimals.length).toEqual(1);
});

test("finds by id", () => {
    const startingAnimals = [
        {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
        },
        {
        id: "4",
        name: "Noel",
        species: "bear",
        diet: "carnivore",
        personalityTraits: ["impish", "sassy", "brave"],
        },
    ];

    const result = findById("3", startingAnimals);

    expect(result.name).toBe("Erica");
});

test("validates personality traits", () => {
    const animal = {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
    };

    const invalidAnimal = {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
    };

    const result = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});

const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers");

jest.mock("fs");

test("creates an zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Darlene", id: "jhgdja3ng2" },
        zookeepers
    );

    expect(zookeeper.name).toBe("Darlene");
    expect(zookeeper.id).toBe("jhgdja3ng2");
});

test("filters by query", () => {
    const startingZookeepers = [
        {
        id: "2",
        name: "Raksha",
        age: 31,
        favoriteAnimal: "penguin",
        },
        {
        id: "3",
        name: "Isabella",
        age: 67,
        favoriteAnimal: "bear",
        },
    ];

    const updatedZookeepers = filterByQuery({ age: 31 }, startingZookeepers);

    expect(updatedZookeepers.length).toEqual(1);
});

test("finds by id", () => {
    const startingZookeepers = [
        {
        id: "2",
        name: "Raksha",
        age: 31,
        favoriteAnimal: "penguin",
        },
        {
        id: "3",
        name: "Isabella",
        age: 67,
        favoriteAnimal: "bear",
        },
    ];

    const result = findById("3", startingZookeepers);

    expect(result.name).toBe("Isabella");
});

test("validates age", () => {
    const zookeeper = {
        id: "2",
        name: "Raksha",
        age: 31,
        favoriteAnimal: "penguin",
    };

    const invalidZookeeper = {
        id: "3",
        name: "Isabella",
        age: "67",
        favoriteAnimal: "bear",
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});