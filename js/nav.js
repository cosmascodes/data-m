const a = document.querySelector('#menu')
const b = document.getElementById('menu-trigger')
const c = document.getElementById('nav_items').children

a.addEventListener('click',(e)=>{
    for (let index = 0; index < c.length; index++) {
        const list = c[index];
        if(list.classList == "active"){
            list.classList.remove("active")
        }else{
            e.target.classList.add('active')
        }
    }
})