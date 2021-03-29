// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
       return this.strength 
    }
    receiveDamage(damage) {
        this.damage = damage
        this.health -= this.damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name
    }
    attack() {
        return this.strength
    }
    receiveDamage(vikingDamage) {
        this.damage = vikingDamage
        this.health = this.health - this.damage
        if (this.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(saxonDamage) {
        this.damage = saxonDamage
        this.health -= this.damage
        if (this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}


// War
class War {
    vikingArmy = []
    saxonArmy = []
    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject)
    }
    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject)
    }
    vikingAttack () {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let encounter = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1)
        }
        return encounter
    }
    saxonAttack () {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let encounter = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1)
        }
        return encounter
    }
/*Super Bonus : 
        genericMethod () {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

        }
*/

    
    showStatus() {
        if (this.saxonArmy == 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy == 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.vikingArmy.indexOf(1) && this.saxonArmy.indexOf(1)) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
