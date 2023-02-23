import React from "react";
import Slider from "@mui/material/Slider";

interface IProps {
  title: string;
  val: number;
}

interface IState {}

class SliderButton extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <Slider defaultValue={30} color="primary" />;
  }
}

export default SliderButton;
