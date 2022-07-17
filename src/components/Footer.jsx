import styled from "styled-components";
import { PRIMARY } from "../Constants";

const FooterWrapper = styled.section`
  padding: 200px;
  height: 55px;
  background: ${PRIMARY};
  width: 100%;
`;

const Copy = styled.h3`
  color: white;
  font-size: 1em;
  margin: 0px;
  padding-right: 20px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Copy>&copy;Veronika Kavun 2022</Copy>
    </FooterWrapper>
  );
}

export default Footer;
