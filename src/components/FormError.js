import styled from "styled-components";

const SFormError = styled.span`
  display:inline-block;
  color:tomato;
  font-weight:300;
  font-size:.8rem;
`;

function FormError({message}) {
  return message==="" ? null : <SFormError>{message}</SFormError>
}

export default FormError;