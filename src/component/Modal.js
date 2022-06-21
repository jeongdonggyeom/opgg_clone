import '../styleComponent/modal.css';

function Modal()
{
    return(
        <div className="modal">
            <div className="modalDuo">
                <div className="modalDuo--img">
                    <span>N</span>
                    <img src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-duo-gray.svg?image=q_auto,f_webp,w_48&v=1654157118862" alt="icon" />
                </div>
                <span className="modalText">Duo</span>
            </div>
        </div>
    )
}
export default Modal;