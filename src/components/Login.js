import { useNavigate, Link, useLocation } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { firebaseConfig } from './firebaseConfig.js';
import { useEffect, useState } from "react";

const Login = () => {
  initializeApp(firebaseConfig);
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname === '/login' ? true:false;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ isUserExist, setUserExist ] = useState(false);
  const [ isEmailUsed, setIsEmailUsed] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const auth = getAuth();

  const validation = (fieldName, value) => {
    switch(fieldName) {
      case 'email':
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      case 'password':
        return value.length >= 6;
      default:
        break;
    }
  };

  const ctaClickHandler = (e) => {
    e.preventDefault();

    if(!validation('email', email) || !validation('password', password)){
      setEmailValid(validation('email', email));
      setPasswordValid(validation('password', password));
      return;
    }

    if(page){
      signInWithEmailAndPassword(auth, email, password)
      .then( auth => {
        if(auth){
          navigate('/dashboard');
        }
      })
      .catch( error => setUserExist(true));
    }else{
      createUserWithEmailAndPassword(auth, email, password)
      .then(
        auth => {
          if(auth){
            navigate('/dashboard');
          }
        })
        .catch( error => setIsEmailUsed(true));
    }
  };

  useEffect(()=>{
    setUserExist(false);
    setIsEmailUsed(false);
  },[location]);
  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return(
    <div className="login">
      <div className="holder">
        <h1 className="text-white">{ page ? 'ログイン' : '登録'}</h1>
        <br/>
        <form>
          <input 
            className="form-control" 
            value={email} 
            onChange={emailOnChangeHandler} 
            type="email" 
            placeholder="メールアドレス"/>
          { !emailValid && <p className="text-danger">有効なメールアドレスを入力してください。</p> }
          <input 
            className="form-control"
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} 
            type="password" 
            placeholder="パスワード"/>
          { !passwordValid && <p className="text-danger">パスワードは4文字以上60文字以内でなければいけません。</p>}
          <button className="btn btn-danger btn-block" onClick={ctaClickHandler}>
            { page ? 'ログイン' : '登録'}
          </button>
          <br/>
          {
            page && <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label text-white" htmlFor="flexCheckDefault">
              ログインしたままにする
            </label>
          </div>
          }
        </form>
        <br/>
        <br/>
        { isUserExist && <p className="text-danger">存在しないユーザーです | 新規登録してください</p> }
        { isEmailUsed && <p className="text-danger">登録済みのユーザーです | ログインしてください</p> }
        <div className="login-form-other">
          <div className="login-signup-now">
          { page ? '初めてご利用ですか?' : '登録済みユーザー'} &nbsp;
            <Link className=" " to={page ? '/register' : '/login'}>
              { page ? '新規登録はこちら' : 'ログイン'}
            </Link>.
          </div>
        </div>
      </div>
      <div className="shadow"></div>
      <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
    </div>
  )
}

export default Login;