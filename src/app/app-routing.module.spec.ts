import { routes } from './app-routing.module';
import { PinsComponent } from './components/pins/pins.component';

fdescribe('App routing ', () => {
    beforeAll(() => {
        console.log('beforeAll')
    })

    beforeEach(() => {
        console.log('beforeEach')
    })

    beforeAll(() => {
        console.log('beforeAll')
    })

    afterEach(() => {
        console.log('afterEach')
    })

    it('Check the path of routes', () => {
        expect(routes[0].path).toBe('app');
        expect(routes[0].children).toContain({
            path: 'pins',
            component: PinsComponent
        })
    });

    it('Should match the children', () => {
        expect(routes[0].path).toBe('app');
        expect(routes[0].children).toContain({
            path: 'pins',
            component: PinsComponent
        })
    });

    it('Should match the children', () => {
        expect(routes[0].path).toBe('app');
        expect(routes[0].children).toContain({
            path: 'pins',
            component: PinsComponent
        })
    });
});