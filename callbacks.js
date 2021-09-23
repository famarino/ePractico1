const axios=require('axios');

// axios.get('https://pokeapi.co/api/v2/pokemon').then(
//     (data)=> {console.log(data)}
// ).catch(
//     (err)=> {console.error(err)}
// ).finally(
//     ()=>{console.log('termino')}
// );

retorno();

async function retorno(){
    try {
        const {data:{count}} = await axios.get('https://pokeapi.co/api/v2/pokemon');
        console.log("===>",count);    
    } catch (err) {
        console.log(err);
    }
    
}