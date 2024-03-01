const ft_list = document.getElementById('ft_list');
let x = 0;

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

alert(document.cookie)

setCookie(0, 'hkjsag', 0)

function newTD() {
    //prompt per cosa mettere nella lista
    let TD = prompt('inserire il nuovo TO DO');
    if (TD.trim() != ''){

        
        //creao nuovi elementi
        const listElement = document.createElement('li');
        const text = document.createElement('div');
        text.textContent = TD;


        //do l'id alle varie componenti
        listElement.id = x
        x += 1;
        console.log(x +'fuori')


        //metto il testo nella lista
        listElement.appendChild(text);
        ft_list.appendChild(listElement);


        //scambio di posto
        if (x>1) {
            let temp = '';
            let temp1 = '';
            for (i=x-1; i>0; i -= 1) {
                let a = i-1;
                temp = document.getElementById(i).textContent;
                temp1 = document.getElementById(a).textContent;
                document.getElementById(i).textContent = temp1;
                document.getElementById(a).textContent = temp;
            }
        }


        //funzione per la rimozione 
        listElement.onmousedown = function siono() {
            let y = prompt('Sicuro di cancellare? yes/no').trim();
            if (y =='yes'||y =='Yes'||y =='YEs'||y =='YES') {
                let id = parseInt(listElement.getAttribute('id'));
                listElement.remove();
                x -=1;
                //parte per abbassare il numero degli ID
                for (i=id;i<(x+1);i+=1) {
                    let b = i+1;
                    console.log(b)
                    document.getElementById(b).id = i;
                }
            } else if (y == 'no'||y =='No'||y =='NO') {
                return 0;
            } else {
                alert('input non valido')
                siono();
            }
        }
    } else {
        alert('inserire qualcosa TO DO')
        newTD();
    }
}


/*
const ft_list = document.getElementById('ft_list');
let x = 0;

function newTD() {
    //prompt per cosa mettere nella lista
    let TD = prompt('inserire il nuovo TO DO');
    if (TD.trim() != ''){
        //creao nuovi elementi
        const listElement = document.createElement('li');
        const text = document.createElement('div');
        text.textContent = TD;

        
        //do l'id alle varie componenti
        listElement.id = x
        x += 1;
        console.log(x +'fuori')


        //metto il testo nella lista
        listElement.appendChild(text);
        ft_list.appendChild(listElement);


        //scambio di posto
        if (x>1) {
            let temp = '';
            let temp1 = '';
            for (i=x-1; i>0; i -= 1) {
                let a = i-1;
                temp = document.getElementById(i).textContent;
                temp1 = document.getElementById(a).textContent;
                document.getElementById(i).textContent = temp1;
                document.getElementById(a).textContent = temp;
            }
        }


        //funzione per la rimozione 
        listElement.onmousedown = function siono() {
            let y = prompt('Sicuro di cancellare? yes/no').trim();
            if (y =='yes'||y =='Yes'||y =='YEs'||y =='YES') {
                let id = parseInt(listElement.getAttribute('id'));
                listElement.remove();
                x -=1;
                //parte per abbassare il numero degli ID
                for (i=id;i<(x+1);i+=1) {
                    let b = i+1;
                    console.log(b)
                    document.getElementById(b).id = i;
                }
            } else if (y == 'no'||y =='No'||y =='NO') {
                return 0;
            } else {
                alert('input non valido')
                siono();
            }
        }
    } else {
        alert('inserire qualcosa TO DO')
        newTD();
    }
}
*/