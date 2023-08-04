function OnFocus(Id)
{
    document.getElementById(Id).className = "OnFocus";
}

function TextLeave(Id)
{
    document.getElementById(Id).className = "TextLeave";
}

function ClearText()
{
    document.getElementById("txtStdName").value = "";
    document.getElementById("txtFthrName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtRollNo").value = "";
    document.getElementById("txtbio").value = "";
    document.getElementById("txtChem").value = "";
    document.getElementById("txtPhy").value = "";
    document.getElementById("txtmath").value = "";
    document.getElementById("txteng").value = "";
}

function Submit()
{
    var val1 =  document.getElementById("txtStdName").value;
    var val2 = document.getElementById("txtFthrName").value;
    var val3 = document.getElementById("txtAge").value;
    var val4 = document.getElementById("txtRollNo").value;
    var val5 = parseInt(document.getElementById("txtbio").value);
    var val6 = parseInt(document.getElementById("txtmath").value);    
    var val7 = parseInt(document.getElementById("txtChem").value);
    var val8 = parseInt(document.getElementById("txtPhy").value);
    var val9 = parseInt(document.getElementById("txteng").value);

    if(val1 == "" || val2 == "" || val4 == "" || val5 == "" || val6 == ""  || val7 == "" || val8 == "" || val9 == "" )
    {
        alert("All Fields Are Mendotory To Go Next Process..")
        return;
    }
    
    var array = [val5, val6, val7, val8, val9]
    var totalobtain = 0;

    for(i=0; i < array.length; i++)
    {
        totalobtain += parseInt(array[i]);
    }

    document.getElementById("container").className = "Hidden";
    
    document.writeln("Student Name : " + val1 + " <br>");
    document.writeln("Father Name : " + val2 + " <br>");
    document.writeln("Age : " + val3 + " <br>");
    document.writeln("Roll No : " + val4 + " <br>");
    document.writeln("Total Marks : 500 <br>");
    document.writeln("Obtained Marks : " + totalobtain + " <br>");
    document.writeln("Percentage : " + 500 * 100 / totalobtain + " <br>");
}