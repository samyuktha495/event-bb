const g=document.getElementById("grandparent");
g.addEventListener("click",(e)=>{
   
    console.log("grand parent clicked");
        g.style.backgroundColor="lightblue";
   
},true)
const p=document.getElementById("parent")
p.addEventListener("click",(e)=>{
    setTimeout(()=>{
// e.stopPropagation()
    console.log(" parent clicked");
        p.style.backgroundColor="yellow";
    },2000)
   
},true)
const c=document.getElementById("child")
c.addEventListener("click",(e)=>{
    console.log("child clicked");
        c.style.backgroundColor="orange";
   
},true)