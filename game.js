function win() {
    statInfo.textContent = "PLAYER 1 WIN"
    statInfo.classList.add('greenbox')
}

function lose() {
    statInfo.textContent = "COMP WIN"
    statInfo.classList.add('greenbox')
}

function draw() {
    statInfo.textContent = "DRAW"
    statInfo.classList.add('greybox')
}

class Comp {
    constructor(choice){
        this.choice = choice;
    }
}

const comp = new Comp(document.querySelectorAll('.comp'));
const player_batu = [document.querySelector('.p-batu'), "batu"]
const player_gunting = [document.querySelector('.p-gunting'), "gunting"]
const player_kertas = [document.querySelector('.p-kertas'), "kertas"]
var statInfo = document.querySelector('.status');
const refresh = document.querySelector('.reload');

function compThink() {
    var choices = ['Batu', 'Kertas', 'Gunting'];
    var randomChoices = Math.floor(Math.random() * 3);
    return choices[randomChoices]
  }

  function disable() {
    player_batu[0].disabled =true;
    player_kertas[0].disabled =true;  
    player_gunting[0].disabled =true;  
  }

var game = function() {
    player_batu[0].addEventListener('click', function() {
        this.classList.add('pilihan');
        disable()
        if (compThink() == "Gunting") {
            win();
            comp.choice.item(2).classList.add('pilihan')
        }
        else if (compThink() == "Kertas") {
            comp.choice.item(1).classList.add('pilihan')
            lose();
        }
        else {
            comp.choice.item(0).classList.add('pilihan')
            draw();
        }
    }) 
    player_gunting[0].addEventListener('click', function() {
        this.classList.add('pilihan');
        disable() 
        if (compThink() == "Batu") {
            comp.choice.item(0).classList.add('pilihan')
            lose();
        }
        else if (compThink() == "Kertas") {
            comp.choice.item(1).classList.add('pilihan')
            win();
        }
        else {
            comp.choice.item(2).classList.add('pilihan')
            draw();
        }
    }) 
    player_kertas[0].addEventListener('click', function() {
        this.classList.add('pilihan');  
        disable()
        if (compThink() == "Gunting") {
            comp.choice.item(2).classList.add('pilihan')
            lose();
        }
        else if (compThink() == "Batu") {
            comp.choice.item(0).classList.add('pilihan')
            win();
        }
        else {
            comp.choice.item(1).classList.add('pilihan')
            draw();
        }
    }) 
}

game();

refresh.addEventListener('click', function(){
statInfo.classList.remove('greenbox');
statInfo.classList.remove('greybox');
player_gunting[0].disabled =false;
player_batu[0].disabled =false;
player_kertas[0].disabled =false;
player_batu[0].classList.remove('pilihan')
player_gunting[0].classList.remove('pilihan')
player_kertas[0].classList.remove('pilihan')
comp.choice.item(0).classList.remove('pilihan')
comp.choice.item(1).classList.remove('pilihan')
comp.choice.item(2).classList.remove('pilihan')
statInfo.textContent = "VS"
})