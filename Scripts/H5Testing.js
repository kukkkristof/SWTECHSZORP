function openMenu(id)
{
    let el =document.getElementById(id);
    console.log(el);
    if(el.classList.contains('open'))
    {
        el.classList.remove('open');
        el.classList.add('closed');
        el.style.maxHeight = `0`;
    }
    else
    {
        el.classList.remove('closed');
        el.classList.add('open');
        el.style.maxHeight = `${el.scrollHeight}px`;
    }
}
