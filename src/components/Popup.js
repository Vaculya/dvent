export default class Popup{
  constructor(popupSelector){
    this._popupSelector = document.querySelector(popupSelector);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(){  //логика закрытия попапа клавишей Esc
    if(event.key === 'Escape'){
      this.close();
    }
  }

  _handleOverlayClick(event){
    if(event.target.classList.contains('popup_opened')){
      this.close();
    }
  }

  open(){ // открыть попап
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close(){ // закрыть попап
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown',this._handleEscClose);
  }

  setEventListeners(){ //слушатель клика иконке закрытия.Popup также закрывается при клике на затемнённую область вокруг формы.
    this._popupSelector.addEventListener('click', this._handleOverlayClick);
  }
}
