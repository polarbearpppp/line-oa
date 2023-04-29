
const slidePage = document.querySelector('.slide-page');
const nextBtnFirst = document.querySelector('.firstNext');
const prevBtnSec = document.querySelector('.prev-1');
const nextBtnSec = document.querySelector('.next-1');
const prevBtnThird = document.querySelector('.prev-2');
const nextBtnThird = document.querySelector('.next-2');
const prevBtnFourth = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.submit');
const progressText = document.querySelectorAll('.step p');
const progressCheck = document.querySelectorAll('.step .check');
const bullet = document.querySelectorAll('.step .bullet');
let current = 1;


async function lineLiff() {
  liff.ready.then(() => {
    if (liff.isInClient()) {
      return getUserProfile();
    }
  });
  await liff.init({ liffId: '1660917313-B7RLVKbD' });
}

async function getUserProfile() {
  const profile = await liff.getProfile();
  // console.log(liff.getDecodedIDToken().email);
  // const input3 = document.getElementById('emailAdd');
  // const output3 = document.getElementById('outEmailAdd');
  // input3.addEventListener('input', (event) => {
  //   output3.textContent = event.target.value;
  // });
  return profile.userId;
}

const lineToken = lineLiff();

// async function lineLiff() {
//   await liff.init({ liffId: '' }); 
//   if ((liff.isInClient())) {
//     const newoutput3 =  await liff.getProfile();
//     // output3.textContent += ':' + newoutput3.userId;
//     // output3.textContent += ':' + output4.textContent;
//     return newoutput3.userId
//     // console.log(output3.textContent)
//     // await sendData();
//   }
// };
// const userId = lineLiff();

nextBtnFirst.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-25%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});
nextBtnSec.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-50%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});
nextBtnThird.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-75%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});
submitBtn.addEventListener('click', function () {
  const newOut3 = lineToken + ':' + output3.textContent + ':' + output4.textContent
  function generateUUID() {
    let uuid = '';
    for (let i = 0; i < 32; i++) {
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += Math.floor(Math.random() * 16).toString(16);
    }
    return uuid;
  };

  const uuid = generateUUID()
  const sendData = () => {
    console.log(uuid)
    const data = {
      "refId": uuid,
      "firstName": output.textContent,
      "lastName": output2.textContent,
      "email": newOut3,
      "phone": String(output5.textContent),
      "birthday": String(output6.textContent),
      "memberId": String(output4.textContent)
    };
    console.log(data)
    axios
      .post(
        'https://api.storehubhq.com/customers',
        data,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization:
              'Basic ' + btoa('kireinethailand:5f5d150a3835480689ea121b7d3e3c00'),
          },
        }
      )
      .then((response) => {
        console.log(uuid)
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
  sendData();
  
  setTimeout(function () {
    alert('Your Form Successfully Signed up');
    location.reload();
  }, 1600);
});


prevBtnSec.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '0%';
  bullet[current - 2].classList.remove('active');
  progressCheck[current - 2].classList.remove('active');
  progressText[current - 2].classList.remove('active');
  current -= 1;
});
prevBtnThird.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-25%';
  bullet[current - 2].classList.remove('active');
  progressCheck[current - 2].classList.remove('active');
  progressText[current - 2].classList.remove('active');
  current -= 1;
});
prevBtnFourth.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-50%';
  bullet[current - 2].classList.remove('active');
  progressCheck[current - 2].classList.remove('active');
  progressText[current - 2].classList.remove('active');
  current -= 1;
});

const input = document.getElementById('firstName');
const output = document.getElementById('outFirstName');
input.addEventListener('input', (event) => {
  output.textContent = event.target.value;
});
const input2 = document.getElementById('lastName');
const output2 = document.getElementById('outLastName');
input2.addEventListener('input', (event) => {
  output2.textContent = event.target.value;
});
const input3 = document.getElementById('emailAdd');
const output3 = document.getElementById('outEmailAdd');

input3.addEventListener('input', (event) => {
  output3.textContent = event.target.value;
});

// async function lineLiff() {
//   // await liff.init({ liffId: '1660917313-dRQgEPL2' }); (liff.isInClient())
//   if (true) {
//     const newoutput3 = await getUserProfile();
//     output3.textContent += ':' + newoutput3;
//   }
// }

// async function getUserProfile() {
//   // const profile = await liff.getProfile();
//   // const userId = profile.userId;
//   const userId = 'asdfjl23jkrujlsdjf'
//   return userId;
// }


const input4 = document.getElementById('memberId');
const output4 = document.getElementById('outMemberId');
input4.addEventListener('input', (event) => {
  output4.textContent = event.target.value;
});

output3.textContent += ':' + output4.textContent

const input5 = document.getElementById('phoneNum');
const output5 = document.getElementById('outPhoneNum');
input5.addEventListener('input', (event) => {
  output5.textContent = event.target.value;
});
const input6 = document.getElementById('dateBirth');
const output6 = document.getElementById('outDateBirth');
input6.addEventListener('input', (event) => {
  output6.textContent = event.target.value;
});

// const sendData = () => {
//   const data = {
//     firstName: output,
//     lastName: output2,
//     email: output3,
//     phone: output5,
//     birthday: output6,
//     memberId: output4,
//   };
//   axios
//     .post(
//       'https://cors-anywhere.herokuapp.com/https://api.storehubhq.com/customers',
//       data,
//       {
//         headers: {
//           'X-Requested-With': 'XMLHttpRequest',
//           Authorization:
//             'Basic ' + btoa('kireinethailand:5f5d150a3835480689ea121b7d3e3c00'),
//         },
//       }
//     )
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
