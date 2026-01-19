function addSquare(boxsize){
    const newDiv=document.createElement("div");
    newDiv.classList.add("box","darken");
    newDiv.style.height=boxsize+"px";
    newDiv.style.width=boxsize+"px";
    const container = document.querySelector(".container");
    newDiv.addEventListener('mouseenter',(e)=>{
        hoverEffect(e.currentTarget);
        // console.log(e.currentTarget);
    });
    
    container.appendChild(newDiv);
}

function createGrid(size){
    const container=document.querySelector(".container");
    container.innerHTML="";
    const computedStyle = window.getComputedStyle(container);

    const parentSize= parseFloat(computedStyle.height);//contains trainling 'px' that is ignored by parsefloat but not by Number
    console.log(typeof(parentSize));
    
    console.log("parentsize"+parentSize);
    const boxsize=parentSize/size;
    console.log("boxsize"+boxsize);
    
    for(let i=0;i<size*size;i++){
        addSquare(boxsize);
    }
}

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click",()=>{
    let size = prompt("Enter size of grid:");
    if (size === null) return;
    size = Number(size);
    if (Number.isNaN(size) || size <= 0 || size > 300) {
        alert("Please enter a number between 1 and 300");
        return;
    }
    createGrid(size);
    console.log("created grid of size "+size);
    
});

//hover effect function used in event listener earlier when ccreaing box
function hoverEffect(box){
    let currentOpacity = parseFloat(window.getComputedStyle(box).opacity);
    console.log("opacity "+currentOpacity);
    
    
    if (currentOpacity===1.0){
        return;
    }
    currentOpacity+=0.1;
    box.style.opacity=currentOpacity;
    
}



//initial page load
createGrid(2);

//
// hover event added when creating the box
//could not find way to do that later