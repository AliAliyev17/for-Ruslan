imgs = ['url("az.svg")', 'url("ar.svg")']
activeImgId = 1

function changeColor() {
  activeImgId = activeImgId%2+1
}

function praise(name) {
  if(name.substring(5, 7)==='az') {alert("You won!")}
  else {alert("No win for you!")}
  location.reload()
}


function checkBoard() {
  board = [[], [], []];
  for(var i=0; i<9; i++) {
    board[Math.trunc(i/3)][i%3] = document.querySelector("#\\3"+(i+1)).style['background-image'];
  }
  console.log(board)
  //checking rows and columns
  for(i=0; i<3; i++) {
    console.log(board[i])
    if((board[i][0]===board[i][1] && board[i][1]===board[i][2]) || 
       (board[0][i]===board[1][i] && board[1][i]===board[2][i])) {
      if(board[i][i]) {praise(board[i][i])}
    }
  }
  //checking diagonals
  if((board[0][0]===board[1][1] && board[1][1]===board[2][2]) || 
     (board[0][2]===board[1][1] && board[1][1]===board[2][0])) {
    if(board[1][1]) {praise(board[1][1]);}
  }
}

function colorButton(id) {
  element = document.querySelector('#\\3'+id)
  if(element.style['background-image']) {
    return null;
  }
  image = imgs[activeImgId-1];
  element.style['background-image'] = image;
  changeColor();
  checkBoard();
}
