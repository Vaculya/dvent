import Popup from './Popup.js';

export default class PopupOfDay extends Popup{
  constructor(popupSelector){
    super(popupSelector);
    console.log(popupSelector);
    this._cardCreaterDay = this._popupSelector.querySelector('.card-creater__day');
  }

  open(item){
    super.open();
    console.log(item);
    this._itemDate = item.day;
    this._cardCreaterDay.textContent = this._itemDate;
  }
}
