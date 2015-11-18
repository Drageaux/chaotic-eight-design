function createCharacter(name) {
    this.name = name;
    console.log("lol");
    // Stats - Max of 525 
    switch(name) {
        case "Drageaux":
            this.health = 75;
            this.stamina = 75;
            this.pAttack = 90;
            this.pDefense = 70;
            this.mAttack = 80;
            this.mDefense = 65;
            this.speed = 70;
            document.getElementById("drageaux").innerHTML = "<div>hello</div>";
            
            break;
        case "Fearnix":
            this.health = 60;
            this.stamina = 80;
            this.pAttack = 70;
            this.pDefense = 60;
            this.mAttack = 90;
            this.mDefense = 80;
            this.speed = 85;
            break;
        case "Raiger":
            this.health = 70;
            this.stamina = 85;
            this.pAttack = 90;
            this.pDefense = 65;
            this.mAttack = 50;
            this.mDefense = 65;
            this.speed = 100;
            break;
        case "Edgard":
            this.health = 90;
            this.stamina = 80;
            this.pAttack = 60;
            this.pDefense = 65;
            this.mAttack = 70;
            this.mDefense = 100;
            this.speed = 60;
            break;
    }
        
    
    console.log(this.name + " instantiated with " + this.health + "HP.");
}


//
//var drageaux = new Character("Drageaux");
//var fearnix = new Character("Fearnix");
//var raiger = new Character("Raiger");
//var edgard = new Character("Edgard");
