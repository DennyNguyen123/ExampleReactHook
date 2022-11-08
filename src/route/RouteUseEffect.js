import {
    FakeChatApp,
    ListenDOM,
    ResizeDOM,
    Review_Avatar,
    Situation_One,
    Situation_Three,
    Situation_Two,
    With_Timer_Function,
    Usage,
  } from "../pages/UseEffectComponents";

const privateUseEffectRoute = []
const publicUseEffectRoute = [
    { path: "/use-effect", component: Usage , name : "Usage"},
    { path: "/use-effect/situate-1", component: Situation_One ,name : "Use 1"},
    { path: "/use-effect/situate-2", component: Situation_Two ,name : "Use 2"},
    { path: "/use-effect/situate-3", component: Situation_Three ,name : "Use 3"},
    { path: "/use-effect/listen-dom", component: ListenDOM ,name : "Listen DOM"} ,
    { path: "/use-effect/resize-dom", component: ResizeDOM ,name : "Resize DOM"},
    { path: "/use-effect/fake-chat-app", component: FakeChatApp ,name : "Fake Chat App"},
    { path: "/use-effect/review-avatar", component: Review_Avatar ,name : "Review Avatar"},
    { path: "/use-effect/with-timer-function", component: With_Timer_Function,name : "With Timer Function"},
]

export {privateUseEffectRoute,publicUseEffectRoute}