import { usContext } from "../../src/base-pruebas/06-deses-obj"

// TODO: FALTA TERMINAR TEST
describe('Pruebas en 06-deses-obj', () => { 
    test('xd', () => {

        const data = {
            nombreClave: 'clave',
            anios: 'edad',
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const response = usContext(data);
        console.log(response);

        // expect( response.nombreClave ).toBe( data )
    })
 })