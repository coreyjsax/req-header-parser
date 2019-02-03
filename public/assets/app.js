const frontEndController = () => {
    
    const app = document.getElementById('app');
    const modal = app.querySelector('.mymodal');
    
    app.addEventListener('click', (event) => {

        let target = event.target;
       
        if (target.matches('.modalTrigger')){
            modalInit(target);
        } else if (target.matches('.delete')){
             toggleModal()  
        }
        
    })
    
    
    const modalInit = (target) => {
        
        let contentDest = modal.querySelector('.modal_content');
        
        
        getData()
        .then((data) => {
            let message = setMessage(data)
            console.log(data)
            contentDest.innerHTML = message;
            toggleModal(data)
        });
        
    }
    
    function setMessage(data){
        
            
            let message = `
                <article class="message">
                    <div class="message-header">
                        <p>Who Am I API Test</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        <h2><strong>Example Usage:</strong></h2>
                        <a class="link" href="/api/whoami">https://req-header-parser-coreyjsax.c9users.io/api/whoami</a>
                        <div class="code-content">
                            <h2><strong>Example Output:</strong></h2>
                            <div class="code-border">
                            <p class="code"> <span style="color:black">{<br><strong>&nbsp;&nbsp;ipaddress:</strong></span><span style="color:green">
                            "${data.ipaddress}"</span><span style="color:black">,<br><strong>&nbsp;&nbsp;language: </strong></span><span style="color:green">
                            "${data.language}"</span><span style="color:black">,<br><strong>&nbsp;&nbsp;software: </strong></span><span style="color:green">
                            "${data.software}"</span><span style="color:black" ><br>}</span></span></p>
                            </div>
                        </div>
                    </div>
                </article>
            `;
            
        return message;
        
        
    }
    
    function toggleModal() {
      var currentState = modal.style.display;
    
      // If modal is visible, hide it. Else, display it.
      if (currentState === 'none') {
        modal.classList.remove('fadeout')
        modal.classList.add('fade')
        modal.style.display = 'block';
        
      } else {
        modal.classList.remove('fade')
        modal.classList.add('fadeout')
        modal.style.display = 'none';
       
      }
    }
    
    function getData(){
        let baseUrl = `api/whoami`;
        
        return fetch(baseUrl)
        .then((res) => {
            let data = res.json();
            return data;
        }).catch((err) => {
            return err;
        })
    }
    
}






    
