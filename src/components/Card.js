export default class Card {
  constructor(CardData, cardTemplate, {handleCardClick}){
    this._cardTemplate = cardTemplate;
    this._handleOpenPopup = handleCardClick; //функция открытия попап
    this._CardData = CardData;
    this._numOfDay = CardData.day;
    this._openCardPopup = this._openCardPopup.bind(this);
  }


  _getElement(){
    const newCard = document.querySelector(this._cardTemplate).content.querySelector('.card').cloneNode(true);
    return newCard;
  }

  generateCard(){
    this._card = this._getElement();
    console.log(this._card);
    const cardNumDay = this._card.querySelector('.card__day');
    cardNumDay.textContent = this._numOfDay;
    // this._cardBefore = getComputedStyle(this._card, "::before");

    this._setEventListener();
    return this._card;
  }

  _openCardPopup(){
    this._handleOpenPopup(this._CardData);
  }

  _setEventListener(){
    this._card.addEventListener('click', this._openCardPopup);
  }
}
