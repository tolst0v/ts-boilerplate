import 'normalize.css'
import { MainPage } from './components/MainPage/MainPage'
import './index.sass'

document.addEventListener('DOMContentLoaded', (): void => {
    const components: IComponent[] = [new MainPage()]

    components.forEach((component: IComponent): void => {
        component.render()
    })
})

export interface IComponent {
    render(): void
}
