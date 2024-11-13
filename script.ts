// Liting Element
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    //Get references to form elements using their ID's

   
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    
    //Type Assertation
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const languageElement = document.getElementById('language') as HTMLInputElement;
    const cityElement = document.getElementById('city') as HTMLInputElement;
    
    //Check if all form elements are present
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
    
    
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const language = languageElement.value;
    const city = cityElement.value;
    

    //picture elements
    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    
    //Create Resume Output
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
    <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
    <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
    <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone} </span></p>
     <p><strong>Language:</strong> <span id="edit-language" class="editable"> ${language} </span></p>
    <p><strong>City:</strong> <span id="edit-city" class="editable"> ${city} </span></p>
    
    <h4>Education</h4>
    <p id="edit-education" class="editable">${education}</p>
    
    <h4>Experience</h4>
    <p id="edit-experience" class="editable">${experience}</p>
    
    <h4>Skills</h4>
    <p id="edit-skills" class="editable">${skills}</p>
    `;
    
    
    
    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
       makeEditable();
    }
    
    }else{
        console.error("One More Output Element Are Missing")
    }
    });


    function makeEditable(){
        const editableElement = document.querySelectorAll('editable');
        editableElement.forEach(element => {
            element.addEventListener ('click', function(){
                const currentElement = element as HTMLElement;
                const currentValue = currentElement.textContent || "";


                //Replace Content
                if (currentElement.tagName === "P"  || currentElement.tagName === "SPAN"){
                    const input = document.createElement('input')
                    input.type = 'text'
                    input.value = currentValue
                    input.classList.add ('editing-input')


                    input.addEventListener('blur', function(){
                        currentElement.textContent = input.value;
                        currentElement.style.display = 'inline'
                        input.remove()
                    })

                    currentElement.style.display = 'none'
                    currentElement.parentNode?.insertBefore (input, currentElement)
                    input.focus()
                } 
            })
        })
    }


