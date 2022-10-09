import React from 'react'
import { useState } from 'react';
import './ServiceForm.css'
const ServiceForm = () => {
    let newDate=new Date();
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
    let valueDate=formatDate(newDate);
    const [name,setName]=useState("")
    const [typePet,setTypePet]=useState("Mèo")
    const [typeService,setTypeSerivce]=useState("Cắt tỉa lông thú cưng")
    const [date,setDate]=useState(valueDate)
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const changeValueDate=(event)=>{
        setDate(event.target.value);
    }
    const changeValueName=(event)=>{
        setName(event.target.value);
    }
    const changeValueTypePet=(event)=>{
        setTypePet(event.target.value);
    }
    const changeValuePhone=(event)=>{
        setPhone(event.target.value);
    }
    const changeValueAddress=(event)=>{
        setAddress(event.target.value);
    }
    const changeValueTypeService=(event)=>{
        setTypeSerivce(event.target.value);
    }
    const SubmitServiceForm=(e)=>{
        e.preventdefault()
    }
    return (
        <section className='Service_form_container'>
            <div className="Service_form_container_detail">
                <div className="Service_form_container_header">
                    <h2 className='Service_form_header_text'>
                        Đặt lịch hẹn ngay với PetCare
                    </h2>
                    <form className="list_form_service_" onSubmit={SubmitServiceForm}>
                        <label htmlFor="service_name" className='label__serivce'>Họ và tên</label>
                        <input type="text" id="service_name" placeholder='Nguyễn Văn A' className='form_service__' value={name} onChange={changeValueName}/>
                        <label htmlFor="service_type" className='label__serivce'>Loại thú cưng</label>
                        <select name="pets" id="service_type" className='form_service__' value={typePet} onChange={changeValueTypePet}>
                            <option value="Chó">Chó</option>
                            <option value="Mèo">Mèo</option>
                        </select>
                        <label htmlFor="pets_type_service" className='label__serivce'>Loại dịch vụ cho thú cưng</label>
                        <select name="pets_type_service" id="pets_type_service" className='form_service__' value={typeService} onChange={changeValueTypeService}>
                            <option value="Cắt tỉa lông thú cưng">Cắt tỉa lông thú cưng</option>
                            <option value="Chăm sóc sức khỏe thú cưng">Chăm sóc sức khỏe thú cưng</option>
                            <option value="Thức ăn dinh dưỡng">Thức ăn dinh dưỡng</option>
                            <option value="Huấn luyện">Huấn luyện</option>
                            <option value="Tắm rửa">Tắm rửa</option>
                            <option value="Chích ngừa">Chích ngừa</option>
                        </select>
                        <label htmlFor="service_phone" className='label__serivce'>Số điện thoại</label>
                        <input type="text" placeholder='Số điện thoại' className='form_service__' value={phone} onChange={changeValuePhone}/>
                        <label htmlFor="service_address" className='label__serivce'>Địa chỉ</label>
                        <input type="text" placeholder='Địa chỉ' className='form_service__' value={address} onChange={changeValueAddress} />
                        <label htmlFor="service_date" className='label__serivce'>Ngày đặt lịch</label>
                        <input type="date" className='form_service__' value={date}  onChange={changeValueDate}/>
                        <button className='Submit__service_form'>ĐĂNG KÝ </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ServiceForm