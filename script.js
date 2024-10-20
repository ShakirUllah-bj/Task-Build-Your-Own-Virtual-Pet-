let pet = {
    name: prompt("What is your pet name?"),
    type: prompt("What kind of pet is it?"),
    age: +prompt("How old is your pet?"),
    happeness: +prompt("How happy is your pet?  0 t0 100"),
    hunger: +prompt("How hungry is your pet?  0 t0 100"),


    // feed(): This should decrease the hunger level by 20, but it can’t go below 0.
    feed: function() {
        if (this.hunger > 20) {
            this.hunger -= 20;
        } else {
            this.hunger = 0
        }
        alert(`${this.name} has been fed, hunger is now ${this.hunger}`);
    },

    play: function() {
        {
            if (this.happeness < 100) {
                this.happeness += 20;

            }
            if (this.happeness > 100) {
                this.happeness = 100;
            }
            alert(`${this.name} is happy! Happiness is now ${this.happeness}.`);
        }
    },

    agePet: function() {
        this.age += 1;
        this.happeness -= 5;
        this.hunger += 10;
        if (this.happeness < 0)
            this.happeness = 0;

        if (this.hunger > 100)
            this.hunger = 100;

        alert(`${this.name} is now ${this.age} years old! happeness is now ${this.happeness}, hunger is now ${this.hunger}`);
    }
};


function interactWithPet() {
    let action = prompt("What would you like to do? (feed/play/age/get info/exit)");

    while (action !== "exit") {
        switch (action) {
            case "feed":
                pet.feed();
                break;
            case "play":
                pet.play();
                break;
            case "age":
                pet.agePet();
                break;
            default:
                alert("Please choose a valid action: feed, play, age, get info, or exit.");

        };
        action = prompt("What would you like to do? (feed/play/age/exit)");
    }
    alert("Goodbye! Take care of your pet.");
}

interactWithPet();