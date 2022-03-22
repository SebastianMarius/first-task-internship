
function EncryptIt(){

		let characters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
"Q", "R",  "S", "T", "U", "V",  "W", "X", "Y", "Z",  "0", "1",  "2", "3", "4", "5", "6", "7",  
"8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];
	
		let userText=document.getElementById("userMsg").value.toUpperCase();
		let userKey=document.getElementById("userSecretKey").value.toUpperCase();

		let charArrayUsrTxt= userText.split('');
		let charArrayUsrKEY=userKey.split('');

		let keyIndex=0;
		
		let indexOfSum=0;
		let indexOfResult="";

		for(i=0; i<charArrayUsrTxt.length; ++i){

			
			if(keyIndex==charArrayUsrKEY.length){

				keyIndex=0;
			}
		
			indexOfSum=characters.indexOf(charArrayUsrTxt[i]) + characters.indexOf(charArrayUsrKEY[keyIndex]);

			if(indexOfSum>=characters.length){
				indexOfSum=indexOfSum-characters.length;
				
			}

			indexOfResult=indexOfResult+ characters[indexOfSum];
			console.log(indexOfResult);
			
			keyIndex++;

		}

		document.getElementById("test").innerHTML=indexOfResult;
		

}

function test(){console.log("test")}

function decrypt(){

		let characters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
"Q", "R",  "S", "T", "U", "V",  "W", "X", "Y", "Z",  "0", "1",  "2", "3", "4", "5", "6", "7",  
"8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];
	
		let userText=document.getElementById("userMsg").value.toUpperCase();
		let userKey=document.getElementById("userSecretKey").value.toUpperCase();

		let charArrayUsrTxt= userText.split('');
		let charArrayUsrKEY=userKey.split('');

		let keyIndex=0;
		
		let indexOfSum=0;
		let indexOfResult="";

		for(i=0; i<charArrayUsrTxt.length; ++i){

			
			if(keyIndex==charArrayUsrKEY.length){

				keyIndex=0;
			}
		
			indexOfSum=characters.indexOf(charArrayUsrTxt[i]) - characters.indexOf(charArrayUsrKEY[keyIndex]);

			if(indexOfSum<0){
				indexOfSum=characters.length-characters.indexOf(userKey);
			}



			indexOfResult=indexOfResult+ characters[indexOfSum];
			console.log(indexOfResult); 
			keyIndex++;

		}

		document.getElementById("test").innerHTML=indexOfResult;
		

}