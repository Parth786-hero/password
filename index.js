const sliderSpan = document.querySelector("span.slidder-value");
const range = document.querySelector("input[type='range']");
const btn = document.querySelector("button");
const input = document.querySelector(".password-box input");
const icon = document.querySelector("i");
// console.log(range.value)
icon.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(input.value);
    icon.classList.replace("fa-regular" , "fa-solid");
})
range.addEventListener("input" , ()=>{
    sliderSpan.innerText = range.value;
    generatePassword();
    icon.classList.replace("fa-solid" , "fa-regular");
})

let allCharacters = "";
for(let i = 97;i<=122;i++){
    allCharacters+=String.fromCharCode(i);
}
for(let i = 33;i<=47;i++){
    allCharacters+=String.fromCharCode(i);
}
for(let i = 48;i<=57;i++){
    allCharacters+=String.fromCharCode(i);
}

for(let i = 65;i<=96;i++){
    allCharacters+=String.fromCharCode(i);
}

btn.addEventListener("click" , ()=>{
    generatePassword();
})
input.setAttribute("placeholder" , generatePassword());
function generatePassword(){
    let pass = "";
    let target = +range.value;
    // console.log(typeof target);
    for(let i = 0;i<target;i++){
        let char = allCharacters[Math.floor(Math.random()*allCharacters.length)];
        pass+=char;
    }
    input.value=pass;
    icon.classList.replace("fa-solid" , "fa-regular");
    // console.log(input);
    
}
// input.value = generatePassword();
