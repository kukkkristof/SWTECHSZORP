const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }
    });
});

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