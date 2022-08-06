const imgs = document.querySelectorAll('img');
console.log(imgs);
const btL = document.querySelector('#left');
const btR = document.querySelector('#right');
var counter = 0;
function loading(){
    for(i = 1; i<=4;i++){
        imgs[i].classList.add('hidden');
        // console.log(imgs[2].classList);
    }
}
loading();

btL.addEventListener('click',()=>{
    if(counter === 4){
        imgs[counter].classList.add('hidden');
        counter = 0;
        imgs[counter].classList.remove('hidden');
        return
    }else{
        imgs[counter].classList.add('hidden');
        counter += 1;
        imgs[counter].classList.remove('hidden');
    }
})
btR.addEventListener('click',()=>{
    if(counter === 0){
        imgs[counter].classList.add('hidden');
        counter = 4;
        imgs[counter].classList.remove('hidden');
        return
    }else{
        imgs[counter].classList.add('hidden');
        counter -= 1;
        imgs[counter].classList.remove('hidden');
    }
})