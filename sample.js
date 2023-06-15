<html>  
<head>  
<script>  
function ageCalculator() {  
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
      

    var month_diff = Date.now() - dob.getTime();  
      
 
    var age_dt = new Date(month_diff);   
         
    var year = age_dt.getUTCFullYear();  
      
    var age = Math.abs(year - 1970);  
      
    return document.getElementById("result").innerHTML =    
             "Age is: " + age + " years. ";  
    }  
}  
</script>  
</head>  
<body>  
<center>  
<h2 style="color: blue" align="center"> Calculate Age from Date of Birth <br> <br> </h2>   
  <hr>
  
<b style="color: rgb(42, 50, 8);"> Enter Date of Birth: <input type=date id = DOB> </b>  
<span id = "message" style="color:rgb(132, 13, 188)"> </span> <br><br>    
  

<button type="submit" onclick = "ageCalculator()"> Calculate age </button> <br><br>  
<h3 style="color:blue" id="result" align="center"></h3>   
</center>  
</body>  
</html> 
