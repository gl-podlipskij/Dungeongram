import {useState} from "react";

const useBoolean = ():[boolean, ()=>void, ()=>void]=>{
    const [value, setValue] = useState(false);

    return [
        value,
        ()=>setValue(true),
        ()=>setValue(false),
    ]
}

export default useBoolean;