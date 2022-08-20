import { IComponent } from '../..'
import './mainPage.sass'

export class MainPage implements IComponent {
    private rootId: string = 'root'

    private html: string = `
        <main class="main-page">
            <section class="main-page__title-container">
                <h1 class="main-page__title">TypeScript Boilerplate</h1>
            </section>
        </main>
    `

    constructor(rootId: string = 'root') {
        this.rootId = rootId
    }

    public render(): void {
        const root: HTMLElement = document.getElementById(this.rootId)

        root.innerHTML = this.html
    }
}
