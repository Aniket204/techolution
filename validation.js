function checkForm()
{
    var elements = document.forms[0].elements;

    var cansubmit= true;
    for(var i = 0; i < elements.length; i++)
    {
        if(elements[i].value.length == 0 && elements[i].type != "button")
        {
            cansubmit = false;
        }
    }
    document.getElementById("btn-submit").disabled = !cansubmit;  
};