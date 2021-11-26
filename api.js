function ajax() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
                        var output ="";
	               for(var i=0;i<response.length;i++){
                    if(response[i].completed == true){
                        output += "<li><input type='checkbox' id='check' checked disabled>" + response[i].title +"</li>";
                    }
                    else{
                        output += "<li><input type='checkbox' id='check'>" + response[i].title +"</li>";
                    }
                    }
                
                var check = document.querySelectorAll('check');

                // if(response[i].completed == true){
                //     check.checked=true;
                //              }
                //      else{
                //      check.checked=false;
                //              }
                // check.checked=true;
                // console.log(check);
                // console.log(check.checked);
              
	    //  

                   }
	document.getElementById("list").innerHTML=output;
      }

    
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
   }
