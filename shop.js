


const enter=document.getElementById("enter")
const sh=document.getElementById("sh");
const not=document.getElementById("not")
const dress1=document.getElementById("dress1")
const thanks=document.getElementById("thanks")

const pa=document.getElementById("pa")

enter.onclick=function()
{
    
      sh.textContent="Welcome Shopping";
}
const pay=document.getElementById("pay").onclick=function()
{
    if(dress1.checked || dress2.checked || dress3.checked  || dress4.checked || dress5.checked ||dress6.checked || dress7.checked )
    {
       if(pay1.checked || pay2.checked || pay3.checked || pay4.checked )
       {
        pa.textContent=`payment is completed`
        pa.textContent=`thanks for shopping`
       }
      else{
        pa.textContent=`paymet not select `
     
      }
    }
      else
      {
        pa.textContent=`your are not shopping`
      }
    }
