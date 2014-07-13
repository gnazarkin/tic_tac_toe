$(document).ready( function() {
	window.currentClick = 0;
	var turnX = [];
	var turnO = [];
	var winner = false;
	var winningCombinations = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [1,5,9], [3,5,7], [3,6,9]]

	 $('.cell' ).hover(
    function(){
    	if($(this).text() != "X" && $(this).text() != "O"){
        $(this).css("background-color","grey");
      }
    },
    function(){
        $(this).css("background-color","white");
    }
  );

	 $('.cell').on('click', turn)


	function turn(){

		if(window.currentClick % 2 === 0) {
			$(this).text('X');
			$(this).off('click')
			$('#status').text("O's turn");
			window.currentClick += 1;
			var valueOfX = parseInt($(this).attr('id'));
			turnX.push(valueOfX)
		}
		else{
			$(this).text('O');
			$(this).off('click');
			$('#status').text("X's turn");
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
					$('#status').text('X wins');
					endGame(winningCombinations[i]);
					winner = true;
        }else if (turnO.indexOf(combo[0]) !== -1 && turnO.indexOf(combo[1]) !== -1 && turnO.indexOf(combo[2]) !== -1) {
         	$('#status').text('O wins');
         	endGame(winningCombinations[i]);
         	winner = true;
        }
        else if (window.currentClick===9){
        	$('#status').text('Its a draw');
        	endGame(winningCombinations[i]);
        }
    }
	}

	function endGame(winning){
		$('.cell').off('click');
		$('.cell').off('mouseenter');
		$('.cell').off('mouseleave');
		$('.cell').css("background-color","white");
		console.log(winning)

		if(winner===true){
			for (var i = 0; i <3; i++){
				$('.cell').eq(winning[i]-1).css("background-color","blue")
			}
		}
	}

})
	
	





