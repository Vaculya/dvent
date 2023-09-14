new AirDatepicker('#airdatepicker', {
  days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
  daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  today: 'Сегодня',
  clear: 'Очистить',
  dateFormat: 'yyyy.MM.dd',
  timeFormat: 'HH:mm',
  firstDay: 1,
  multipleDates: true,
  multipleDatesSeparator: ' - ',
  range: true,
  autoClose: true,
  minDate: new Date(),
});

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupOfDay from '../components/PopupOfDay.js';

const elements = document.querySelector('.calendar__wrapper');

const popupDayClassCreater = (selector) => {
  const popupDayOpener = new PopupOfDay(selector);   //создание попапа и передача селектора
  popupDayOpener.setEventListeners();
  return popupDayOpener;
};
const popupDayClassCreated =  popupDayClassCreater('.popup');

// const cardData = [

//   {
//     day: "14.08.2023"
//   },
//   {
//     day: "15.08.2023"
//   }
// ];

const classSection = (data) =>{
  const createSection = new Section(
    {
      items : data,
      renderer : (item) => {
        const newCard = cardCreater(item);
        createSection.addItem(newCard);
      }
    }, elements
  );
  return createSection;
};

const cardCreater = (cardData) => {     //функция, которая создает карточки
  const card = new Card(                //вызов класса
    cardData,                           //откуда берем данные(начальный массив или данные с формы)
    '#card-template',                   // селктор карточки
    {handleCardClick : (cardData) => {  // функция, открытия попап с данными карточки, как аргумент
      // const popupWithImageOpener = new PopupWithImage('.popup_type_photo');   //создание попапа и передача селектора
      const popupDayClassReady = popupDayClassCreated;
      popupDayClassReady.open(cardData);                                    //откртие попапа
    }});
  const cardGenerated = card.generateCard(); //генерация карточки
  return cardGenerated;
};


const btnShow = document.querySelector('.btnShow');

const calendarWrapper = document.querySelector('.calendar__wrapper');

const calendar = document.querySelector('.calendar');

btnShow.addEventListener('click', ()=>{
  event.preventDefault();
  calendarWrapper.textContent = '';
  let formDate = document.querySelector('.datepicker-here').value; // поулчае из инпута дат

  let ArrayOfDates = [];  // место хранение дат путешесвтия
  if(formDate.includes(' - ')){
    let twoDates = formDate.split(' - ');
    let dateStartNew = Date.parse(twoDates[0]);
    let dateEndNew = Date.parse(twoDates[1]);
    for (let i = dateStartNew; i <= dateEndNew; i = i + 24 * 60 * 60 * 1000){
      const dayObj = {};
      let newDay =(new Date(i).toLocaleString('ru-RU', {
          month: 'long',
          year: 'numeric',
          day: '2-digit',}));
      dayObj['day'] = newDay;
      ArrayOfDates.push(dayObj);
    }
  }else{
    let oneDay = formDate;
    oneDay = Date.parse(oneDay);
    const dayObj = {};
    let oneDayDate = new Date(oneDay).toLocaleString('ru-RU', {
      month: 'long',
      year: 'numeric',
      day: '2-digit',}
    );
    dayObj['day'] = oneDayDate;
    ArrayOfDates.push(dayObj);
  }

  if(ArrayOfDates[0] !== 'Invalid Date'){
    console.log(ArrayOfDates);
    calendar.classList.add('calendar_opened');


    const cardOfDays = classSection(ArrayOfDates);

    cardOfDays.renderItem();

  }
});







