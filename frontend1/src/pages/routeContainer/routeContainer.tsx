import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from '../routeContainer/routes'

export const RouterContainer = () => {
    return (
    <BrowserRouter>
        <Switch>
            {routes.map((route, index)=><Route key={index} {...route}/>)}
        </Switch>
    </BrowserRouter>
    )
}