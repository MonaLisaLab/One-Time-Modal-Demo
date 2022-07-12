function OneTimeModal(){
    document.querySelector("body").style.overflow="hidden";
    document.querySelector(".onetimemodal").style.display="flex";
    localStorage.setItem("onetimemodal","displayed");
}

function CloseModal(){
    document.querySelector(".onetimemodal").style.display="none";
    document.querySelector("body").style.overflow="auto";
}

function KeyReset(){ //For testing
    localStorage.removeItem("onetimemodal");
    alert("Key has been reset.")
}

window.onload=()=>{
    document.querySelector(".onetimemodal").style=modalcss;
    const keycheck=localStorage.getItem("onetimemodal");
    if(keycheck==null){
        // If you have never displayed a modal
        OneTimeModal();
    }else{
        // If you have displayed a modal at least once
        console.log("Do not display the modal.")
    }
}

// You can change modal's style here
const modalcss="position:fixed; top:50%; left:50%;"+ 
               "transform:translate(-50%,-50%);"+  
               "display:none;"+ 
               "justify-content:center; align-items:center; flex-direction:column; gap:50px;"+ 
               "font-size:1em;"+ 
               "background-color:rgb(241, 245, 249);"+ 
               "color:rgb(72, 72, 72);"+ 
               "max-width:90vw;"+
               "padding:50px;"+
               "max-height:80vh;" +
               "border-radius:20px;"
              

