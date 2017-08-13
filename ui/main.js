console.log('main.js Loaded!');
var counterButton= document.getElementById("counterButton"),
    counterValue=document.getElementById('count');
    //counter=0;
    
    /**
     *what we are doing is creating a dynamic web page named counter returns count of page opened (starts counting from the first load of the server.js)
     * then using /home page by the btton and using xml htro req object we calling the counter page in background and retrieving the counter
     * dunamically then capturing into a var then by converting into the string
     * printing in tje span beside the button in home....
     * its a simple viewers couunter wihtout any API.. and NOCOST  
     */
    
counterButton.onclick= function(){
    //within page sample
    //counter=counter+1;
    //counterValue.innerHTML="&nbsp;&nbsp;"+counter.toString()+"&nbsp;&nbsp;";


    //different pages linking

    //create  request for counter page values
    var request = new XMLHttpRequest;
    
    //capture the reqiest and store it in a variable
     request.onreadystatechange = function(){
        if(request.readyState==XMLHttpRequest.DONE){
            if(request.status==200){
                var counter=request.responseText;
                counterValue.innerHTML="&nbsp;&nbsp;"+counter.toString()+"&nbsp;&nbsp;";   
            }
        }
     };

     //making a request
     request.open('GET','/counter',true);
     request.send(null);
};