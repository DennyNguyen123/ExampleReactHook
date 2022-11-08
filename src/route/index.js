import { privateUseEffectRoute, publicUseEffectRoute } from "./RouteUseEffect";
import { privateUseStateRoute, publicUseStateRoute } from "./RouteUseState";
import { privateUseRefRoute, publicUseRefRoute } from "./RouteUseRef";
import { privateUseCallbackRoute, publicUseCallbackRoute } from "./RouteUseCallBack";
import { privateOtherRoute, publicOtherRoute } from "./RouteOther";

function Test() {
  return <div>Welcome</div>;
}
// function TestHeadOnly() {
//   return <div>Test Header Only</div>;
// }
function TestNoLayout() {
  return <div>Test No layout</div>;
}

const privateRoute = [
  ...privateUseEffectRoute,
  ...privateUseStateRoute,
  ...privateUseRefRoute,
  ...privateUseCallbackRoute,
  ...privateOtherRoute
];
const publicRoute = [
  { path: "/", component: Test },
  // {path:"/test-headeronly" ,component: TestHeadOnly , layout : HeaderOnly },
  { path: "/test-nolayout", component: TestNoLayout, layout: null },
  ...publicUseEffectRoute,
  ...publicUseStateRoute,
  ...publicUseRefRoute,
  ...publicUseCallbackRoute,
  ...publicOtherRoute
];

export { privateRoute, publicRoute };
