const currentUser = "Eric Maranga";

let welcomeMessage = "Welcome to Flatbook, " + `${currentUser}` + "!";

let excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + `${currentUser.toUpperCase()}` + "!";

const firstInitial = currentUser[0];
const restOfName = currentUser.slice(5);

let shortGreeting = "Welcome, " + `${firstInitial} ` + `${restOfName}` + "!";

console.log(shortGreeting);
