import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'malarcondev'
        };

        const user = getUser();
        console.log(user);

        expect( testUser ).toEqual( user );
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {


        const name = 'Marcos';

        const user = getUsuarioActivo( name );
        console.log( user );

        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    })
});