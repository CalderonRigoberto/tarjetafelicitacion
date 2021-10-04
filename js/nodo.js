(function(){
    document.getElementById('carta').style.display='flex';
    document.getElementById('carta').innerHTML = sessionStorage.getItem('carta');

})();