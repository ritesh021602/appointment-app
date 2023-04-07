let bt=document.getElementById("bt");
bt.addEventListener(
    "click",()=>{
        
        axios.post("https://crudcrud.com/api/ab34b260cf5640d1a2fcc1182a57bd58/endPont",{
            "name":document.getElementById("name").value,
            "email":document.getElementById("mail").value,
    
        }).then(
            ()=>{
            axios.get("https://crudcrud.com/api/ab34b260cf5640d1a2fcc1182a57bd58/endPont").then(
              (res)=>{
                console.log(res)
               showOutput(res); 
    
              }  
            );
            }
        ).catch((error)=>{
            console.log(error)
        });
        }
);



    function showOutput(res){
       let di= document.getElementById("root");
       for(let i=0;i<res.data.length;i++){
        let name = res.data[i].name;
         let email = res.data[i].email-id;
         const li = document.createElement("li");
         li.textContent = name;
         di.appendChild(li);
       }
      
    }