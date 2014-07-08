$(document).ready( function() {
	window.currentClick = 0;
	var turnX = [];
	var turnO = [];
	var winningCombinations = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [1,5,9],]

	 $('.cell' ).hover(
    function(){
    	if($(this).text() != "X" && $(this).text() != "O"){
        $(this).css("background-color","grey");
      }
    },
    function(){
        $(this).css("background-color","");
    }
  );

	 $('.cell').on('click', turn)


	function turn(){

		if(window.currentClick % 2 === 0) {
			$(this).text('X');
			$(this).off('click')
			window.currentClick += 1;
			var valueOfX = parseInt($(this).attr('id'));
			turnX.push(valueOfX)
		}
		else{
			$(this).text('O');
			$(this).off('click');
			window.currentClick += 1;
			var valueOfO = parseInt($(this).attr('id'));
			turnO.push(valueOfO)
		}
		checkWinner()
	}

	function checkWinner(){
		for (var i = 0; i < winningCombinations.length; i++){
			combo = winningCombinations[i];
				if (turnX.indexOf(combo[0]) !== -1 && turnX.indexOf(combo[1]) !== -1 && turnX.indexOf(combo[2]) !== -1) {
					alert('X wins');
        }else if (turnO.indexOf(combo[0]) !== -1 && turnO.indexOf(combo[1]) !== -1 && turnO.indexOf(combo[2]) !== -1) {
         	alert('O wins');
        }
    }
	}

})
	







