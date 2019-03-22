class API {

   static login(user) {
      return fetch('http://localhost:3000/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(user)
      })
      .then(resp => resp.json())
   }

   static validate() {
      return this.get('http://localhost:3000/validate')
   }

   // static getAttractions() {
   //    return this.get('http://localhost:3001/attractions')
   // }

   static get(url) {
      return fetch(url, {
         headers: {
            Authorization: localStorage.getItem('token')
         }
      })
      .then(resp => resp.json())
   }

   static create(user) {
      return fetch('http://localhost:3000/users', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(user)
      }).then(resp => resp.json())
   }
}

window.API = API;

export default API;
