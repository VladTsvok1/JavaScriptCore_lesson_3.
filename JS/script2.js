let password;
let login = prompt('Whos there')
if (login === 'Admin'){
    let password = prompt('Password');
    if (password === 'TheMaster'){
        alert('Welcome!');
        
        
    }else if (password ==='Cancel'){
        alert('Canceled')
    }
    else{
        alert ('Wrong password')     
        }
    
 }else if (login === 'Cancel'){
    alert('Canceled!');
    
}else {
    alert('I dont know you!');
}

