const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers");

jest.mock('fs');

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
            id: "3",
            name: "Erica",
            age: "19",
            favoriteAnimal: "gorilla",
        },
        {
            id: "4",
            name: "Noel",
            age: "63",
            favoriteAnimal: "bear",
        }
    ];

    const updatedZookeepers = filterByQuery({ favoriteAnimal: "gorilla" }, startingZookeepers);

    expect(updatedZookeepers.length).toEqual(1);
});

test("finds by id", () => {
    const startingZookeepers = [
        {
            id: "3",
            name: "Erica",
            age: "19",
            favoriteAnimal: "gorilla",
        },
        {
            id: "4",
            name: "Noel",
            age: "63",
            favoriteAnimal: "bear",
        }
    ];

    const result = findById("3", startingZookeepers);

    expect(result.name).toBe("Erica");
});

test("validates age", () => {
    const zookeeper = {
        id: "3",
        name: "Erica",
        age: 19,
        favoriteAnimal: "gorilla"
    };

    const invalidZookeeper = {
        id: "3",
        name: "Erica",
        age: "19",
        favoriteAnimal: "gorilla"
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});