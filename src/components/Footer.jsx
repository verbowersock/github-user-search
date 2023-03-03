import styled from "styled-components";
import { PRIMARY } from "../Constants";

const FooterWrapper = styled.section`
  height: 55px;
  background: ${PRIMARY};
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const Copy = styled.h3`
  color: white;
  font-size: 1em;
  padding-left: 20px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Copy>&copy;Veronika Bowersock 2022 veronikabowersock@gmail.com</Copy>
    </FooterWrapper>
  );
}

export default Footer;
