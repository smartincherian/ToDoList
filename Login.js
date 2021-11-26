var exampleInputEmail1 = document.getElementById('exampleInputEmail1');
var signuppwd = document.getElementById('exampleInputPassword1');

var signupemaillabel = document.getElementById('signupemaillabel');
var signuppwdlabel = document.getElementById('signuppwdlabel');


function validatelogin(){

    if(exampleInputEmail1.value=="admin" && signuppwd.value=="12345") {

        return true;
                                    
                        } 
        
                else {
                    
                        alert ("Invalid User name / Password")
                        return false;
                    }
    
    }

