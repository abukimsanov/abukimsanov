let a = document.querySelectorAll('div')   
a.forEach(element => {
    element.addEventListener('click', (e) =>{
        e.target.remove()
    })
});

    

    