var Character = function(name) {
    this.name = name;
    
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
            displayStats(this);
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
    
    displayStats(this);
}

function displayStats(char) {
    var charNameLowercase = char.name.toLowerCase();
    var content = document.getElementById(charNameLowercase);    
    
    content.innerHTML = ' \
        <div class="container">\
            <h1>' + char.name + '</h1>\
            <table>\
                <tbody>\
                    <tr>\
                        <td class="col-md-2"><b>Health:&nbsp</b></td>\
                        <td class="col-md-1"><b>' + char.health + '</b></td>\
                        <td class="gauge-background health-background">\
                            <div class="gauge-fill health-fill" id="' + charNameLowercase + 'Health"></div>\
                        </td>\
                    </tr>\
                    <tr>\
                        <td class="col-md-2"><b>Stamina:&nbsp</b></td>\
                        <td class="col-md-1"><b>' + char.pAttack + '</b></td>\
                        <td class="gauge-background stamina-background">\
                            <div class="gauge-fill stamina-fill" id="' + charNameLowercase + 'Stamina"></div>\
                        </td>\
                    </tr>\
                    <tr>\
                        <td class="col-md-2"><b>Physical Attack:&nbsp</b></td>\
                        <td class="col-md-1"><b>' + char.pDefense + '</b></td>\
                        <td class="gauge-background pattack-background">\
                            <div class="gauge-fill pattack-fill" id="' + charNameLowercase + 'PAttack"></div>\
                        </td>\
                    </tr>\
                    <tr>\
                        <td class="col-md-2"><b>Physical Defense:&nbsp</b></td>\
                        <td class="col-md-1"><b>' + char.mAttack + '</b></td>\
                        <td class="gauge-background pdefense-background">\
                            <div class="gauge-fill pdefense-fill" id="' + charNameLowercase + 'PDefense"></div>\
                        </td>\
                    </tr>\
                    <tr>\
                        <td class="col-md-2"><b>Mystical Attack:&nbsp</b></td>\
                        <td class="col-md-1"><b>' + char.mDefense + '</b></td>\
                        <td class="gauge-background mattack-background">\
                            <div class="gauge-fill mattack-fill" id="' + charNameLowercase + 'MAttack"></div>\
                        </td>\
                    </tr>\
                    <tr>\
                        <td class="col-md-2"><b>Mystical Defense:&nbsp</b></td>\
                        <td class="col-md-1"><b>' + char.speed + '</b></td>\
                        <td class="gauge-background mdefense-background">\
                            <div class="gauge-fill mdefense-fill" id="' + charNameLowercase + 'MDefense"></div>\
                        </td>\
                    </tr>\
                    <tr>\
                        <td class="col-md-2"><b>Speed:&nbsp</b></td>\
                        <td class="col-md-1"><b>' + char.health + '</b></td>\
                        <td class="gauge-background speed-background">\
                            <div class="gauge-fill speed-fill" id="' + charNameLowercase + 'Speed"></div>\
                        </td>\
                    </tr>\
                </tbody>\
            </table>\
        </div>';
    
    document.getElementById(charNameLowercase+"Health").style.width = char.health+"%";
    document.getElementById(charNameLowercase+"Stamina").style.width = char.stamina+"%";
    document.getElementById(charNameLowercase+"PAttack").style.width = char.pAttack+"%";
    document.getElementById(charNameLowercase+"PDefense").style.width = char.pDefense+"%";
    document.getElementById(charNameLowercase+"MAttack").style.width = char.mAttack+"%";
    document.getElementById(charNameLowercase+"MDefense").style.width = char.mDefense+"%";
    document.getElementById(charNameLowercase+"Speed").style.width = char.speed+"%";
}


function init_characters() {
    var drageaux = new Character("Drageaux");
    var fearnix = new Character("Fearnix");
    var raiger = new Character("Raiger");
    var edgard = new Character("Edgard");
}