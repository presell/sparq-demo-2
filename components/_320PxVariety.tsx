// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  Plasmic_320PxVariety,
  Default_320PxVarietyProps
} from "./plasmic/sparq_master_app_active_production/Plasmic_320PxVariety";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface _320PxVarietyProps extends Omit<Default_320PxVarietyProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from Default_320PxVarietyProps altogether and have
// total control over the props for your component.
export interface _320PxVarietyProps extends Default_320PxVarietyProps {}

function _320PxVariety_(
  props: _320PxVarietyProps,
  ref: HTMLElementRefOf<"div">
) {
  // Use Plasmic_320PxVariety to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into Plasmic_320PxVariety are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all _320PxVarietyProps here, but feel free
  // to do whatever works for you.

  return <Plasmic_320PxVariety div201={{ ref }} {...props} />;
}

const _320PxVariety = React.forwardRef(_320PxVariety_);
export default _320PxVariety;
