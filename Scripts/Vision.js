const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else
        {
            if(anim) entry.target.classList.remove('show');
        }
    });
});
let anim = true;
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

function toggleElement(id)
{
    let el = document.getElementById(id);
    if(el.classList.contains('visible'))
    {
        el.classList.add('invisible');
        el.parentElement.style.gridTemplateRows = "0fr";
        el.classList.remove('visible');
    }
    else
    {
        el.parentElement.style.gridTemplateRows = "1fr";
        el.classList.add('visible');
        el.classList.remove('invisible');
    }
}

function DRA(lang)
{
    anim = !anim;
    if(lang==='en') document.getElementById("AnimButton").innerHTML = (anim?'Disable':'Enable') + ' Recurring Animations';
    else document.getElementById("AnimButton").innerHTML = 'Visszatérő Animációk ' + (anim?'Kikapcsolása':'Bekapcsolása');
}