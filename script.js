// const minBtn = document.querySelector('.minus');
// const plsBtn = document.querySelector('.plus');
// const getQuan = document.querySelector('.quantity');

// let count = 1;

// plsBtn.addEventListener('click', function(event){
// if(count < 10){
//     count++
//     getQuan.textContent = count;
// }
// })

// minBtn.addEventListener('click', function(event){
//     if(count > 1){
//         count--
//         getQuan.textContent = count;
//     }
// })




// burger menu  burger menu  burger menu  burger menu  burger menu 

const menuBtn = document.querySelector('.menu');
const menu  = document.querySelector('header .right_side');

menuBtn.addEventListener('click', () =>{
  menu.style.display === 'none' ? menu.style.display = 'flex' : menu.style.display = 'none';
})


// burger menu  burger menu  burger menu  burger menu  burger menu 

// form form form form form form form form form form


const counterMinus = document.querySelector('#counter_minus');
const counterPlus = document.querySelector('#counter_plus');
const counterValue = document.querySelector('#counter_value');

// СЧЕТЧИК
let value = 1;
counterValue.innerText = value;

counterMinus.addEventListener('click', () => {
  if(value > 0){
    --value 
  counterValue.innerText = value;
  }
})

counterPlus.addEventListener('click', () =>{
  if(value < 10){
  ++value
  counterValue.innerText = value;   
  }

})




flatpickr("#depart", {
    showMonths: 2,      // два месяца рядом
    dateFormat: "d.m.Y",
  });

  flatpickr("#return", {
    showMonths: 2,      // два месяца рядом
    dateFormat: "d.m.Y",
  });

  // DATE PICKER
const createPicker = () => flatpickr(departureInput, {
    mode: "range",
    showMonths: window.innerWidth <= 704 ? 1 : 2,
    locale: "ru",
    dateFormat: "d.m.Y",
    closeOnSelect: false,   // не закрываем сразу — закрытие по кнопке Apply
    minDate: "today",

    onOpen: function () {
      departureInput.classList.add('active');
      returnInput.classList.add('active');
    },
    onClose: function () {
      departureInput.classList.remove('active');
      returnInput.classList.remove('active');
    },

    // Главное: при любом изменении выбора — раскладываем даты по двум полям
    onChange: function (selectedDates, dateStr, instance) {
      departureInput.value = selectedDates[0]
        ? instance.formatDate(selectedDates[0], "d.m.Y")
        : "";
      returnInput.value = selectedDates[1]
        ? instance.formatDate(selectedDates[1], "d.m.Y")
        : "";
    },
    onReady: function (selectedDates, dateStr, instance) {
      addFooter(instance);
    }
});

let picker = createPicker();
window.addEventListener("resize", () => {
    const months = window.innerWidth <= 704 ? 1 : 2;

    if (picker.config.showMonths !== months) {
        picker.destroy();
        picker = createPicker();
    }
});



  const ticketsForm = document.querySelector('.form');
  ticketsForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    let formData = new FormData(ticketsForm);
    const data = {
    ...Object.fromEntries(formData), people_cnt: value}

    console.log(data)
  })

  // const newTrip = {
  //   trip_type: 'round',
  //   people_cnt: 4,
  //   city_departure: 'Berlin',
  //   city_arrival: 'Madrid',
  //   date_depart: '',
  //   date_back: ''
  // }
// form form form form form form form form form form



// faqs section

// FAQs блок
const faqs = [
  {
    question: "Alpine Bus Journeys?",
    answer: "Forget crowded cities! Alpine Bus Journeys are your comfy seat with panoramic windows to breathtaking mountain vistas, charming villages, and air so fresh it might make you yodel (please don't, unless you're outside). It's transportation with a side of unparalleled scenery (and maybe a hairpin turn)."
  },
  {
    question: "What about seating options?",
    answer: "Forget crowded cities! Alpine Bus Journeys are your comfy seat with panoramic windows to breathtaking mountain vistas, charming villages, and air so fresh it might make you yodel (please don't, unless you're outside). It's transportation with a side of unparalleled scenery (and maybe a hairpin turn)."
  },
  {
    question: "What is the Alpine Wallet?",
    answer: "Forget crowded cities! Alpine Bus Journeys are your comfy seat with panoramic windows to breathtaking mountain vistas, charming villages, and air so fresh it might make you yodel (please don't, unless you're outside). It's transportation with a side of unparalleled scenery (and maybe a hairpin turn)."
  },
  {
    question: "Why a Bus Station Fee?",
    answer: "Forget crowded cities! Alpine Bus Journeys are your comfy seat with panoramic windows to breathtaking mountain vistas, charming villages, and air so fresh it might make you yodel (please don't, unless you're outside). It's transportation with a side of unparalleled scenery (and maybe a hairpin turn)."
  },
  {
    question: "Vitae sollicitudin vitae libero tincidunt",
    answer: "Forget crowded cities! Alpine Bus Journeys are your comfy seat with panoramic windows to breathtaking mountain vistas, charming villages, and air so fresh it might make you yodel (please don't, unless you're outside). It's transportation with a side of unparalleled scenery (and maybe a hairpin turn)."
  },
  {
    question: "Why are buses late?",
    answer: "Forget crowded cities! Alpine Bus Journeys are your comfy seat with panoramic windows to breathtaking mountain vistas, charming villages, and air so fresh it might make you yodel (please don't, unless you're outside). It's transportation with a side of unparalleled scenery (and maybe a hairpin turn)."
  }
]


const faqsContainer = document.querySelector('.faqs_container');

faqs.forEach(({ question, answer}) => {

    const detailsElem = document.createElement('details');
    const summaryElem  = document.createElement('summary');
    const pElem = document.createElement('p');

    summaryElem.innerText = question;
    pElem.innerText = answer;

    detailsElem.append(summaryElem, pElem);
    faqsContainer.append(detailsElem);
})


// добавляем крестик

const allDetailsItems = document.querySelectorAll('.faqs_container details')

allDetailsItems.forEach(item =>{
    item.addEventListener('toggle', () =>{
        if(item.open) {
            allDetailsItems.forEach(otherItem =>{
                if(otherItem !== item){
                    otherItem.open = false
                }
            })
        }
    })
})

// item - это один конкретный <details>