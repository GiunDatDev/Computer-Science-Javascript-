function sorting_function(usr_array){
	var i, j;
	for (i = 0; i < usr_array.length; ++i){
		for (j = 0; j < usr_array.length - i - 1; ++j){
			if (usr_array[j] > usr_array[j + 1]){
				// swap them
				// The result of this function is deliver the biggest number to the end
				var temp = usr_array[j];
				usr_array[j] = usr_array[j + 1];
				usr_array[j + 1] = temp;
			}
		}
	}
	var copy_arr = usr_array.slice(0, usr_array.length);
	return copy_arr;
}

function revs_sorting_function(usr_array){
	var i, j;
	for (i = 0; i < usr_array.length; ++i){
		for (j = 0; j < usr_array.length - i - 1; ++j){
			if (usr_array[j] < usr_array[j + 1]){
				// Swap them
				// The result of this function is deliver the smallest number to the end
				var temp = usr_array[j];
				usr_array[j] = usr_array[j + 1];
				usr_array[j + 1] = temp;
			}
		}
	}
	var copy_arr = usr_array.slice(0, usr_array.length);
	return copy_arr;
}

function insertion_sort_func(usr_array){
	var i, j, key;

	for (i = 1; i < usr_array.length; ++i){
		j = i - 1;
		key = usr_array[i];

		while (j >=0 && usr_array[j] > key){
			usr_array[j + 1] = usr_array[j];
			--j;
		}
		usr_array[j + 1] = key;
	}
	var copy_arr = usr_array.slice(0, usr_array.length);
	return copy_arr;
}

function binary_search(usr_array, ini_pos, end_pos, search_num){
	var mid_pos;

	if (ini_pos > end_pos){
		alert("NOT FOUND !!!");
		return -1;
	}
	else{
		mid_pos = (ini_pos + end_pos) / 2;
		mid_pos = Math.floor(mid_pos);

		if (usr_array[mid_pos] == search_num){
			return mid_pos;
		}
		else{
			if (usr_array[mid_pos] > search_num){
				end_pos = mid_pos - 1;
				return binary_search(usr_array, ini_pos, end_pos, search_num);
			}
			else if (usr_array[mid_pos] < search_num){
				ini_pos = mid_pos + 1;
				return binary_search(usr_array, ini_pos, end_pos, search_num);
			}
			else{
				return;
			}
		}
	}
}

function remv_non_Intnum(usr_array){
	var counter;
	for (counter = 0; counter < usr_array.length; ++counter){
		if (Number.isInteger(usr_array[counter]) == false){
			usr_array.splice(counter, 1);
			return remv_non_Intnum(usr_array);
		}
	}
	var copy_arr = usr_array.slice(0, usr_array.length);
	return copy_arr;
}

function remv_element_pos(usr_array, remv_ele){
	var new_remv_ele;
	if (Number.isInteger(remv_ele) == false){
		alert("THIS IS NOT AN INTEGER");
		return -1;
	}
	else{
		// binary search will find the number and return the position for the 
		// splice function will delete the element
		// the sort function will take that number in the right position
		var pos = binary_search(usr_array, 0, (usr_array.length - 1), remv_ele)
		if (pos == -1){
			new_remv_ele = prompt("Please enter the number you want to delete at here !!!");
			new_remv_ele = Number(new_remv_ele);
			remv_element_pos(usr_array, new_remv_ele);
		}
		else{
			usr_array.splice(pos, 1);
			usr_array = insertion_sort_func(usr_array);
			var copy_arr = usr_array.slice(0, usr_array.length);
			return copy_arr;
		}
		
	}	
}

function insert_element(usr_array, insert_ele){
	if (Number.isInteger(insert_ele) == false){
		alert("THIS IS NOT AN INTEGER");
		return -1;
	}
	else{
		// splice function will add the element into the first index 
		// the sort function will take that number in the right position
		usr_array.splice(0, 0, insert_ele);
		usr_array = insertion_sort_func(usr_array);
		var copy_arr = usr_array.slice(0, usr_array.length);
		return copy_arr;
	}
}

function creat_arr(){
	var usr_array = [];
	var counter;

	for (counter = 0; counter < 9; ++counter){
		usr_array[counter] = prompt("Enter the element at here: ");
		usr_array[counter] = Number(usr_array[counter]);
	}

	//Sort the array
	usr_array = remv_non_Intnum(usr_array)
	usr_array = insertion_sort_func(usr_array);
	alert(usr_array);
}