/**
 * Remove duplicate element
 */

let names = ['habul','kabul','abul','mukbul','kabul','ajul','habul','abul','kabul'];

function removeDuplicate (names) {
    const unique = [];
    /* for (let i = 0; i < names.length; i++) {
        const element = names[i];
        console.log(element);
    } */

    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

let uniqueName = removeDuplicate(names);
console.log(uniqueName);
