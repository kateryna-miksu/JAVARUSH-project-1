const minBtn = document.querySelector('.minus');
const plsBtn = document.querySelector('.plus');
const getQuan = document.querySelector('.quantity');

let count = 1;

plsBtn.addEventListener('click', function(event){
if(count < 10){
    count++
    getQuan.textContent = count;
}
})

minBtn.addEventListener('click', function(event){
    if(count > 1){
        count--
        getQuan.textContent = count;
    }
})



// faqs section

