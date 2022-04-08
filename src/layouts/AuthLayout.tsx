import Image from '../assets/loginbg.png';

const containerStyle: React.CSSProperties = {
  backgroundImage: `linear-gradient(to top,#FFF, rgba(117, 19, 93, 0)),url(${Image})`,
  height:'100vh',
  width:'100vw',
  backgroundPosition: 'top right',
  backgroundRepeat: 'no-repeat',
  backgroundSize:'cover',
}

interface IProps {
  children: JSX.Element
}

const AuthLayout: React.FC<IProps> = ({children}) => {
  return (
    <div style={containerStyle} className='bg-gradient-to-t from-white to-transparent ' >
      {children}
    </div>
  )
}

export default AuthLayout