const progress=document.getElementById('progress')
const prev=document.getElementById('prev')
const next=document.getElementById('next')
const circles=document.querySelectorAll('.circle')            //to select all the class of circle 


let currentActive=1

next.addEventListener('click', () =>{                              // console will react on click
    currentActive++                                                //will increament the currentActive in every click
    
   if(currentActive>circles.length){                              //here we are running a if loop with condition that 
                                                                    //the blue line should not exceed the no of circles 
       currentActive=circles.length   
                                 }                              // if thats greater then currentActive will assign to circke length 
       update()
   } )   
   
                                                                                            //same as treating array
prev.addEventListener('click', () =>{
    currentActive--

    if(currentActive<1){                                     //if the lenght is full i.e when the currentActive is at the end of circles then by clickking on prev button  the currentActive will decrement by 1 and the last value i.e is 1st circle will be the stop point so we set the if(currentActive<1){ currentActive = 1}// it is the min val

        currentActive=1
    }
    update()
})

function update(){
    circles.forEach((circle, idx) =>{
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
      
    })

    const actives=document.querySelectorAll('.active')
    progress.style.width= (actives.length-1) / (circles.length-1)*100 +'%'
    

    if(currentActive===1){
        prev.disabled=true
    }else if(currentActive===circles.length){
        next.disabled=true
    }else{
        prev.disabled=false
        next.disabled=false
    }
}
