// const intputCep = document.getElementById('cep');
// console.log(intputCep);

const input = document.querySelector('#cep');
const button = document.getElementById('btn-buscar');

const getLogradouro = document.getElementById('logradouro');
const getBairro = document.getElementById('bairro');
const getCidade = document.getElementById('cidade');
const getEstado = document.getElementById('estado');
const resultado = document.getElementById('resultado')

const erroHidden = resultado.classList.contains('hidden')

button.addEventListener('click', async (e)=>{
    const inputValue = input.value;
    const data = await fecthData(inputValue);

    getLogradouro.textContent = data.logradouro;
    getBairro.textContent = data.bairro;
    getCidade.textContent = data.localidade;
    getEstado.textContent = data.estado;

    if(data.erro == 'true') {
        if(erroHidden) {
            resultado.classList.add('hidden');
            console.log(erroHidden);
        }
    }
    else {
        console.log(erroHidden);
        resultado.classList.remove('hidden');
    }
    // console.log(data);
    // console.log(getLogradouro);
    // console.log(getBairro);
    // console.log(getCidade);
    // console.log(getEstado);
});

async function fecthData(cep) {
    const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const jsonData = await data.json();
    // console.log(jsonData)
    return jsonData
}