import React from 'react'
import styled from 'styled-components'

const FullBackWrapper = ({children,background}) => {
  return (
    <Wrapper backImage={background}>{children}</Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;

  display: flex;
  justify-content: center;
  align-items: center;  

  background:url(${props=>props.backImage});
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export default FullBackWrapper;