// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iSzU1ZKEjf8SRxfxLxQeEs
// Component: weDLyk19MUtzQ
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import _320PxAccouncementBar from "../../_320PxAccouncementBar"; // plasmic-import: 5PwmdlifKvUDQ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_sparq_master_app_active_production.module.css"; // plasmic-import: iSzU1ZKEjf8SRxfxLxQeEs/projectcss
import sty from "./Plasmic_320PxAnnouncementBarI.module.css"; // plasmic-import: weDLyk19MUtzQ/css

export type Plasmic_320PxAnnouncementBarI__VariantMembers = {};
export type Plasmic_320PxAnnouncementBarI__VariantsArgs = {};
type VariantPropType = keyof Plasmic_320PxAnnouncementBarI__VariantsArgs;
export const Plasmic_320PxAnnouncementBarI__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_320PxAnnouncementBarI__ArgsType = {};
type ArgPropType = keyof Plasmic_320PxAnnouncementBarI__ArgsType;
export const Plasmic_320PxAnnouncementBarI__ArgProps = new Array<ArgPropType>();

export type Plasmic_320PxAnnouncementBarI__OverridesType = {
  div227?: p.Flex<"div">;
  _320PxAccouncementBar?: p.Flex<typeof _320PxAccouncementBar>;
};

export interface Default_320PxAnnouncementBarIProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_320PxAnnouncementBarI__RenderFunc(props: {
  variants: Plasmic_320PxAnnouncementBarI__VariantsArgs;
  args: Plasmic_320PxAnnouncementBarI__ArgsType;
  overrides: Plasmic_320PxAnnouncementBarI__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"div227"}
      data-plasmic-override={overrides.div227}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.div227
      )}
    >
      <_320PxAccouncementBar
        data-plasmic-name={"_320PxAccouncementBar"}
        data-plasmic-override={overrides._320PxAccouncementBar}
        className={classNames("__wab_instance", sty._320PxAccouncementBar)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  div227: ["div227", "_320PxAccouncementBar"],
  _320PxAccouncementBar: ["_320PxAccouncementBar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  div227: "div";
  _320PxAccouncementBar: typeof _320PxAccouncementBar;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_320PxAnnouncementBarI__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_320PxAnnouncementBarI__VariantsArgs;
    args?: Plasmic_320PxAnnouncementBarI__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_320PxAnnouncementBarI__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_320PxAnnouncementBarI__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: Plasmic_320PxAnnouncementBarI__ArgProps,
          internalVariantPropNames: Plasmic_320PxAnnouncementBarI__VariantProps
        }),
      [props, nodeName]
    );

    return Plasmic_320PxAnnouncementBarI__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "div227") {
    func.displayName = "Plasmic_320PxAnnouncementBarI";
  } else {
    func.displayName = `Plasmic_320PxAnnouncementBarI.${nodeName}`;
  }
  return func;
}

export const Plasmic_320PxAnnouncementBarI = Object.assign(
  // Top-level Plasmic_320PxAnnouncementBarI renders the root element
  makeNodeComponent("div227"),
  {
    // Helper components rendering sub-elements
    _320PxAccouncementBar: makeNodeComponent("_320PxAccouncementBar"),

    // Metadata about props expected for Plasmic_320PxAnnouncementBarI
    internalVariantProps: Plasmic_320PxAnnouncementBarI__VariantProps,
    internalArgProps: Plasmic_320PxAnnouncementBarI__ArgProps
  }
);

export default Plasmic_320PxAnnouncementBarI;
/* prettier-ignore-end */
