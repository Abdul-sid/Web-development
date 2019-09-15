function insert (num){
    document.form.textview.value=document.form.textview.value+num ;
}


function result (){
    var res = document.form.textview.value ;
    
     if(res){
         
         document.form.textview.value = eval(res) ;
         
     }
    
}

function clean(){
    document.form.textview.value = "";
}

function backspace(){
    var back = document.form.textview.value ;
   document.form.textview.value = back.substring(0 , back.length-1);
    
}