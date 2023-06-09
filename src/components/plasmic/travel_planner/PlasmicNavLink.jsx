// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q81HoHETamUnN6docDuBYG
// Component: EEmwoCi7Bj
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_travel_planner.module.css"; // plasmic-import: q81HoHETamUnN6docDuBYG/projectcss
import sty from "./PlasmicNavLink.module.css"; // plasmic-import: EEmwoCi7Bj/css
import CarRoofBoxSvgrepoComsvgIcon from "./icons/PlasmicIcon__CarRoofBoxSvgrepoComsvg"; // plasmic-import: m-gXbb4aUr/icon

export const PlasmicNavLink__VariantProps = new Array();

export const PlasmicNavLink__ArgProps = new Array("icon");

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNavLink__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
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
    <a
      data-plasmic-name={"navLink"}
      data-plasmic-override={overrides.navLink}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.navLink
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <CarRoofBoxSvgrepoComsvgIcon
            className={classNames(projectcss.all, sty.svg__snj8H)}
            role={"img"}
          />
        ),

        value: args.icon,
        className: classNames(sty.slotTargetIcon)
      })}
    </a>
  );
}

const PlasmicDescendants = {
  navLink: ["navLink"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavLink__ArgProps,
          internalVariantPropNames: PlasmicNavLink__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "navLink") {
    func.displayName = "PlasmicNavLink";
  } else {
    func.displayName = `PlasmicNavLink.${nodeName}`;
  }
  return func;
}

export const PlasmicNavLink = Object.assign(
  // Top-level PlasmicNavLink renders the root element
  makeNodeComponent("navLink"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicNavLink
    internalVariantProps: PlasmicNavLink__VariantProps,
    internalArgProps: PlasmicNavLink__ArgProps
  }
);

export default PlasmicNavLink;
/* prettier-ignore-end */
