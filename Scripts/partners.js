document.querySelectorAll("button").forEach(e => {
    e.addEventListener("mouseover",el=>{
        el.target.style.backgroundColor="black"
    });
});

document.querySelectorAll("button").forEach(e => {
    e.addEventListener("mouseout",el=>{
        el.target.style.backgroundColor="#d7282f"
    });
});