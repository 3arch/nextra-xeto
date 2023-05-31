import classes from "./button.module.css";
interface Props {
  children?: any;
}

function Button(props: Props) {
  const { children } = props;

  let icon, link;

  try {
    link = children.props.children[0].props;
    icon = children.props.children[2].props;
  } catch (err) {
    return "Please specify a proper structure";
  }

  return (
    <a
      className={
        classes.button +
        " flex justify-center items-center border space-x-2 p-2 text-center rounded-full   button transition-all font-bold nx-bg-primary-700/5 dark:nx-bg-primary-300/10 contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 dark:border-none ring-0"
      }
      href={link.href}
    >
      <span>
        <img className="w-4 h-4" src={icon.src} alt={icon.src} />
      </span>
      <span>{link.children}</span>
    </a>
  );
}

export default Button;
