// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Något gick fel");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Fel:", error);
//   });

// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.error(error)
//     }
// }


//   console.log('the fetch', theFetch)

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//     //   id: 1,
//       title: 'foo',
//     //   body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
//   });

// console.log('first hi')

// const minPromise = new Promise((resolve, reject) => {
//     // Gör något asynkront här...
//     const operationSuccess = true

//     const sum = 1 + 1

//     if (operationSuccess) {
//       resolve(sum); // Om allt gick bra
//     } else {
//       reject('Operationen misslyckades'); // Om något gick fel
//     }
//   });


// minPromise
// .then(data => {
//     console.log(data); // Om operationen lyckades
// })
// .catch(error => {
//     console.error(error); // Om operationen misslyckades
// }); 

// console.log('second hej')

// try {
    
// } catch (error) {
    
// }