




function time(){
    var a = 0;
setInterval(function(){
    a = a + Math.floor(Math.random()*20)
    
    if(a<100){
        
        document.querySelector(".loader h1").innerHTML = a+"%"
    }
    else{
        a = 100
        document.querySelector(".loader h1").innerHTML =  a+"%"
    }
    
}
,150)
}








const tl = gsap.timeline()


tl.to(".loader h1",{
    onStart:time(),
    duration:1.5
})

tl.to(".loader", {
    top:"-100%",
    delay:.5,
    duration:1.5,
    
})  

tl.from(".left h1", {
    y:-40,
    opacity:0,
    
    
    duration:.2
    
})

tl.from(".right ul li", {
    y:-40,
    delay:.2,
    opacity:0,
    stagger:.1
    
})



tl.from(".home .mytext h1,.home .mytext p,.home .mytext span ", {
    x:-100,
    opacity:0,
    stagger:.1  
})

tl.from(".home .icon", {
    x:100,
    opacity:0,
    

})


const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".skill h1",
        scroller:"body",
        
        
        start:"top 65%"
      
    }
})

tl2.from(".skill h1", {
    x:-100,
    opacity:0,
  
})

tl2.from(".lists ul li",{
    x:-100,
    opacity:0,
    delay:.2,
    stagger:.1
})

tl2.from('.note', {
    opacity:0
})







var drawer = document.querySelector(".right");
function cllick(){
    

drawer.classList.toggle('active')
    
}
document.onclick = function(e){
     console.log(e.target.id)
    if(e.target.id !== 'menu' && e.target.id !== 'slider'){

        drawer.classList.remove('active')
        
    }
}

    





