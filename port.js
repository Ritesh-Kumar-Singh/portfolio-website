function tabChange(value)
{
   var tablinks=document.getElementsByClassName('tab-link');
   for(var tablink of tablinks){
        if(tablink.classList.contains('active')){
            tablink.classList.remove('active');
        }
   }
   var tabcontents=document.getElementsByClassName('t-c');
   for(var tabcontent of tabcontents)
   {
       if(tabcontent.classList.contains('active'))
       {
            tabcontent.classList.remove('active');
       }
   }

   event.currentTarget.classList.add('active');
   document.getElementById(value).classList.add('active');

}

var myul=document.getElementById("nav-ul");
   function openmenu()
   {
       myul.classList.add('active'); 
   }

   function closemenu()
   {
       myul.classList.remove('active'); 
   }


   const scriptURL = 'https://script.google.com/macros/s/AKfycbzRsA37TAWgrZNat-iNFDDzIHdj10MuEWEQX5iFBiP_mw0fzWGwgwI89-AxKN8ZDin--w/exec'
   const form = document.forms['submit-to-google-sheet']
 
   form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
       .then(response => {
           var formmsg=document.getElementById("form-msg");
           formmsg.innerHTML=" form submitted successfully!!!"
           setInterval(function(){
                formmsg.innerHTML="";
           },5000)
           form.reset();
       })
       .catch(error => console.error('Error!', error.message))
   })