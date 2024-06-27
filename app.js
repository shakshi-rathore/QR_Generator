const btn=document.querySelector('.gen');
const cancel=document.querySelector('.cancel');
const inp=document.querySelector('.input');
let img=document.querySelector('#QRimg');
const imgcon=document.querySelector('.img')
const loading=document.querySelector('.loading');
btn.addEventListener('click', () => {
     if(inp.value==="")
          {
               inp.placeholder="type something....."
               inp.classList.add('empty');
          }
          else{
               inp.placeholder="Text or URL...";
               inp.classList.remove('empty');
               imgcon.classList.remove('none');
      img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp.value}`;
      img.addEventListener('load',()=>{
          loading.classList.add('none');
          img.classList.remove('none');
          img.height="200";
          img.width="200";

     })
     }
})
cancel.addEventListener('click', () => {
     inp.placeholder="Text or URL...";
     inp.classList.remove('empty');
    imgcon.classList.add('none');
    loading.classList.remove('none');
     img.src="";
     img.height="";
     img.width="";
     inp.value="";
  
})