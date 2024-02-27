const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
button.forEach((color) => {
     console.log(color);
    color.addEventListener('click',function(e)
    {
        console.log(e);
        console.log(e.target);
        switch(e.target.id)
        {
            case 'violet':
                body.style.backgroundColor = e.target.id;
                break;
            case 'indigo':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'green':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.background = e.target.id
                break;
            case 'orange':
                body.style.background = e.target.id
                break;
            case 'red':
                body.style.background = e.target.id
                break;
            default:
                body.style.backgroundColor = black;                       
        }
    })

})