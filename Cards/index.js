const cards=document.querySelectorAll('.card');
let originalLabels=[];
let Labels={};
let map=new Map()

let x=0;
cards.forEach((card)=>{
    let classname="c"+x;    
    // console.log(classname);
    card.classList.add(classname);
    // Labels.classname=card.innerText;
    map.set(classname,card.innerText);
    // console.log(classname);
    // console.log(Labels.classname);
    x++;
    let text=card.innerText;
    originalLabels.push(text);
    let textLen=text.length;
    if(textLen>5){
        text=text.slice(0,6)+"..."
    }
    card.innerHTML="<h3>"+text+"</h3>";
    card.addEventListener('click',(e)=>{
        removeAllActive();
        // console.log(card.innerHTML);
        card.classList.add('active');
        console.log(card.classList)
        let labelClassName=card.classList[1]
        console.log((labelClassName));
        // console.log(Labels.labelClassName);
        setTimeout(() => {
        card.innerHTML="<h3>"+map.get(labelClassName)+"</h3>";
            
        }, 300);
    })
})

function removeAllActive(){
    cards.forEach((card)=>{
        card.classList.remove('active');
        let text=card.innerText;
        originalLabels.push(text);
        let textLen=text.length;
        if(textLen>5){
            text=text.slice(0,6)+"..."
        }
        card.innerHTML="<h3>"+text+"</h3>";
        
    })
}

