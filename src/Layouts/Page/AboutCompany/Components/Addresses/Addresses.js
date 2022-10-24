import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from "styled-components";

const AddressesBlock = styled.div`
  background: #;
  border: 1px solid #E6EAEE;
  border-radius: 8px;
  padding: 24px 24px 24px;
  margin: 5px 0px 15px 20px;
  width: 550 px;
`;

const Button = styled.div`
margin: 175px 0px 0px 0px;
`;

function Addresses() {
  return (
    <AddressesBlock className="d-inline-flex flex-column justify-content-between gap-4 mt-4 ms-4">
      <div className="d-inline-flex flex-column gap-4">
        <div className="title">Адреса заведений </div>
        <ListElement>Санкт-Петербург, Навский пр-т.28</ListElement>
        <ListElement>Санкт-Петербург, Казанский ул, 7</ListElement>
             </div>
      <Button>
      <SecondaryButton>Добавить филиал</SecondaryButton>
      </Button>
      </AddressesBlock>       
  );
}

export default Addresses;