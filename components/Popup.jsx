function Popup({title, popupClose, backDrop}){

    function ConfirmButton(){
        console.log("Confirm button clicked!");
    }

    function cancelButton(){
        console.log("Cancel button clicked!");
    }

    function backDropArea(){
        console.log("Back Drop clicked!");
    }

    return (
        <>
        <div className="popup">
        <span>{ title }</span>
  <div className="popup__btns">
    <button className="popup__btn" onClick={() => ConfirmButton()}>Confirm</button>
    <button className="popup__btn popup__btn--cancel" onClick={() => popupClose()}>Cancel</button>
  </div>
</div>
<div onClick={() => backDrop()} className="backdrop"></div>
</>
    )
}

export default Popup;