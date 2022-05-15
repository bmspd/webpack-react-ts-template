import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'
import ClickCounter from "./ClickCounter";
export const App = () => {
    return <>
        <h1>Hello :')</h1>
        <h1>{process.env.NODE_ENV} - {process.env.name}</h1>
        <img src={IMAGE} alt="React logo" width="200"/>
        <img src={LOGO} alt="React logo" width="100"/>
        <ClickCounter />
    </>
}
