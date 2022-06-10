import axios from 'axios'

const API = 'https://api.github.com'

async function getProfil(profil) {
  try {
    const { data: data } = await axios.get(`${API}/users/${profil}`)

    return data
  } catch(e) {
    return e.request.response
  }
}

async function getRepos(profil) {
  try {
    const { data: data } = await axios.get(`${API}/users/${profil}/repos`)

    return data
  } catch(e) {
    return JSON.parse(e.request.response)
  }
}

async function getIssues(profil, number) {
  try {
    const { data: data } = await axios.get(`${API}/users/${profil}/issues/${number}`)

    return data
  } catch(e) {
    return JSON.parse(e.request.response)
  }
}

export {
  getProfil,
  getRepos,
  getIssues
}
