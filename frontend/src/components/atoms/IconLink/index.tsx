import { memo } from "react";

interface IconLinkProps {
  icon: React.ReactNode;
  link?: string;
  altText?: string;
  text?: string;
}

function IconLink({ icon, link, altText, text, ...props }: IconLinkProps) {
  return (
    <a data-icon-button href={link} aria-label={altText} {...props}>
      {icon}
      {text && <span>{text}</span>}
    </a>
  );
}

export default memo(IconLink);
