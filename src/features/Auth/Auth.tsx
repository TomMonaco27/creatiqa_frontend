import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IPopup } from '../Menu/types';

const closeSVG = require('../../assets/images/close.svg')

export const Auth: React.FC<{popup: IPopup | any, handlers: any }> = ({popup, handlers}) => {
    const dispatch = useDispatch()
    const [usr, setUsr] = useState<any>({
        email: "",
        password: ""
      })
    const close = handlers?.[0]
    const showRegistration = handlers?.[1]
    const navigate = useNavigate()
      const submit = (e:  React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        dispatch({type: "FETCH_AUTH_REQUEST"})
        popup[1](false)
        return navigate('/home')
//         axios({
// //             method: 'POST',
// //             url: 'http://217.25.88.184:8080/authusers/',
// //             data: usr,

//             method: 'PUT',
//             url: 'http://217.25.88.184:8080/api-authlogin/?next=/auth',
//             data: usr,
//             xsrfCookieName: "XSRF-TOKEN",
//             xsrfHeaderName: "X-CSRFToken",
//             headers: {
//               'Content-Type': 'application/json',
//             }

//         }).then(res => {
//             dispatch({type: "FETCH_AUTH_REQUEST"})
            
//         }).catch(() => dispatch({type: "FETCH_AUTH_ERROR"}))
      }


    return(
        <>
         {popup[0].auth &&   
               <div className="overflow-y-scroll max-h-[90%] rounded-xl bg-[white] w-[480px]">
                
                 <form action="http://217.25.88.184:8080/api-authlogin/?next=/auth" className="w-80 my-5 mx-auto">
                <input type="hidden" name='_csrf' value='SKUDASCSRF' />
                     <label htmlFor="title" className="title inline-block text-xl mt-2.5">Вход</label>
                     <button onClick={close} className="x2 absolute outline-none border-none bg-transparent cursor-pointer translate-x-[300px] translate-y-[10px]"><img src={`${closeSVG}`} alt="login-creatiqa" /></button>
                     <fieldset className='flex flex-col p-0 m-0'>
                         <label className='flex flex-col mt-4' htmlFor="email">E-mail 
                         <input className="py-3 px-4 text-base font-normal  mt-0.5 outlone-none border border-[#d9d9d9] border-solid rounded-xl .placeholder-gray-500" onChange={e => setUsr({...usr, email: e.target.value})} type="email" placeholder="Введите адрес электронной почты" />
                         </label>
                         <label className='flex flex-col mt-4' htmlFor="password">Пароль
                         <input className="py-3 px-4 text-base font-normal  mt-0.5 outlone-none border border-[#d9d9d9] border-solid rounded-xl .placeholder-gray-500" onChange={e => setUsr({...usr, password: e.target.value})} type="password" placeholder="Придумайте пароль" />
                         </label>
                         <button onClick={submit} className="mt-2.5 bg-[#784adc] rounded-xl outline-none border-none cursor-pointer text-white font-normal py-4 px-9">Войти</button>
                         <p className="text-xs my-2">Нет аккаунт? <Link onClick={showRegistration} className="text-[#784adc]" to='/'>Зарегистрироваться</Link></p>
                     </fieldset>
                 </form>
             </div>}
        </>
    )
}