var tic_tac_toe_table = [[],[],[]];

function check_none(args){
	if (args == ""){
		var choice = confirm("You can not leave the name blank !!!\nDo you want to start again ???");
		if (choice == true){
			player_setup();
		}
		else{
			return false;
		}
	}
}

function player_setup(){
	var player_info = [];
	var player_1, player_2;
	var player_1_choice, player_2_choice;
	var status;

	player_1 = prompt("Player 1 name: ");
	status = check_none(player_1);

	// If status equal to false, kill the program
	if (status == false){
		return; 
	}

	player_2 = prompt("Player 2 name: ");
	status = check_none(player_2);

	// If status equal to false, kill the program
	if (status == false){
		return; 
	}

	player_1_choice = prompt(player_1 + "\n" + "Which one would you like to be ???\nX or O");

	if (player_1_choice == "X"){
		player_2_choice = "O";
		player_info[0] = player_1;
		player_info

	}
	else if (player_1_choice == "O"){
		player_2_choice = "X";
	}
	else{
		var choice = confirm("The input is wrong\nDo you want to start again ???");
		if (choice == true){
			player_setup();
		}
		else{
			return;
		}
	}
}

// Game loop --------------------------------------------------------------------------

function game_loop(){
	var i, j;

	for (i = 0; i < 3; ++i){
		for (j = 0; j < 3; ++j){
			// testing to print the table
			tic_tac_toe_table[i][j] = "[--] ";
			document.write(tic_tac_toe_table[i][j]);
		}
		document.write("<br>");
	}
}

function get_coordinate(){

}


