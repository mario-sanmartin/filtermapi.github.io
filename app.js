const input = document.querySelector('#searchInput');
const userList = document.querySelector('#users');
let users=[];

// Evento principal
window.addEventListener('DOMContentLoaded', async () => {
    userList.innerHTML="<img src='cargando.gif' class='rounded-circle'>"
    const apiDatos = await loadUser()
    // console.log(data.data);
    users = apiDatos.data;
    renderUsers(users)
    // userList.innerHTML = "Madara Uchija"
});

// Cargar datos api
async function loadUser(){
  const response =  await fetch('https://fakerapi.it/api/v1/users?_quantity=1000')
  return await response.json()

  //   const data = await response.json()
  //   console.log(data);
}

// Capturar evento de tipeo
input.addEventListener('keyup', e =>{
    // console.log(input.value)
    const newUsers = users.filter(users => `${users.firstname.toLowerCase()} ${users.lastname.toLowerCase()}`.includes(input.value.toLowerCase()));
    renderUsers(newUsers);
})

// Ciclo map,creando items
const createUserItems = datosApi => datosApi.map(user => 
    `<li class="bg-secondary cursor:pointer">${ user.firstname } ${user.lastname }</li>`).join(' ')

// Insertando items en nuestra etiqueta Ol
function renderUsers(datosApi){
    const itemString = createUserItems(datosApi)
    userList.innerHTML = itemString
}