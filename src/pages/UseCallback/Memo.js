import {useState,useEffect} from 'react';
import ComponentsOfMemo from './ComponentsOfMemo';
import {Button} from "reactstrap"
const Memo = () => {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(() => {
        setNum2(num)
        return () => {
        };
    }, [num]);

    return (
        <div>
            <h1>MEMO</h1>
            <h2>{num2}</h2>
            <ComponentsOfMemo num = {num}/>
            <Button onClick={()=>setNum(pre=>pre+1)}>Inscrease With Render</Button>
            <Button style={{"margin":"10px"}} onClick={()=>setNum2(pre=>pre+1)}>Inscrease Not Render</Button>
        </div>
    );
}

export default Memo;
