const dropdowns=document.querySelectorAll('.dropdown')
const name1=document.getElementById('name1')
const regno=document.getElementById('reg1')
const email=document.getElementById('email1')
const git=document.getElementById('git1')
const form=document.getElementById('form')
dropdowns.forEach(dropdown=>{
    const select=dropdown.querySelector('.select');
    const caret=dropdown.querySelector('.caret')
    const menu=dropdown.querySelector('.menu')
    const options=dropdown.querySelectorAll('.menu li')
const selected=dropdown.querySelector('.selected')
 select.addEventListener('click',()=>{
    select.classList.toggle('select-clicked')
    caret.classList.toggle('caret-rotate')
    menu.classList.toggle('menu-open')
 })
 options.forEach(option=>{
    option.addEventListener('click',()=>{
        selected.innerText=option.innerText
        select.classList.remove('select-clicked')
        caret.classList.remove('caret-rotate')
        menu.classList.remove('menu-open')
        options.forEach(option=>{
            option.classList.remove('active');
        })
       option.classList.add('active')
    })
 })
})

/*const seterror=(element ,message)=>{
    const inputbox=element.parentElement;
    const errordisp=inputbox.querySelector('.error')
    errordisp.innerText=message;
    inputbox.classList.add('error')
    inputbox.classList.remove('success')
}
const setsuccess=element=>{
    const inputbox=element.parentElement
    const errordisp=inputbox.querySelector('.error')
    errordisp.innerText='';
    inputbox.classList.add('success')
    inputbox.classList.remove('error')

}
const validemail=email=>{
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}
const Validate=()=>{
  
    const nameval = name1 ? name1.value.trim() : '';
    
    const emailval = email ? email.value.trim() : '';
    const regnoval = regno ? regno.value.trim() : '';
    const gitval = git ? git.value.trim() : '';
    
    if(nameval===''){
        seterror(name1,'name required')
    }
    else{
        setsuccess(name1);
    }
    if(emailval===''){
        seterror(email,'email is required')

    }
    else if(!validemail(emailval)){
        seterror(email,'enter a valid email')
}
else{
    setsuccess(email);
}
if(regnoval===''){
    seterror(regno,'registration no required')
}
else{
    setsuccess(regno);
}
if(gitval===''){
    seterror(git,'github profile id required')
}
else{
    setsuccess(git);
}

}
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    Validate();
    const formData = {
        name: name1.value.trim(),
        regno: regno.value.trim(),
        email: email.value.trim(),
        git: git.value.trim(),
      };
    try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          console.log('Form data sent and stored successfully.');
        }
      } catch (error) {
        console.error('Error sending form data:', error);
      }
})
const displayData = async () => {
    try {
      const response = await fetch('/api/data');
      if (response.ok) {
        const data = await response.json();
        // Display the data on the page (you can customize this part)
        console.log('Stored data:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Call the displayData function when needed, e.g., when a button is clicked
  // Example: Add an event listener to a button
  const displayButton = document.getElementById('displayButton');
  if (displayButton) {
    displayButton.addEventListener('click', displayData);
    https://reqres.in/api/users
     sessionStorage.setItem("formdata", JSON.stringify(data));
    window.location.href = "submitted.html";
  }*/
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const formdata=new FormData(form);
    const data=Object.fromEntries(formdata);
    fetch('https://reqres.in/api/users',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
   
    sessionStorage.setItem("formdata", JSON.stringify(data));
    window.location.href = "submitted.html";
  })
