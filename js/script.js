var form = document.getElementById('regform')
form.addEventListener('submit',function(e){
    e.preventDefault();
    var username = document.getElementById('username').value
    var email= document.getElementById('email').value
    var password= document.getElementById('password').value

fetch('http://127.0.0.1:8000/api/register/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({        
            "username": username,
            "email": email,
            "password": password      
         
    })
}).then(res => {
    return res.json()
})        
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
})
