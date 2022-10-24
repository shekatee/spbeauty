import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
  // Здесь устанавливается минимальная ширина для кнопки
  let minWidth = props.minWidth === undefined ? "217px" : props.minWidth;
  const Button = styled.div`
    background: #;
    border: 1px solid #64748b;
    border-radius: 24px;
    min-width: ${minWidth};
    color: #152842;
    &:hover {
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid #ffffff;
    }
    &:active {
      background: #dfdfdf;
    }
  `;
  return (
    <Clickable>
      <Button className="p-2 text-md">{props.children}</Button>
    </Clickable>
  );
}

export default SecondaryButton;
