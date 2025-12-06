// const intputCep = document.getElementById('cep');
// console.log(intputCep);

const input = document.querySelector('#cep')
const button = document.getElementById("btn-buscar")
        
button.addEventListener('click', async (e)=>{
    const inputValue = input.value;
    const data = await fecthData(inputValue);
    console.log(data);
});

async function fecthData(cep) {
    const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const jsonData = await data.json();
    // console.log(jsonData)
    return jsonData
}