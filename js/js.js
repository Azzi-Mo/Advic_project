

let val = document.querySelector('.val')
let sp = document.querySelector('.sp')

function c()
{
    fetch(`https://api.adviceslip.com/advice`)
.then(
  (resolve) => { return resolve.json() }
)
.then(

    (res) => { 
        
        val.innerHTML = "'' " + res.slip.advice +  " ''" 
        // console.log( res.slip.advice ) 
        return res
        

    }

)
.then(
    (res) => { 
        // console.log( res.slip.id ) 
       sp.innerHTML = '#' + res.slip.id
        
    }
) 
}

but = document.querySelector('#but')
but.onclick = function()
{
    c()
}


window.onload = function()
{
    // val.innerHTML = res.slip.advice
    c() 
    if(val.innerHTML == "")
    {
        c()
    }
    else
    {
        but.onclick = function()
        {
            c()
        }
    }

}