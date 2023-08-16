import clsx from "clsx";
import { Icon } from "../Icon";

import { BadgeProps } from "./types";

const Badge = (props: BadgeProps) => {
  const {
    type = "text",
    value,
    className,
    badgeClassName,
    children,
    ...restProps
  } = props;
  const isDot = type === "dot";
  const isText = type === "text";
  const _className = clsx(
    "badge-content",
    isText && "bg-white",
    isDot && "badge-withDot",
    className
  );

  return (
    <span {...restProps} className={clsx("badge", badgeClassName)}>
      {isDot && <Icon className="badge-icon" iconName="dot" variant="solid" />}
      <span className={_className}>{value || children}</span>
    </span>
  );
};

export default Badge;
