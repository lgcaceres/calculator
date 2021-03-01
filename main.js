//const result = document.getElementById('out')
let output='';
let b='';

const operation = (first,second,op) =>{
    let c;
    switch(op) {
        case 'plus':
            c= eval(first) + eval(second);
            break;
        case 'minus':
            c= eval(first) - eval(second);
            break;
        case 'times':
            c= eval(first) * eval(second);
            break;
        case 'divide':
            c= eval(first) / eval(second);
            break;    
        }

    return c;
    //setOutput(c); -->Is empty
}

window.addEventListener('click', (e)=>{
    
    let button = e.target.id;    
    switch(button) {
        case 'clear':
            output='';
            document.getElementById('out').textContent=output;
            break;
        case 'delete':
            output=output.substring(0,output.length-1);
            document.getElementById('out').textContent=output;
            break;
        default:
            output+=e.target.id;
            document.getElementById('out').textContent=output;
            break;
        }
    
})

