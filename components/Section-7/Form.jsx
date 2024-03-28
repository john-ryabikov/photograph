'use client'

import Image from "next/image"
import axios from "axios";

import { useState } from "react"

const URI_API = "https://api.telegram.org/bot6833220386:AAEIj-86iGxnLgU4XRQwl5Jtv8V9XEwYnek/sendMessage"

export default function Form() {

    const types = ['Light','Comfort','Premium']

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [date, setDate] = useState('')
    const [phone, setPhone] = useState('')

    const sendForm = (e) => {
        e.preventDefault()
  
        if (name === "" || type === "" || date === "" || phone === "") {
            alert("Заполните форму полностью!")
            return
        }

        if (!/^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(phone)){
            alert("Неверный номер телефона!")
            return
        }
  
        const dataForm = {
            name: name,
            type: type,
            date: date, 
            phone: phone 
        }

        formSubmit(dataForm)
        setName('')
        setType('')
        setDate('')
        setPhone('')

    }
    
    const sendMsg = (arr_msg) => {
        let msg = ""
        for (let text_tg of arr_msg) {
          msg += text_tg
        }  
        axios.post(URI_API, {
          chat_id: -1002063310192,
          parse_mode: "html",
          text: msg
        })
        .catch ((err) => {
          alert(err)
        });
    }

    const formSubmit = (dataForm) => {
        const text_tg = [
          `<b>Имя клиента:</b> ${dataForm.name}\n`,
          `<b>Тип съемки:</b> ${dataForm.type}\n`,
          `<b>Дата съемки:</b> ${dataForm.date}\n`,
          `<b>Телефон клиента:</b> ${dataForm.phone}`
        ]
        sendMsg(text_tg)
        alert("Вы записаны на съемку!")
    }



    return (
        <form className="block-7__form form" onSubmit={sendForm}>
            <p className="form__title">Оставьте заявку</p>
            <div className="form__box">
                <label className="form__label" htmlFor="user_name">Ваше имя</label>
                <input 
                    className="form__input" 
                    type="text" 
                    placeholder="Введите имя" 
                    id="user_name" 
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                    required
                />
                <label className="form__label">Выберите пакет услуг</label>
                <div className="form__checkbox">
                    {types.map((radio, i) => (
                        <label className="form__checkbox-label" key={i}>
                            <input 
                                className="form__checkbox-input" 
                                type="radio" 
                                name="type_price"
                                checked = {radio === type}
                                onChange={() => {setType(radio)}}  
                                required
                            />{radio}
                            <div className="form__checkbox-radio">
                                <Image className="form__checkbox-radio-icon" src="img/Icons/checked_icon.svg" alt="" width={14} height={14}/>    
                            </div>
                        </label>
                    ))}
                </div>
                <label className="form__label" htmlFor="user_date">Желаемые дата и время съемок</label>
                <input 
                    className="form__input" 
                    type="datetime-local" 
                    id="user_date" 
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value)
                        console.log(date)
                    }}
                    required
                />
                <label className="form__label" htmlFor="user_phone">Номер телефона</label>
                <input 
                    className="form__input" 
                    type="tel" 
                    placeholder="+7(123)4567890" 
                    id="user_phone"
                    value={phone}
                    onChange={(e) => {setPhone(e.target.value)}} 
                    required
                />
                <button className="form__button" type="submit">Забронировать съемку</button>
            </div>
            <p className="form__rule">
                Нажимая на кнопку, Вы соглашаетесь с условиями<br/>
                <a className="form__rule-link" href="/" target="_blank">обработки персональных данных</a>
            </p>
        </form>
    )
}
