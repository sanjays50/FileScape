const fileURL=document.querySelector("#fileURL");
const copyBtn=document.querySelector("#copyBtn");

copyBtn.addEventListener("click",()=>{
    fileURL.select();
    document.execCommand("copy");
})


const submitButton = document.getElementById('apiSubmit');

submitButton.addEventListener("click", ()=>{
    const path = document.getElementById('inputApi').value;
    console.log(path);

})
