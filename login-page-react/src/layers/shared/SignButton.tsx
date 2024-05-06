function SignButton(props: {signType: string}) {
    return (
        <>
            <button className='button--sign'>{props.signType}</button>
        </>
    )
}

export default SignButton