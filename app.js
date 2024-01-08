const section= document.querySelectorAll(".section");
const selecBtns= document.querySelectorAll(".controlls");
const selecBtn= document.querySelectorAll(".control");
const allSections= document.querySelector(".main-content");

function Page(){
    //button click active class
    for(let i=0; i < selecBtn.length; i++){
        selecBtn[i].addEventListener("click", function() {
            let currentBtn= document.querySelectorAll(".active-btn");
            currentBtn[0].className= currentBtn[0].className.replace("active-btn", "");
            this.className +=" active-btn";
        })
    }
    //sections active class
    allSections.addEventListener("click", (e) =>{
        const id= e.target.dataset.id;
        if(id){
            selecBtns.forEach((btn) =>{
                btn.classList.remove("active")
            })
            e.target.classList.add("active")

            //hide other sections
            section.forEach((section)=>{
                section.classList.remove("active")
            })

            const element=document.getElementById(id);
            element.classList.add("active");
        }
    }) 

    //toggle theme
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click",() =>{
        let element = document.body;
        element.classList.toggle("light-mode");
    })

}
Page();

