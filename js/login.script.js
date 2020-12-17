
var form = document.getElementById('logform')
form.addEventListener('submit',function(e){
    e.preventDefault();
    var username = document.getElementById('username1').value    
    var password= document.getElementById('password1').value

fetch('http://127.0.0.1:8000/api/login/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({        
            "username": username,           
            "password": password      
         
    })
}).then(res => {
    return res.json()
})        
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
})