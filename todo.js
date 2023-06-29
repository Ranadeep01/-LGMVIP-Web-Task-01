function add() {
    
    l=document.getElementById("input");
    if(l.value.length===0){
        alert("Enter eyyu bey!");
    }
    else{
        li=document.createElement("li");
        li.innerHTML=l.value;
        document.getElementById("print").appendChild(li);  
        document.getElementById("input").value="";
        del=document.createElement("button");
        del.innerHTML="Delete";
        del.setAttribute("id", "bdel");
        li.appendChild(del);
        done=document.createElement("button");
        done.setAttribute("id", "bdone");
        done.innerHTML="Done";
        li.appendChild(done);

        document.getElementById("completed").addEventListener("click", function(f){
            if(f.target.innerHTML==="UnMark"){
                f.target.innerHTML="Done";
                l0=f.target.parentElement;
                document.getElementById("print").appendChild(l0);
            }

        })


        //remove list function
        del.addEventListener("click", function(e){   
                e.target.parentElement.remove();   
        })

        done.addEventListener("click", function(e){
            e.target.innerHTML="UnMark"
            l0=e.target.parentElement;
            document.getElementById("completed").appendChild(l0);
        })

    }
}