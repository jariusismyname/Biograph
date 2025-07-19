function toggleBody() {
  const body = document.querySelector('.body-list');
  body.style.display = 'none';
}


function toggleBody() {
  const body = document.querySelector('.body-list');
  body.style.display = body.style.display === 'none' ? 'block' : 'none';
}

function toggleUsers() {
        const users = document.querySelector('.users-list');
        users.style.display = users.style.display === 'flex' ? 'none' : 'flex';
        
}



const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);







