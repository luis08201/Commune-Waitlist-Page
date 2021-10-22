const toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    const nav = document.getElementById('menu');
    nav.classList.toggle('active');

    if(toggleBtn.classList.contains('fa-bars')){
        toggleBtn.classList.add('fa-times');
        toggleBtn.classList.remove('fa-bars');
    }else{
        toggleBtn.classList.remove('fa-times');
        toggleBtn.classList.add('fa-bars');
    }
})