let password;
let login = prompt('Whos there')
switch(login){
        
    case 'Admin': 
        let password = prompt('Password');
            switch(password){
            
                case 'TheMaster':
                alert('Welcome!'); 
                    
                case 'Cancel':
                alert('Canceled')   
                 
                default: 
                alert('Wrond pass!') 
                
                            }           
break;
        
    case 'Cancel':  
        alert('Canceled!');

      break;
    default: 
         alert('I dont know you!');
}
        
        
        
        
        
        
        
        
        
        