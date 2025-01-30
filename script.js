// using promises without async await


        // const jokes=document.querySelector('#joke');
        // const jokeBtn=document.querySelector('#jokeBtn');

        // const generateJokes=()=>{


        //     const setHeader={
        //         headers:{
        //             Accept:"application/json"
        //         }
        //     }

        //     fetch('https://icanhazdadjoke.com',setHeader)
        //     .then((res)=>
        //         res.json())
        //     .then((data)=>{jokes.innerHTML=data.joke;})
        //     .catch((error)=>console.log(error))
        // }




        // jokeBtn.addEventListener('click',generateJokes);
        // generateJokes();






        // promises using async await


        const jokes=document.querySelector('#joke');
        const jokeBtn=document.querySelector('#jokeBtn');

        const generateJokes=async()=>{

try{

          const res  =await fetch('https://icanhazdadjoke.com',{
            headers:{
                Accept:"application/json"
            }
        })
          const data=await res.json();
          jokes.innerHTML=data.joke;
            
    
    } catch(error){
        console.log(`error is ${error}`);
    }
        }

        jokeBtn.addEventListener('click',generateJokes);
        generateJokes();




        


