import "./styles.scss";

type Props = {
  mode?: "light" | "dark";
}

export const Divider = ({ mode = "light" }: Props) => {
  return <div className={`divider-container ${mode}`}></div>;
};
