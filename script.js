function addSquare(boxsize){
    const newDiv=document.createElement("div");
    newDiv.classList.add("box");
    newDiv.style.height=boxsize+"px";
    newDiv.style.width=boxsize+"px";
    const container = document.querySelector(".container");
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
    if (Number.isNaN(size) || size <= 0 || size > 100) {
        alert("Please enter a number between 1 and 300");
        return;
    }
    createGrid(size);
    console.log("created grid of size "+size);
    
});