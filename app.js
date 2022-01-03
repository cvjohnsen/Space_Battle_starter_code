

// Make Game Object
// Make Method in Game Obj that will run "Win Check" for aliens && || USS Schwarzengger
//If hull is 0 or less, display message ship went "kaloo-ey" 

const ussSchwarzenegger = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack(target) {
        let ranNum = Math.random();
        console.log(`Accuracy threshold is ${ranNum}`);
        if (ranNum < this.accuracy) {
            console.log(`It's a direct hit!`);
            target.hull = target.hull - this.firepower;
            console.log(`alien has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                console.log(`Ship Went Kaloo-ey!`);

            }
        } else {
            console.log(`you missed!`);
        }
    }
}
const alienUfo = {
    hull: Math.round((Math.random() * (6 - 3)) + 3),
    firepower: Math.round((Math.random() * (4 - 2)) + 2),
    accuracy: (Math.random() * (.8 - .6)) + .6, 
    attack(target) {
        let ranNum = Math.random();
        console.log(`Accuracy threshold is ${ranNum}`);
        if (ranNum < this.accuracy) {
            console.log(`You've been hit!`);
            target.hull = target.hull - this.firepower;
            console.log(`USS Schwarzenegger has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                console.log(`You have died!`);

            }
        } else {
            console.log(`You dodged the attack!`);
        }
    }
}

//  prompt() an alert message
// app should run in the DOM