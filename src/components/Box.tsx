import { memo } from "react";
import { CustomContainer } from "../styles/theme/global";
import styles from "./Box.module.scss";

type Props = {
  type: string;
  boxColor: string;
  onBoxClick: (type: string) => void;
};

const Box = (props: Props) => {
  return (
    <>
      <CustomContainer
        className={`${styles["box"]}`}
        style={{ backgroundColor: `${props.boxColor}` }}
        onClick={() => props.onBoxClick(props.type)}
      ></CustomContainer>
    </>
  );
};

export default memo(Box);
