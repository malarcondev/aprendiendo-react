import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;


  return (
    <>
        <h1>Form with custome hook</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />
        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="malarcondev@gmail.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />
        <input 
            type="password" 
            className="form-control mt-2"
            placeholder="contraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />

       
        <div class="d-grid gap-2">
            <button 
                className='btn btn-primary mt-2'
                onClick={ onResetForm }>
                borrar
            </button>
        </div>
    </>
  )
}
