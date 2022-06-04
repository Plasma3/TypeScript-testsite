export {}

console.log("Hello World!");

function welcomePerson(person: Person): string {
    console.log(`Hey ${person.firstName} ${person.lastName}`);
    return `Hey ${person.firstName} ${person.lastName}`;
}

const fredrik = {
    firstName: "Fredrik",
    lastName: "Ahlberg"
}

welcomePerson(fredrik);

interface Person {
    firstName: string,
    lastName: string
}

document.body.textContent = welcomePerson(fredrik);