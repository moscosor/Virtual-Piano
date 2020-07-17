function playSong(){
    let tempo = 345;
    let cat = [0, 3, 5, 3, 5, 5, 5, 10, 8, 7, 5, 7, 7, 10, 12, 5, 3, 10, 10, 7, 10, 10, 12];
    let mha = [0,3,5,0,3,5,0,3,5,0,3,5,0,3,8,0,3,8,0,3,8,0,3,8,0,3,10,0,3,10,0,3,10,0,3,10,0,3,8,0,3,8,0,3,8,0,3,8];
    let keys = document.getElementById("piano").children;
    for(let i = 0; i < cat.length; i++){
        for(let j = 0; j < keys.length; j++){
            if(cat[i] === j){
                pressKey(keys, j, i, tempo);
                break;
            }
        } 
    }
}

function playChord(){
    let keys = document.getElementById("piano").children;
    let chord = [0, 4, 7];
    for(let i = 0; i < chord.length; i++){
        for(let j = 0; j < keys.length; j++){
            if(chord[i] === j){
                console.log(`key pressed: ${keys[j].id}`);
                keys[j].click();
                break;
            }
        } 
    }
}

function playOctave(){
    let keys = document.getElementById("piano").children;
    let oct = [0, 12];
    for(let i = 0; i < oct.length; i++){
        for(let j = 0; j < keys.length; j++){
            if(oct[i] === j){
                console.log(`key pressed: ${keys[j].id}`);
                keys[j].click();
                break;
            }
        } 
    }
}

function pressKey(keys, j, i, tempo){
    setTimeout(function() { 
        console.log(`key pressed: ${keys[j].id}`);
        document.getElementById("piano").children[j].focus();
        keys[j].click(); 
    }, tempo * i); 
    
}

function playSound(key){
    new Audio(`notes/${key.id}.mp3`).play();
}

function changeSection(){
    let selection = document.getElementById("section");
    let num = selection.options[selection.selectedIndex].value;
    let keys = document.getElementById("piano").children;
    for(let i = 0; i < keys.length; i++){
        if(i == keys.length - 1){
            keys[i].id = keys[i].id.substring(0, keys[i].id.length - 1);
            num++;
            keys[i].id = keys[i].id + num;
        }
        keys[i].id = keys[i].id.substring(0, keys[i].id.length - 1);
        keys[i].id = keys[i].id + num;
    }
}

