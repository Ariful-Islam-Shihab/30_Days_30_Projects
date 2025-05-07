
document.getElementById('bttn').addEventListener('click',generateQR)
const qrImage=document.getElementById('qrImage')
const imgBox=document.getElementById('imgBox')
const qrtext=document.getElementById('qrText')

function generateQR(){
    if(qrtext.value.length>0){
        console.log('here')
        qrImage.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+qrtext.value
        imgBox.classList.add('showBox')

    }else{
        qrtext.classList.add('error')
        setTimeout(()=>{
            qrtext.classList.remove('error')
        },1000)
    }
}