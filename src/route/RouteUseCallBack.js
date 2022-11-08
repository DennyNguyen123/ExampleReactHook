import {Memo,UseCallBack} from "../pages/UseCallback"

const privateUseCallbackRoute = []
const publicUseCallbackRoute = [
    { path: "/use-callback/memo", component: Memo , name : "React.Memo() HOC"},
    { path: "/use-callback/use-callback", component: UseCallBack , name : "Use Call back"},
]

export {privateUseCallbackRoute,publicUseCallbackRoute}