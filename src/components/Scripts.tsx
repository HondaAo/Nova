import { useEffect, useState } from "react";
import { json } from "stream/consumers";

interface ScriptProps {
    script: string
}

const Script: React.FC<ScriptProps> = ({script}) => {
    const [ scripts, setScripts ] = useState([]);
    useEffect(() => {
      if(script){
         setScripts(JSON.parse(script)) 
      }
    },[script])
    return (
        <div>
            {scripts && scripts.map((script): any => {
                return (

                )
            })}
        </div>
    )
}

export default Script