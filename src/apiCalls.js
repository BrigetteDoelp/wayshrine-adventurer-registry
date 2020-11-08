export const getHeritage = () => {
  const heritages = 'https://www.dnd5eapi.co/api/races'
  return fetch(heritages)
  .then(response => response.json())
}

export const getClasses = () => {
  const classes = 'https://www.dnd5eapi.co/api/classes'
  return fetch(classes)
  .then(response => response.json())
}

export const getSubClasses = () => {
  const subClasses = 'https://www.dnd5eapi.co/api/subclasses'
  return fetch(subClasses)
  .then(response => response.json())
}
