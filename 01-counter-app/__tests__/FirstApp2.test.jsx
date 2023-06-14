import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola, soy Zoro Roronoa';
    const subtitle = 'El mejor espadachin del mundo';

    test('debe de hacer match con el snapshot', () => { 
        const { container } = render(
            <FirstApp
                title={ title }
            />
        );

        expect( container ).toMatchSnapshot();
     });

     test('debe de mostrar el mensaje "Hola, soy Zoro Roronoa"', () => { 
        render(
            <FirstApp
                title={ title }
            />
        );

        expect( screen.getByText(title) ).toBeTruthy();
      });

      test('debe de mostrar el titulo en un h1', () => { 
        render(
            <FirstApp
                title={ title }
            />
        );

        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toBe( title );
       });

       test('debe de mostrar el subtitulo enviado por props', () => {
        render(
            <FirstApp
                title={ title }
                subTitle={ subtitle }
            />
        );

        expect( screen.getAllByText(subtitle).length ).toBe( 2 );
       })
 });