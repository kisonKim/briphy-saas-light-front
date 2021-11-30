import React from 'react'
import styled from 'styled-components'
import FullBackWrapper from 'components/FullBackWrapper'
import checkboxChecked from 'resources/common/checkbox_checked.svg'
import checkbox from 'resources/common/checkbox.svg'
import background from 'resources/images/auth/login_background.jpg'
const Login = () =>{
  return(
    <FullBackWrapper background={background}>
      <WhiteBox>
        <div className="title">BRIPHY</div>
        <div className="sub-title">로그인</div>

        <InputWrapper>
          <input type="text" id="email" name="email" placeholder="Email" />
        </InputWrapper>
        <InputWrapper>
          <input type="password" id="password" name="password" placeholder="Password"/>
        </InputWrapper>
        <PolicyField>
          <label htmlFor="policy">
            <Check id="policy" name="policy" /><i className="check-icon"></i><span>기억하기</span>
          </label>
        </PolicyField>
        <SubmitButton type="submit" value={"로그인하기"} />
      </WhiteBox>
    </FullBackWrapper>
  )
}

const WhiteBox = styled.div`
  padding: 2rem;
  border-radius:1rem;
  color:white;
  transform:translate3d(-150%,0,0);
  .title{
    font-size:4rem;
    font-weight:600;
    text-align: center;
  }
  .sub-title{
    margin:1.25rem 0;
    font-size:1.25rem;
    text-align: center;
  }
`;

const InputWrapper = styled.div`
  margin-top:2rem;

  input {
    outline:none;
    border:none;
    background:transparent;
    border-bottom: 1px solid white;
    width:100%;
    color:white;
    &::placeholder{
      color:#ffffff94;
    }
  }
`;

const Check = styled.input.attrs({ type: 'checkbox' })``;

const PolicyField = styled.div`
  display: inline-block;
  width:100%;
  text-align:right;
  margin-top:1.25rem;
  font-weight:300;
  font-size:.8rem;
  ${Check} {
    display:none;
  }

  ${Check}:checked + .check-icon { 
      background-image: url(${checkboxChecked}); 
    }
  .check-icon  { 
    display: inline-block; 
    width: 20px;
    height: 20px; 
    margin: 0 10px 0 0;
    transform: translate3d(0, -7%, 0);
    background: url(${checkbox}) left center no-repeat; 
    border: 0.5px solid ${props=>props.hasError?'tomato':'none'};  
    vertical-align: middle; 
    transition-duration: .2s; 
  }
`;

const SubmitButton = styled.input`
  border: none;
  border-radius:1rem;
  margin-top: 12px;
  background-color: #FE5A1D;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width:100%;
  cursor:pointer;
  opacity: ${props=>props.disabled ? "0.5" : "1"};
`;
export default Login;