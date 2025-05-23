export default function Login({setUsername}) {
    return(
        <div>
            <h1>Welcome !</h1>
            <input placeholder="put your name" onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
    )
}
