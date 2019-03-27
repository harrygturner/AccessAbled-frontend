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

   static likeReview(like) {
      return fetch('http://localhost:3000/likes', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(like)
      }).then(resp => resp.json())
   }

   static createAttr(attraction) {
      return fetch('http://localhost:3000/attractions', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(attraction)
      }).then(resp => resp.json())
   }
}

window.API = API;

export default API;
