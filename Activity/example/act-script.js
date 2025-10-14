const API_URL = "https://jsonplaceholder.typicode.com";

//get
// const getPost = async () => {
//     try{
//         const response = await fetch(`${API_URL}/posts` {
//             method:"GET"
//         });

//         const data = await response.json();

//         console.log(data);
//     } catch (error) {
//         console.log(error);
//         //render a notification of this error
//     }
    
// }

// getPost();


//POST request

// const createPost = async () => {
//     try {
//         const clientData ={
//                 title: "This is my task",
//                 body: "Sample body",
//                 userId: 1,
//             };

//             const response = await fetch(`${API_URL}/posts`, {
//                 method: "POST",
//                 body: JSON.stringify(clientData),
//             });

//         const data = await response.json();

//             console.log(data);
//         } catch (error) {
//             console.error(error);
//         }
//     };


// createPost


//PUT METHOD
// const updatePost = async () => {
//     try {
//         const clientData ={
//                 title: "This is my task",
//                 body: "Sample body",
//                 userId: 1,
//             };

//             const response = await fetch(`${API_URL}/posts/1`, {
//                 method: "PUT",
//                 body: JSON.stringify(clientData),
//             });

//         const data = await response.json();

//             console.log(data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     updatePost

const deletePost = async () => {
    try {
        const response = await fetch(`${API_URL}/posts/1`, {
            method: "DELETE",
        })
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.error(error);
    }
}