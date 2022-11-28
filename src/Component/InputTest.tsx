import React, {useState} from "react";

const InputTest=()=>{ /* input X / Input(o) <- 컨포넌트 무조건 대문자*/
    const [text, setText] = useState("");
    console.log(text)

    return(
    <form action="">
     <div>ID
        <input type="text"
            id = "ID" name="ID"
            onChange={(event) => {
                console.log(event)
                setText((event.currentTarget.value))
           }}/>
     </div>  
     <div>Password
        <input type="text"
            id = "Password" name="Password"
            onChange={(event) => {
                console.log(event)
                setText((event.currentTarget.value))
            }}/>
    </div>
        <input type="reset"></input>
        </form>
    )
 }

 export default InputTest;

