var tic_tac_toe_table = [[],[],[]];
var check_win_arr = [[],[],[]];

function check_none(args){
	if (args == ""){
		var choice = confirm("You can not leave this blank !!!\nDo you want to start again ???");
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
		player_info[1] = player_1_choice;
		player_info[2] = player_2;
		player_info[3] = player_2_choice;
		new_game()
		return player_info;

	}
	else if (player_1_choice == "O"){
		player_2_choice = "X";
		player_info[0] = player_1;
		player_info[1] = player_1_choice;
		player_info[2] = player_2;
		player_info[3] = player_2_choice;
		new_game()
		return player_info;
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

function new_game(){
	var i, j;

	for (i = 0; i < 3; ++i){
		for (j = 0; j < 3; ++j){
			// testing to print the table
			tic_tac_toe_table[i][j] = "[--] ";
			check_win_arr[i][j] = -1;
		}
	}
	alert(tic_tac_toe_table[0][0] + tic_tac_toe_table[0][1] + tic_tac_toe_table[0][2] + "\n" +
		tic_tac_toe_table[1][0] + tic_tac_toe_table[1][1] + tic_tac_toe_table[1][2] + "\n" +
		tic_tac_toe_table[2][0] + tic_tac_toe_table[2][1] + tic_tac_toe_table[2][2]
		);
}

function game_loop(){
	alert(tic_tac_toe_table[0][0] + tic_tac_toe_table[0][1] + tic_tac_toe_table[0][2] + "\n" +
		tic_tac_toe_table[1][0] + tic_tac_toe_table[1][1] + tic_tac_toe_table[1][2] + "\n" +
		tic_tac_toe_table[2][0] + tic_tac_toe_table[2][1] + tic_tac_toe_table[2][2]
		);
}

function check_win(){
	// This function will determind if a player win the game or not then return a boolean value
	var i, j;
	var status;

	for (i = 0; i < 3; ++i){
		for (j = 0; j < 3; ++j){
			if ((tic_tac_toe_table[0][0] + tic_tac_toe_table[0][1] + tic_tac_toe_table[0][2] == 3)
				|| (tic_tac_toe_table[1][0] + tic_tac_toe_table[1][1] + tic_tac_toe_table[1][2] == 3)
				|| (tic_tac_toe_table[2][0] + tic_tac_toe_table[2][1] + tic_tac_toe_table[2][2] == 3)

				|| (tic_tac_toe_table[0][0] + tic_tac_toe_table[1][0] + tic_tac_toe_table[2][0] == 3)
				|| (tic_tac_toe_table[0][1] + tic_tac_toe_table[1][1] + tic_tac_toe_table[2][1] == 3)
				|| (tic_tac_toe_table[0][2] + tic_tac_toe_table[1][2] + tic_tac_toe_table[2][2] == 3)

				|| (tic_tac_toe_table[0][0] + tic_tac_toe_table[1][1] + tic_tac_toe_table[2][2] == 3)
				|| (tic_tac_toe_table[0][2] + tic_tac_toe_table[1][1] + tic_tac_toe_table[2][0] == 3)){

				alert("Test OK for X");
				status = "X";
				return status;
			}
			else if((tic_tac_toe_table[0][0] + tic_tac_toe_table[0][1] + tic_tac_toe_table[0][2] == 0)
				|| (tic_tac_toe_table[1][0] + tic_tac_toe_table[1][1] + tic_tac_toe_table[1][2] == 0)
				|| (tic_tac_toe_table[2][0] + tic_tac_toe_table[2][1] + tic_tac_toe_table[2][2] == 0)

				|| (tic_tac_toe_table[0][0] + tic_tac_toe_table[1][0] + tic_tac_toe_table[2][0] == 0)
				|| (tic_tac_toe_table[0][1] + tic_tac_toe_table[1][1] + tic_tac_toe_table[2][1] == 0)
				|| (tic_tac_toe_table[0][2] + tic_tac_toe_table[1][2] + tic_tac_toe_table[2][2] == 0)

				|| (tic_tac_toe_table[0][0] + tic_tac_toe_table[1][1] + tic_tac_toe_table[2][2] == 0)
				|| (tic_tac_toe_table[0][2] + tic_tac_toe_table[1][1] + tic_tac_toe_table[2][0] == 0)){

				alert("Test OK for O");
				status = "O";
				return status;
			}
			else{
				return -1;
			}
		}
	}
}

function get_coordinate(info_arr){
	var player_1_name, player_2_name, player_1_choice, player_2_choice;
	var counter;
	var row_1, col_1, row_2, col_2;
	var status;

	for (counter = 0; counter < 4; ++counter){
		player_1_name = info_arr[0];
		player_1_choice = info_arr[1];
		player_2_name = info_arr[2];
		player_2_choice = info_arr[3];
	}

	if (player_1_choice == "X"){
		// Asker for the coordinate;
		row_1 = Number(prompt("Please enter the row number: "));
		col_1 = Number(prompt("Please enter the collum number: "));
	
		tic_tac_toe_table[row_1][col_1] = "[X] ";
		Number(check_win_arr[row_1][col_1] = 1);

		game_loop();
		status = check_win();
		if (status == "X"){
			alert("The winner is: " + player_1_name);
			return;
		}
		else if (status == "O"){
			alert("The winner is: " + player_2_name);
			return;
		}

		row_2 = Number(prompt("Please enter the row number: "));
		col_2 = Number(prompt("Please enter the collum number: "));

		tic_tac_toe_table[row_2][col_2] = "[O] ";
		Number(check_win_arr[row_2][col_2] = 0);

		game_loop();
		status = check_win();
		if (status == "X"){
			alert("The winner is: " + player_1_name);
			return;
		}
		else if (status == "O"){
			alert("The winner is: " + player_2_name);
			return;
		}
		else{
			get_coordinate(info_arr);
		}
	}

	else if (player_2_choice == "X"){
		// Asker for the coordinate;
		row_2 = Number(prompt("Please enter the row number: "));
		col_2 = Number(prompt("Please enter the collum number: "));
	
		tic_tac_toe_table[row_2][col_2] = "[X] ";
		Number(check_win_arr[row_2][col_2] = 1);

		game_loop();
		status = check_win();
		if (status == "X"){
			alert("The winner is: " + player_2_name);
			return;
		}
		else if (status == "O"){
			alert("The winner is: " + player_1_name);
			return;
		}

		row_1 = Number(prompt("Please enter the row number: "));
		col_1 = Number(prompt("Please enter the collum number: "));

		tic_tac_toe_table[row_1][col_1] = "[O] ";
		Number(check_win_arr[row_1][col_1] = 0);

		game_loop();
		status = check_win();
		if (status == "X"){
			alert("The winner is: " + player_2_name);
			return;
		}
		else if (status == "O"){
			alert("The winner is: " + player_1_name);
			return;
		}
		else{
			get_coordinate(info_arr);
		}
	}
}



