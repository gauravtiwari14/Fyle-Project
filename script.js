const APIURL = "https://api.github.com/users/"
const main = document.querySelector("#main")

const getUsers = async(username) => {
    const response = await fetch( APIURL + username )
    const data = await response.json()
    
    const card = `     <div class="card">
                           <div>
                             <img src=${data.avatar_url} alt="Repo Image" class="avatar">
                           </div>
                          <div class="user-info">
                             <h2>Name: ${data.name}</h2>
                             <p>Repositories: ${data.public_repo}</p>
                             <p>location: ${data.location}</p>                                             
                          </div>
                        </div>
                        <a class="link" href=${data.html_url}>https://github.com/${data.login}</a>
                      <div id="repos">
                         
                        
                      </div>
                 `
    main.innerHTML = card;
    getRepos(username)
    
        
}

getUsers("gauravtiwari14")

const getRepos = async(username) => {
  const repos = document.querySelector('#repos')
  const response = await fetch(APIURL + username + "/repos")
  const data = await response.json();
  data.forEach(items => {
    const element = document.createElement("h1")
    element.classList.add("repo")
    element.innerText =(`${items.name}`)
    repos.appendChild(element)
  });
}

const formSubmit = () => {
  const searchBox = document.querySelector("#search")
  if(searchBox.value != ""){
    getUsers(searchBox.value)
  }
  return false
}

