let toastBox=document.getElementById('toastBox')
// document.getElementById('btns').addEventListener('click',showToast)

let successMsg='<i class="fa-solid fa-circle-check"></i>Successfully submitted'
let errorMsg='<i class="fa-solid fa-xmark"></i>Please fix the error'
let invalidMsg='<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again!'
function showToast(msg){
    let toast=document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML=msg;
    toastBox.appendChild(toast);
    if(msg.includes('error')){
        toast.classList.add('error')
    }else if(msg.includes('Invalid')){
        toast.classList.add('invalid')
        
    }else{
        toast.classList.add('success')

    }
    setTimeout(()=>{
        toast.remove()
    },6000)
}