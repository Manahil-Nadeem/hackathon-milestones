
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display')as HTMLDivElement;

form.addEventListener ('submit' , (event : Event) => {
    event.preventDefault();



    const name = (document.getElementById('name')as HTMLInputElement).value
    const email =(document.getElementById('email')as HTMLInputElement).value
    const contact =(document.getElementById('contact')as HTMLInputElement).value
    const eduaction =(document.getElementById('eduaction')as HTMLInputElement).value
    const skills =(document.getElementById('skills')as HTMLInputElement).value
    const experience =(document.getElementById('experience')as HTMLInputElement).value
    
    
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Contact: </b>${contact}</p>
    
    <h3>Skills</h3>
    <p><b>Skills:</b>${skills}</p>
    
    <h3>Experience</h3>
    <p><b>Experience:</b>${experience}</p>
    `;
    
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error(`The resume display element is missing`)
    }
});
