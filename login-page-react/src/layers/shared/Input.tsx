function Input(props: {placeholder: string, type: string}) {
    return (
        <>
            <input className='login-window__signer__inputter' placeholder={props.placeholder} type={props.type}></input>
        </>
    )
}

export default Input
