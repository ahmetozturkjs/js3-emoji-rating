let stars=document.querySelectorAll(".fa-star");
let fars=document.querySelectorAll(".far");



stars.forEach((star,idx)=>{
    star.addEventListener("click",()=>{
        update(idx);
        chance(idx);    
        
    })
})

function update(e){
    stars.forEach((star,index)=>{
        if(index<e+1){
            star.classList.add("starbg")
        }
        else{
            star.classList.remove("starbg")
        }
    })
}

function chance(e){
    fars.forEach((far,faridx)=>{
        if(faridx==e){
            far.classList.remove("dnone")
        }
        else{
            far.classList.add("dnone")
        }
    })
}