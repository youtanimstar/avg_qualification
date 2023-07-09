let y = document.querySelector('.val');
let z;
y.addEventListener('click', ()=>{ 
    const c =document.querySelector('.in').value
    const cs = document.querySelector('.in1').value
    const ct = document.querySelector('.in2').value
    const da = `(${c}+${cs}+${ct})/3`
    console.log(eval(da))
  const  d= eval(da)
    if(d>90)
    {
    document.querySelector('.ans').value= "qualified"
    }
    else
    {
        document.querySelector('.ans').value= " not qualified"
    }

})
