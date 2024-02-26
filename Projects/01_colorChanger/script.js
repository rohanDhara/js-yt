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
            case 'gold':
                body.style.backgroundColor = e.target.id;
                break;
            case 'aqua':
                body.style.backgroundColor = e.target.id;
                break;
            case 'palevioletred':
                body.style.backgroundColor = e.target.id;
                break;
            case 'chartreuse':
                body.style.backgroundColor = e.target.id;
                break;
            case 'sienna':
                body.style.background = e.target.id
                break;
            case 'firebrick':
                body.style.background = e.target.id
                break;
            case 'midnightblue':
                body.style.background = e.target.id
                break;
            case 'palegoldenrod':
                body.style.background = e.target.id
                break;
            case 'teal':
                body.style.background = e.target.id
                break;
            default:
                body.style.backgroundColor = black;                       
        }
    })

})