function OpenPage(page){

    let menu = document.getElementById(page);
    let parent = menu.parentNode;
    for(let i = 0; i < parent.children.length; i++)
    {
        if(parent.children[i].classList.contains('screen'))
        {
            parent.children[i].hidden = true;
        }
    }
    menu.hidden = false;
}

let colorblind = 0;

function changeColorBlind()
{
    colorblind++;
    if(colorblind === 4) colorblind = 0;
    let imgs = document.getElementsByClassName('gameImage');
    document.getElementById('Cbtn').innerHTML = 'COLORBLIND: ' + colorblind;
    for (let i = 0; i < imgs.length; i++)
    {
        imgs[i].style.filter = 'hue-rotate(' + colorblind * 90 + 'deg)';
    }
}

let selectedSlot = 0;

function selectSlot(slotNum)
{
    if(slotNum != selectedSlot)
    {
        let sBar = document.getElementById('slotBar');
        for(let i = 0; i < sBar.children.length; i++)
        {
            sBar.children[i].classList.remove('selected');
        }
        selectedSlot = slotNum;
        sBar.children[selectedSlot].classList.add('selected');
    }
}
