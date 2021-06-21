console.log("hello");


// $('.btn-next').click(function(){
//     console.log("btn-next clicked");
//     $(this).parent().hide().next().show();//hide parent and show next
//  });
 
//  $('.btn-back').click(function(){
//      console.log("btn-back clicked");
//     $(this).parent().hide().prev().show();//hide parent and show previous
//  });


function next() {
    let qElems = document.querySelectorAll('#customerList>div');
    let newElem = [qElems[0], qElems[2]];
    for (let i = 0; i < newElem.length; i++) {
        if (newElem[i].style.display != 'none') {
            newElem[i].style.display = 'none';
            if (i == newElem.length - 1) {
                newElem[0].style.display = 'block';
            } else {
                newElem[i + 1].style.display = 'block';
            }
            break;
        }
    }   
}

function nextPrice() {
    let qElems = document.querySelectorAll('#pricingList>div');
    for (let i = 0; i < qElems.length; i++) {
        if (qElems[i].style.display != 'none') {
            qElems[i].style.display = 'none';
            if (i == qElems.length - 1) {
                qElems[0].style.display = 'block';
            } else {
                qElems[i + 1].style.display = 'block';
            }
            break;
        }
    }   
}

function nextCard() {
    let qElems = document.querySelectorAll('#resourceList>div');
    console.log("next card",qElems);
    for (let i = 0; i < qElems.length; i++) {
        if (qElems[i].style.display != 'none') {
            qElems[i].style.display = 'none';
            if (i == qElems.length - 1) {
                qElems[0].style.display = 'block';
            } else {
                qElems[i + 1].style.display = 'block';
            }
            break;
        }
    }   
}

function customerfooterDropdown() {
    console.log("customer footer");
    let div = document.getElementById('customerFooter');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}

function popularfooterDropdown() {
    console.log("customer footer");
    let div = document.getElementById('popularLinkFooter');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}

function resourcefooterDropdown() {
    console.log("customer footer");
    let div = document.getElementById('resourceFooter');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}

function legalfooterDropdown() {
    console.log("customer footer");
    let div = document.getElementById('legalFooter');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}