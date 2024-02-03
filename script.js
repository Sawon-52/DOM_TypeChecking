const text = document.querySelector('#text');
// console.log(text);
const deleteButton = document.querySelector('#button');

text.addEventListener('keyup', function(event){
    const inputValue = event.target.value;

    if(inputValue === 'Delete'){
        deleteButton.removeAttribute('disabled');

    }
    else{
        deleteButton.setAttribute('disabled','true');
    }
    
})


deleteButton.addEventListener('click', function(){
    const title = document.querySelector('.title');
    // console.log(title);
    title.style.display='none';
})