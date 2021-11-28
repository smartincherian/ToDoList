var j=0;
var k=0;

function ajax() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
                        var output ="";
	               for(var i=0;i<response.length;i++){
                    if(response[i].completed == true){
                        output += "<li><input type='checkbox' checked disabled>" + response[i].title +"</li>";
                    }
                    else{
                        output += "<li><input type='checkbox' class='checkB' onchange=count()>" + response[i].title +"</li>";
                    }
                    }
                
	document.getElementById("list").innerHTML=output;

            }}
    
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
   }

   function count(i){
    var checkB = document.getElementsByClassName('checkB');
    console.log(checkB);
    for(k=0;k<checkB.length;k++){
    if(checkB[k].checked==true){
        j=j+1;
    }
    }
    console.log(j);
     if(j>14){
                  alert("Congrats. 5 Tasks have been Successfully Completed");
              }
            }