import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notificationIcon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';


type props = {
    saleID: number;
}

function handleClick(id : number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
    toast.info("SMS enviado com sucesso!")
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