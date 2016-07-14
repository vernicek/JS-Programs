/**
 * 
 */

function duplicate(array) {
   var arraznew = array.slice();
   debugger;
   for(var  i=0; i<array.length;i++){
      arraznew.push(array[i]);
      
   }
   return arraznew;
}

function loop() {
   for(var  i=0; i<100; i++){
	   if(i%3 === 0 && i%5 === 0){
		   console.log("fizzbuzz"); 
	   }else if(i%3 === 0){
    	  console.log("fizz"); 
	   }else if(i%5 === 0){
    	  console.log("buzz"); 
	   }else{
    	  console.log(i); 
	   }    
   }
}
function add(x) {
    return function(y) { 
    	return x + y; 
    };
}

function sum() {
    var i, l, result = 0;
    for (i = 0, l = arguments.length; i < l; i++) {
        result += arguments[i];
    }
    return result;
}

function ranking(array) {
	var newArray = [];
	
	for (var i = 0; i < array.length; i++) {
		if( i !== 0 && (array[i-1] < array[i])){
    			newArray.push(i+1);
    		}else{
    			newArray.push(array.indexOf(array[i])+1);
    		}
	}
    	return newArray;
}

function ranking2(array) {
	var newArray = [];
	var lastIndex = 1;
	
    	for (var i = 0; i < array.length; i++) {
    		if( i !== 0 && (array[i-1] < array[i])){
    			newArray.push(i+1);
    			lastIndex = i+1;
    		}else{
    			newArray.push(lastIndex);
    		}
    	}
    	return newArray;
}

function timeTo24(paTime) {

    var array = paTime.split(":");
	var hours = parseInt(array[0]);
    var minutes =  parseInt(array[1].slice(0,2)); 
    var am_pm = array[1].slice(2,4);

    if (am_pm == 'PM' || am_pm == 'pm' && hours<12) {
        hours = hours+12;
    }
    if (am_pm == 'AM' || am_pm == "am" && hours==12){
        hours = hours-12;
    }

    var sHours = hours.toString();
    var sMinutes = minutes.toString();

    if(hours<10){
        sHours = "0" + sHours;
    }
    if(minutes<10) {
        sMinutes = "0" + sMinutes;
    }

    return sHours + ":" + sMinutes; 
}

function timeTo12(paTime) {

    var array = paTime.split(":");
	var hours = parseInt(array[0]);
    var minutes =  parseInt(array[1]); 
    var am_pm ;

    if (hours < 1) {
        hours = hours+12;
        am_pm= "am";
    }
    else if (0 < hours && hours < 12){
    	am_pm= "am";
    }
    else if (11<hours && hours<13){
    	am_pm= "pm";
    }
    else if (12<hours){
    	hours = hours-12;
    	am_pm= "pm";
    }

    if(hours<10){
        sHours = "0" + sHours;
    }
    if(minutes<10) {
        sMinutes = "0" + sMinutes;
    }

    return sHours + ":" + sMinutes + am_pm; 
}

function square() {
    var t = parseInt(readLine());
    
    for(var a0 = 0; a0 < t; a0++){
         var n_temp = readLine().split(' ');
         var a = parseInt(n_temp[0]);
         var b = parseInt(n_temp[1]);
         var success =0;
         
         for(var i = a; i <= b; i++){
             if(Math.sqrt(i)% 1 === 0){
                success++;    
             }
         }
        console.log(succes);
    }
}


function isCavity(i,j,grid) {
    if(grid[i][j]>= grid[i+1][j] &&
       grid[i][j]>= grid[i-1][j] &&
       grid[i][j]>= grid[i][j+1] &&
       grid[i][j]>= grid[i+1][j-1] ){
        return true; 
    }else{
        return false;
    } 
}

function CavitiMap() {
    var n = 4;
    var grid = [[1,1,1,2],
                [1,9,1,2],
                [1,8,9,2],
                [1,2,3,4]];
   
    for(var i=1;i<n-1;i++){
        for(var j=1;j<n-1;j++){
            if(isCavity(i,j,grid)){
                grid[i][j] = "X";
            }
        }    
    }
    for(var i=0;i<n;i++){
    	var String ="";
    	for(var j=0;j<n;j++){
    		String = String + grid[i][j];   
        } 
    	console.log(String);   
    }
}

function pascal(paNumberOfRows){
	var triangular = [[1]];
	var row ;
	
	for(var i = 0 ; i<paNumberOfRows-1; i++){
		row = [1];
		for(var j = 1; j<triangular[i].length; j++){
			
			var number = triangular[i][j] + triangular[i][j-1];
			row.push(number);
		}
		
		row.push(1);
		triangular.push(row);
	}
	
	for(var i = 0 ; i<paNumberOfRows; i++){
		console.log(triangular[i].toString().replace(/,/g, " "));
	}
	
	return triangular;
}

function triagularPlus2(paNumberOfRows){
	var numberX = 1;
	var zakladna = paNumberOfRows*2 -1;
	for(var i = 0 ; i< paNumberOfRows; i++){		
		var row = "";
		for(var j = 0 ; j< ((zakladna - numberX) / 2); j++){
			row = row + " ";
		}
		for(var k = 0 ; k< numberX; k++){
			row = row + "X";
		}
		console.log(row);
		numberX+=2;
	}
}

function triagularPlus1(paNumberOfRows){
	var numberX = 1;
	var zakladna = paNumberOfRows*2 -1;
	for(var i = 0 ; i< paNumberOfRows; i++){		
		var row = "";
		for(var j = 0 ; j< ((zakladna - numberX) / 2); j++){
			row = row + " ";
		}
		for(var k = 0 ; k< numberX; k++){
			if(k%2 === 0){
				row = row + "X";	
			}else{
				row = row + " ";	
			}			
		}
		console.log(row);
		numberX+=2;
	}
}

