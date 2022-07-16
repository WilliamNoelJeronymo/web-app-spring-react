import axios from 'axios';
import icon from '../../assets/img/notificationIcon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';


type props = {
    saleID: number;
}

function handleClick(id : number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
    console.log("sucesso")
  })
}

function NotificationButton({saleID} : props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => {
      handleClick(saleID)
    }}>
      <img src={icon} alt="Notificar" />
    </div>
  )
}

export default NotificationButton;