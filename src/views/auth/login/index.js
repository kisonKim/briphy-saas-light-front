import React from 'react'
import styled from 'styled-components'
import FullBackWrapper from 'components/FullBackWrapper'
import checkboxChecked from 'resources/common/checkbox_checked.svg'
import checkbox from 'resources/common/checkbox.svg'
import background from 'resources/images/auth/login_background.jpg'
import {emailReg} from 'components/regulation'
import FormError from "components/FormError";
import { useForm } from "react-hook-form";
const Login = () =>{
  
  const { register, handleSubmit, formState, getValues, setError,clearErrors } = useForm({
    mode: "onChange",
  });

  const onSubmitValid = async(data) => {
    let {email, password} = data
    // let inquiry = textAreaValue.current.value;
    
    // setLoading(true)
    // const result = await ContactApi.store(name, company, email, phone, inquiry, policy?1:2)
    // setLoading(false)

    // if(result.data.success){
    //   const andrewPhone = await siteSignApi.contactSMS(name,email,phone)
    //   swal({title: "접수가 완료되었습니다.",text: "",icon: "success",dangerMode: true,}).then( async(answer) => {location.href='/'})
    // }else{
    //   swal({title: "문제가 발생하였습니다.",text: "새로고침 후 다시 시도하시거나 관리자에게 문의해주세요.",icon: "warning",dangerMode: true,})
    // }
    // if (loading) {
    //   return;
    // }
    // createAccount({
    //   variables: {
    //     ...data,
    //   },
    // });
  };

  const clearLoginError = () => {
    clearErrors("result");
  };

  return(
    <FullBackWrapper background={background}>
      <WhiteBox>
        {/* <div className="banner">국내 최초 플랫폼 촬영 대행 서비스</div> */}
        <div className="title">BRIPHY</div>
        <div className="sub-title">로그인</div>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <InputWrapper hasError={Boolean(formState.errors?.email?.message)}>
            <input 
              {...register('email',{
                required:"이메일을 입력하세요.",
                pattern:
                {
                  value: emailReg,
                  message: "형식에 맞는 이메일을 입력해주세요."
                } 
              })}
              onFocus={clearLoginError}
              type="text" id="email" name="email" placeholder="Email" />
          </InputWrapper >
          <FormError message = {formState.errors?.email?.message}  />
          <InputWrapper hasError={Boolean(formState.errors?.password?.message)}>
            <input 
              {...register('password',{
                required:"비밀번호를 입력하세요."
              })}
              onFocus={clearLoginError}
              type="password" id="password" name="password" placeholder="Password"/>
          </InputWrapper>
          <FormError message = {formState.errors?.password?.message}  />
          <PolicyField>
            <label htmlFor="policy">
              <Check id="policy" name="policy" /><i className="check-icon"></i><span>기억하기</span>
            </label>
          </PolicyField>
          <SubmitButton type="submit" value={"로그인하기"} />
        </form>
      </WhiteBox>
    </FullBackWrapper>
  )
}

const WhiteBox = styled.div`
  padding: 2rem;
  border-radius:1rem;
  color:white;
  width:400px;
  transform:translate3d(-100%,0,0);

  .banner {
    color:white;
    margin-bottom:1rem;
    background-color:#FE5A1D;
    text-align:center;
    line-height:2;
    font-size:1.2rem;
    font-weight:600;
    border-radius:5px;
  }
  .title {
    font-size:4rem;
    font-weight:600;
    text-align: center;
  }
  .sub-title {
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
    border-bottom: ${props=>props.hasError?'1px solid #FE5A1D':'1px solid white'};
    width:100%;
    color:white;
    &::placeholder{
      color:${props=>props.hasError?'#FE5A1D':'#ffffff94'};
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
    border: 0.5px solid ${props=>props.hasError?'#FE5A1D':'none'};  
    vertical-align: middle; 
    transition-duration: .2s; 
  }
`;

const SubmitButton = styled.input`
  border: none;
  border-radius:5px;
  margin-top: 12px;
  background-color: #FE5A1D;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  font-size:1.2rem;
  width:100%;
  cursor:pointer;
  opacity: ${props=>props.disabled ? "0.5" : "1"};
`;
export default Login;