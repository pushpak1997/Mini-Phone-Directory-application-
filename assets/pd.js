//alert("hello");
$("#mytable").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).parent().remove();
	});
	event.stopPropagation();
});

function validateForm() {
	var error=0;
    var a = document.forms["contactinfo"]["cname"].value;
    var b = document.forms["contactinfo"]["cnumber"].value;
    //document.getElementById('cname_error').innerHTML = '';
    if((a == null || a == "") &&(b == null || b == "")){
        error++;
        alert("Both field must be filled out");
    }
    else if (a == null || a == "") {
        error++;
        alert("Name must be filled out");
    }

     //document.getElementById('cnumber_error').innerHTML = '';
    else if (b == null || b == "") {
        error++;
        alert("Number must be filled out");
    }
    else{

    }

    if(error>0){
    	return false;
    }
    
}
$("#myForm").submit(function(){
  	//alert("Submitted");

	var t1 = $("input[name='cname']",this).val();
	var t2 = $("input[name='cnumber']",this).val();
	if(t1==null||t1==""||t2==null||t2==""){
		//alert("Please Fill All Required Field");
	}
	else{
		//$("ul").append("<li>"+t1+" "+t2+"<span>X</span></li>");
		$("#mytable").append("<tr>"
		    +"<td>"+t1+"</td>"+
		    "<td>"+t2+"</td>"+ 
		    "<td><span id='delete'>Delete</span></td>"+
		  "</tr>	");
	}
	//$(this).val("");

	
});