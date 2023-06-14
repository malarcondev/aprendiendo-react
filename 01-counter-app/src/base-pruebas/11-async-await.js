export const getImagen = async() => {

    try {
        const apiKey = 'YArVjE2wb4R4XshcdX8h7k39t9QXN3bA';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;
    } catch (error) {
        console.error(error)
        return 'No se encontro la img';
    }   
}

 getImagen();