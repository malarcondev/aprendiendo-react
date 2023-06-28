import { memo } from "react";

export const ShowIncrement = memo( ({ increment }) => {
  console.log('volvi a generar');
  return (
    <button className='btn btn-primary' onClick={ () => { increment(5) }}>
        incrementar
    </button>
  )
});
