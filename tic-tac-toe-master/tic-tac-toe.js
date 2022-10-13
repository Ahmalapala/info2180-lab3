let x = true;
window.onload=function(){
    var square = document.getElementById("board").children;
    for (let y=0; y < square.length; y++){
        square[y].setAttribute("class","square");
        square[y].addEventListener("click", function(){
            if(x==true){
                square[y].innerHTML = "X";
                square[y].classList.add("X");
                x = false;
            }
            else{
                square[y].innerHTML = "O";
                square[y].classList.add("O");
                x = true;
            }
        });
    }
}

