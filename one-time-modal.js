function OneTimeModal(){
    const keycheck=localStorage.getItem("onetimemodal");
    if(keycheck==null){
        // If you have never displayed a modal
        document.querySelector("body").style.overflow="hidden";
        document.querySelector(".OTmodal-wrapper").style.display="flex";
        localStorage.setItem("onetimemodal","displayed");
    }else{
        // If you have displayed a modal at least once
        console.log("Do not display the modal.")
    }
}

function CloseModal(){
    document.querySelector(".OTmodal-wrapper").style.display="none";
    document.querySelector("body").style.overflow="auto";
}

function KeyReset(){ //For testing
    localStorage.removeItem("onetimemodal");
    alert("Key has been reset.")
}

window.onload=()=>{
    document.querySelector(".OTmodal-wrapper").style=modalwrapper;
    document.querySelector(".onetimemodal").style=modalcss;
}

// You can change modal's style here
const modalwrapper="position:fixed; top:0%; left:0%;"+
                  "width:100vw;"+
                  "height:100vh;"+
                  "z-index:10;"+
                  "display:none;"+
                  "justify-content:center; align-items:center;"+
                  "background-color:inherit;"

const modalcss="display:flex;"+ 
               "justify-content:center; align-items:center; flex-direction:column; gap:50px;"+ 
               "font-size:1em;"+ 
               "background-color:rgb(241, 245, 249);"+ 
               "color:rgb(72, 72, 72);"+ 
               "max-width:90vw;"+
               "padding:50px;"+
               "max-height:80vh;" +
               "border-radius:20px;"
              

