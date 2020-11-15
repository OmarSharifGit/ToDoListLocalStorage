var list = document.querySelector('#list'),
      form = document.querySelector('form'),
      item = document.querySelector('#item');

function store() {
    window.localStorage.myitems = list.innerHTML;
}

  form.addEventListener('submit',function(e){
    list.innerHTML +='<li>'+ item.value +'</li>';
    store();
    item.value = "";
  })
  

  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  })
  

  
  function getValues() {
    var storedValues = window.localStorage.myitems ;
    if(!storedValues) {
      list.innerHTML = '';
    }
    else {
      list.innerHTML = storedValues;
    }
    
  }
  getValues();
