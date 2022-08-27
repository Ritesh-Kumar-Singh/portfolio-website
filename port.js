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