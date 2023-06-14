import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';


describe('Pruebas en <CounterApp />', () => {

    const initialValue = '10';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(
            <CounterApp
                 value={ initialValue }
            />
        );
        expect( container ).toMatchSnapshot();
    });


    test('debe de mostrar el valor inicial de 100', () => { 
        render( <CounterApp value={ initialValue }/> );
        expect( screen.getByText(initialValue) ).toBeTruthy();
    });

    test('debe de incrementar con el boton +1', () => { 
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('101') ).toBeTruthy();
    });

    test('debe de incrementar con el boton -1', () => { 
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9') ).toBeTruthy();
    });

    test('debe de funcionar el boton reset', () => { 
        render( <CounterApp value={ 365 } /> );
        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByText('-1') );
        // fireEvent.click( screen.getByText('reset') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        
        expect( screen.getByText( 365 ) ).toBeTruthy();
     });
 });