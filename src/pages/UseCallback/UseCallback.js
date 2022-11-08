import {useCallback,useState} from 'react';
import SubUseCallback from './SubUseCallback';
import SubUseCallbackRender from './SubUseCallbackRender';
const UseCallBack = () => {
  const [num, setNum] = useState(0);

    const handleNum = useCallback(()=>{
        setNum(pre=>pre+1);
    },[])

    const handleNum1 = ()=>{
        setNum(pre=>pre+1);
    }

    return (
        <div>
            <h1>Use Callback</h1>
            <h2>{num}</h2>
            <SubUseCallback handle = {handleNum}/>
            <SubUseCallbackRender handlerender = {handleNum1}/>
        </div>
    );
}

export {UseCallBack};
