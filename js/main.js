let data=document.getElementById("userInfo");

let buttonTag=document.getElementById("submit"); //button
let nameTag=document.getElementById("name");  //name
let batchTag=document.getElementById("batch");  //batch
let roleTag=document.getElementById("role");  //role
let imageTag=document.getElementById("file");  //image file

  let empty=[]; //create empty array
  
buttonTag.addEventListener("click",function(){
	let name=nameTag.value;
	let batch=batchTag.value;
	let role=roleTag.value;
	let file=imageTag.value;
	let Id=Math.floor(Math.random()*20);
	
	
	 let obj={}  //create empty object
	 
	     obj.name=name;
		 obj.batch=batch;
		 obj.role=role;
		 obj.file=file;
		 obj.Id=Id;
		    empty.push(obj);  // push on array
	 
	
	nameTag.value="";  
	batchTag.value=""; 
	roleTag.value=""; 
	imageTag.value=""; 
	
	console.log(empty);
})