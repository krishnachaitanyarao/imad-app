console.log('main.js Loaded!');
var counterButton= document.getElementById("counterButton"),
    counterValue=document.getElementById('count');
var nameInput=document.getElementById('textInput'),
    submitBtn=document.getElementById('submit-btn');
var list='';
    //counter=0;
    
    /**
     *what we are doing is creating a dynamic web page named counter returns count of page opened (starts counting from the first load of the server.js)
     * then using /home page by the btton and using xml htro req object we calling the counter page in background and retrieving the counter
     * dunamically then capturing into a var then by converting into the string
     * printing in tje span beside the button in home....
     * its a simple viewers couunter wihtout any API.. and NOCOST  
     */


    //for already clicked count retrival

    
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
submitBtn.onclick=function(){
    var request= new XMLHttpRequest;
    request.onreadystatechange = function(){
        if(request.readyState==XMLHttpRequest.DONE){
            if(request.status==200){
                var names=request.responseText;
                names=JSON.parse(names);
                list="";
                for(var i=0;i<names.length;i++){
                    list += '<li>'+names[i]+'</li>';
                  
                }
                var ulList=document.getElementById('nameList');
                ulList.innerHTML=list;
            }
        }
    };
    var name=nameInput.value;
    request.open('GET','/submit-btn?name='+name,true);
    request.send(null);

};
var cmnButton=document.getElementById("submit-cmn");
cmnButton.onclick=function(){
    var cmnName=document.getElementById('commentorName'),
        cmnText=document.getElementById('commentorText');
        var cmnRequest= new XMLHttpRequest;
        var list='';
        cmnRequest.onreadystatechange=function(){
            if(cmnRequest.readyState=XMLHttpRequest.DONE){
                if(cmnRequest.status==200){
                    var cmnData=cmnRequest.responseText;
                    cmnData=JSON.parse(cmnData);
                    list='';
                    //todo
                    list="<li>"+A+"<br/>"+B +"</li>"
                }
                var cmnList=document.getElementById('cmnList');
                cmnList.innerHTML=list;

            }
        };
        cmnRequest.open('GET','/comment?cmnName='+cmnName.value+'&cmnText='+cmnText.value,true);
        cmnRequest.send(null);

        
};