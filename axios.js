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
    <p>${customer.email.split(':')[2]}</p>
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
    const url = `https://cors-anywhere.herokuapp.com/https://api.storehubhq.com/customers?email=${phoneNumber}`;
    // console.log(window.citizenValue)
    console.log(`${phoneNumber}`)
    axios.get(url,{
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': 'Basic ' + btoa('kireinethailand:5f5d150a3835480689ea121b7d3e3c00')
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

// const sendData = () => {

//     const data = {
//         "refId": "eb953958-e68f-11ed-a05b-0242ac120033",
//         "firstName": "aktanin",
//         "lastName": "bomboom",
//         "email": "kkkkk@gmail.com",
//         "phone": "0830016162",
//         "birthday": "2023-03-15",
//         "memberId": "1103900061961"
//       };
//       axios.post('https://cors-anywhere.herokuapp.com/https://api.storehubhq.com/customers', data, {
//         headers: {
//           'X-Requested-With': 'XMLHttpRequest',
//           'Authorization': 'Basic ' + btoa('kireinethailand:5f5d150a3835480689ea121b7d3e3c00')
//         }
//       })
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.log(error);
//       });
// };
if (myInputValue === null){
  async function lineLiff() {
    await liff.init({ liffId: '1660917313-q81Rp38e' }); 
    if ((liff.isInClient())) {
      const newoutput3 =  await liff.getProfile();
      // console.log(output3.textContent)
      getData(newoutput3.userId);
    }
  };
  lineLiff();
}else{
  getData(myInputValue);
}

// getBtn.addEventListener('click', getData("0830016162"));
// postBtn.addEventListener('click', sendData);
// import { myVar } from "./search";
// console.log(myVar); // "Hello World"