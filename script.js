function rolldice()  {
    let player_1 =  Math.floor((Math.random()*6)+1);
    let player_2 = Math.floor(Math.random()*6)+1;
 
    let playeronedice = document.querySelector('.img1');
    let playertwodice = document.querySelector('.img2');
 
    playeronedice.setAttribute('src',"dice"+player_1+".png");
    playertwodice.setAttribute('src',"dice"+player_2+".png")
 
    let heading = document.getElementById("heading");
    
    if(player_1 > player_2){
     heading.textContent = "player 1 wins!";
    }
    else if(player_2 > player_1){
     heading.textContent = "player 2 wins!";
    }
    else{
     heading.textContent = "it's a draw match!";
    }
 }
 
 
     document.body.addEventListener('click', rolldice);
 