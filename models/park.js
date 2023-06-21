const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];

}

Park.prototype.addDino = function(dino) {
    this.dinoCollection.push(dino);
}

Park.prototype.removeDino = function(dino) {
    const index = this.dinoCollection.indexOf(dino);
    this.dinoCollection.splice(index, 1);
}

Park.prototype.findPopularDino = function() {
    const sortedList = this.dinoCollection.sort((a,b) => b.guestsAttractedPerDay - a.guestsAttractedPerDay)
    const dino = sortedList[0];
    return dino

}

Park.prototype.dinoFindBySpecies = function(species) {
    let dinos = [];
    for(let dinosaur of this.dinoCollection) {
        if (dinosaur.species.toUpperCase() === species.toUpperCase()) {
            dinos.push(dinosaur);
        }
        return dinos
    }

}

Park.prototype.visitorsPerDay = function() {
    let visitors = 0
    for(let dinosaur of this.dinoCollection) {
        visitors += dinosaur.guestsAttractedPerDay;
        }
        return visitors
    }

Park.prototype.visitorsPerYear = function() {
    let visitors = 0
    for(let dinosaur of this.dinoCollection) {
        visitors += dinosaur.guestsAttractedPerDay;
        }
        return visitors * 365;
}

Park.prototype.yearlyRevenue = function() {
    let visitors = 0
    for(let dinosaur of this.dinoCollection) {
        visitors += dinosaur.guestsAttractedPerDay;
        }
        return visitors * 365 * this.ticketPrice;
}

module.exports = Park;

