
 function updateText(){

    document.getElementById('text-output').innerText=document.getElementById('text-input').value;
  }
  

  function makeBold(elem){
   
    document.getElementById('text-output').classList.toggle("bold");
  }
  
 
  function makeItalic(elem){
    document.getElementById('text-output').classList.toggle("italic");
  }
  
 
  function makeUnderline(elem){
      
      document.getElementById('text-output').classList.toggle("underline");
  }
  

  function alignText(elem, alignType){
    
    document.getElementById('text-output').style.textAlign=alignType;
    let alignButtons=document.getElementsByClassName('align');
    for(let i=0;i<alignButtons.length;i++){
      alignButtons[i].classList.remove('active');
    }
    elem.classList.toggle('active');
  }

  function changeColor(elem){
    document.getElementById('text-output').style.color=elem.value;
  }