function current_date(){
    const today = new Date();
    let dates=0;
    let month=0;
    if ((today.getDate()<=9) && (today.getMonth())){
        dates="0"+today.getDate();
        month="0"+(today.getMonth()+1);
    }
    else
    {
        dates=today.getDate();
        month=(today.getMonth()+1);
    }
    const date = dates+"-"+month+"-"+today.getFullYear();
    document.getElementById('demo').innerHTML=date; 
    
}
function claculate_age(){
    let dob = String(document.getElementById("DOB").value);
    let today = new Date();
    let dob_string=dob.split("-")
    let age =((today.getFullYear() -Number(dob_string[0]) ) );
    document.getElementById("Age").innerHTML = "You are " + age + " years old.";
    

    
}
