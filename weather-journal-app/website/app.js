/* Global Variables */
const apiKey = "68e54bd5758e91f4f3a249e4d8600978&units=imperial"
//data form user
let userData ={}
//event listener
document.getElementById('generate').addEventListener('click', async function() {

//update userData
    userData.date= new Date();
    userData.zip=  document.getElementById('zip').value;
    userData.content= document.getElementById('feelings').value;
//end
debugger
let apiData = await getApi(userData.zip)
try{
   debugger
    userData.temp = apiData.main.temp;
    await postData(userData);
    await updateUI();
}
catch(err){
  alert(`Zipcode error
   ${err}`)
}


})
//event listener finish


//GET Web API Data
async function getApi(zip){
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`
    let data = (await fetch(url)).json()
    return data
}

//Function to POST data 
async function postData(data) {
    let res = await fetch('/postData', {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
    }) 
  };
//end post

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// date code finish

// update UI function
async function updateUI() {
    //GET request
    let req = await fetch('/all');
    try {
       const projectData = await req.json();
       //updating HTML elements
       document.getElementById('date').innerHTML = `Date Is: ${projectData.date}`;
       document.getElementById('temp').innerHTML = `Temp Is: ${projectData.temp}`;
       document.getElementById('content').innerHTML = `My Feelings: ${projectData.content}`
    } catch (err) {
       catchError(err);
    }
 }
 //update UI end