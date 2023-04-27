// import { outputCitizen } from "./search";

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const customerInfo = document.getElementById('customer-info');

const myInputValue = localStorage.getItem('myInputValue');
console.log(myInputValue)


const displayCustomerData = (customer) => {
  const customerData = `
    <img src="https://banner2.cleanpng.com/20171210/e9e/high-end-business-diamonds-membership-card-cutout-5a2cbfb7b61326.2979564515128821037458.jpg"  width="350" height="150">
    <div class="field" style="margin-bottom: 10px">
    <div class="label" style="margin-left: -200px">Name:</div>
    <p>${customer.firstName} ${customer.lastName}</p>
    </div>
    <div class="field" style="margin-bottom: 10px;">
    <div class="label" style="margin-left: -200px">Email:</div>
    <p>${customer.email}</p>
    </div>
    <div class="field" style="margin-bottom: 10px">
    <div class="label" style="margin-left: -200px">Phone:</div>
    <p>${customer.phone}</p>
    </div>
    <div class="field" style="margin-bottom: 10px">
    <div class="label" style="margin-left: -200px">Citizen Id:</div>
    <p>${customer.memberId}</p>
    </div>
    <div class="field" style="margin-bottom: 10px">
    <div class="label" style="margin-left: -200px">Credit:</div>
    <p>${customer.loyalty}</p>
    </div>  
  `;
  customerInfo.innerHTML = customerData;
};

const getData = (phoneNumber) => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.storehubhq.com/customers?memberId=${phoneNumber}`;
    // console.log(window.citizenValue)
    console.log(`${phoneNumber}`)
    axios.get(url,{
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': 'Basic ' + btoa('kirene:872e4fb6babc4f79a6966576da4be3fe')
        }
    })
    .then(response => {
        console.log(response.data); // log the response data array
        const customer = response.data[0];
        console.log(customer); // log the first customer in the array
        displayCustomerData(customer);
        console.log(response);
      })
};

const sendData = () => {

    const data = {
        
      };
      axios.post('https://cors-anywhere.herokuapp.com/https://api.storehubhq.com/customers', data, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Authorization': 'Basic ' + btoa('kirene:872e4fb6babc4f79a6966576da4be3fe')
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
};

getData(myInputValue);
// getBtn.addEventListener('click', getData("0830016162"));
// postBtn.addEventListener('click', sendData);
// import { myVar } from "./search";
// console.log(myVar); // "Hello World"