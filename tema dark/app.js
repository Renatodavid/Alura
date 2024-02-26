'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click',function(){
    document.body.classList.toggle('ligth-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "litght-theme"){
        this.textContent = "dark";
    }else{
        this.textContent = "ligth";
    }
    console.log('current class name:'+ className);
});

