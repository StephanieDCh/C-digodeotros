const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
//se declaran variables con (.) para ser correctas
const $l = document.querySelector('.location');
//se crea en la anterior línea una nueva clase
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  response.json().then((data)=>{
  console.log(data);
  $n.textContent = data.name;
  $b.textContent = data.blog;
  $l.textContent = data.location;
}).catch((error) => {
  console.error(error);
})//catch
};//function 

function handleError(err) {
console.log('OH NO!');
console.log(err);

$n.textContent = `Algo salió mal: ${err}`
};//se anexó $ para ser correcta n.

displayUser('stolinski').catch(handleError);