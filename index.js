const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    let newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    let newestCats = [name, ...cats];
    return newestCats;
}

function removeLastCat() {
    const copyOfCats = cats.slice(0, 2);
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats = cats.slice(1);
    return copyOfCats;
}