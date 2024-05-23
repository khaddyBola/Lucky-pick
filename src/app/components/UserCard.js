import style from '../styles/Header.module.css'
import truncateEthAddress from 'truncate-eth-address'
const UserCard = ({ address }) => {
  const disconnectWalletHandler = async () => {
    try {
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div
        className={`${style.welcome} ${style.loginBtn}`}
        onClick={disconnectWalletHandler}
      >
        👋 Welcome,{' '}
        <span className={style.accentColor}>{truncateEthAddress(address)}</span>
      </div>
    </div>
  )
}
export default UserCard
