function RandomCreator(){
    
    let RandomNumber = Math.random() * 10;
    let rr = Math.round(RandomNumber);


    

    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    let TextRan = document.getElementById("BC").style.backgroundColor = color;
    
    document.getElementById("CN").innerHTML = color;


    
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
  }