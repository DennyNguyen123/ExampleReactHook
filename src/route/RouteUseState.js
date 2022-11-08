import {Checkbox_TwoWayBinding,Input_TwoWayBinding,Radio_TwoWayBinding,Usage} from "../pages/UseState"

const privateUseStateRoute = []
const publicUseStateRoute = [
    { path: "/use-state", component: Usage , name : "Usage"},
    { path: "/use-state/2waybinding-input", component: Input_TwoWayBinding ,name : "Input_TwoWayBinding"},
    { path: "/use-state/2waybinding-radio", component: Radio_TwoWayBinding ,name : "Radio_TwoWayBinding"},
    { path: "/use-state/2waybinding-checkbox", component: Checkbox_TwoWayBinding ,name : "Checkbox_TwoWayBinding"},
]

export {privateUseStateRoute,publicUseStateRoute}