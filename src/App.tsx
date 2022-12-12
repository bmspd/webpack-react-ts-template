import './styles.scss'
import IMAGE from './react.png'
import Logo from './logo.svg'
import LogoLink from './logo.svg?inline'
import ClickCounter from './ClickCounter'
export const App = () => {
  return (
    <>
      <h1>Hello :')</h1>
      <h1>
        {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={IMAGE} alt="React logo" width="200" />
      <img src={LogoLink} alt="React logo" width="200" />
      <Logo width={100} />
      <ClickCounter />
    </>
  )
}
