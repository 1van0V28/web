import {useState} from 'react'
import Input from 'D:/WEB/learning/login-page-react/src/layers/shared/Input.tsx'
import SignButton from 'D:/WEB/learning/login-page-react/src/layers/shared/SignButton.tsx'


function LoginWindow() {
    const [state, setState] = useState({
        changerButton: 'SIGN IN',
        changerHeader: 'Welcome, Back!',
        changerMessage: 'To keep connected with us login with your personal info'
    })


    function changeLoginWindow() {
        const changer = document.querySelector('.container--changer')
        const changerButton = document.querySelector('.button--sign')

        if (state.changerButton == 'SIGN IN') {
            changer!.setAttribute('style', 'left: 50%')
            changerButton!.setAttribute('style', 'width: 14vw')
            setState({
                changerButton: 'SIGN UP',
                changerHeader: 'Hello, Friend!',
                changerMessage: 'Enter your personal details and start journey with us'
            })
            return
        }
        changer!.setAttribute('style', 'left: 21%')
        changerButton!.setAttribute('style', 'width: 10vw')
        setState({
            changerButton: 'SIGN IN',
            changerHeader: 'Welcome, Back!',
            changerMessage: 'To keep connected with us login with your personal info'
        })
        return
    }


    return (
        <>
            <div className='login-window__container container--changer'>
                <div className='login-window__container__changer'>
                    <h1>{state.changerHeader}</h1>
                    <p>{state.changerMessage}</p>
                    <button className='button--sign' onClick={changeLoginWindow}>{state.changerButton}</button>
                </div>
            </div>

            <div className='login-window__container container--signer'>
                <div className='login-window__container__signer'>
                    <h1>Sign in Account</h1>
                    <Input placeholder='Email' type='email' />
                    <Input placeholder='Password' type='password' />
                    <SignButton signType={'SIGN IN'} />
                </div>
            </div>
            
            <div className='login-window__container container--sign'>
                <div className='login-window__container__signer'>
                    <h1>Create Account</h1>
                    <Input placeholder='Nickname' type='text' />
                    <Input placeholder='Email' type='email' />
                    <Input placeholder='Password' type='password'/>
                    <SignButton signType={'SIGN UP'} />
                </div>
            </div>
        </>
    )
}

export default LoginWindow