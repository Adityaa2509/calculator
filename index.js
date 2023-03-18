var input = document.getElementById('inputbox');
var buttons = document.querySelectorAll('button');

var string = "";
let arr = Array.from(buttons);
arr.forEach(button =>
    {
        button.addEventListener('click',(e)=>
         {
        //     The target property returns the element where the event occured.
            if(e.target.innerText == '=')
            {
                if(string[string.length-1] == '+' ||string[string.length-1] == '-'||
                string[string.length-1] == '*'||
                string[string.length-1] == '/'||
                string[string.length-1] == 'AC'||
                string[string.length-1] == 'DEL')

{
    string="";
    input.value = string;
    window.alert("Invalid input");

}
else{
                string = eval(string);
                input.value = string;
       }       }
            else if(e.target.innerText=='AC'){
            string = "";
        input.value=string;    
        }
        else if(e.target.innerText=='DEL'){
            string = string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string += e.target.innerText;
            input.value=string;
        }
        })
    })
