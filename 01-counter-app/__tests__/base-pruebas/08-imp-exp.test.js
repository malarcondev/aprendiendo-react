import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe de retornar un heroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById(id);

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
     });

     test('getHeroeById debe de retornar undefied si no existe  el ID', () => { 

        const id = 100;
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy();
     });


     test('getHeroesByOwner debe de retornar 3 heroes de DC', () => { 

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
     });

     test('getHeroesByOwner debe de retornar 2 heroes de Marvel', () => { 

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect( heroes ).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' },
        ]);
     });
 })