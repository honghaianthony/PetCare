import React from 'react'

const MenuContentTab = ({activeProduct2}) => {
    const checkActive=(idtab)=>{
        let classTab='Sort_product_item_left_second '
        if(idtab===activeProduct2){
            classTab+='active_MenuContentTab'
        }
        return classTab
    }
    // console.log(activeProduct2)
  return (
    <>
    <div className={checkActive('Tất cả sản phẩm')}>
            <p >Tất cả sản phẩm</p> 
    </div>
    <div className={checkActive('Thức ăn')}>
            <p >Thức ăn</p> 
    </div>
    <div className={checkActive('Quần áo - phụ kiện')}>
            <p >Quần áo - phụ kiện</p> 
    </div>
    <div className={checkActive('Đồ chơi')}>
            <p >Đồ chơi</p> 
    </div>
    <div className={checkActive('Nhà - Lồng')}>
            <p >Nhà - Lồng</p> 
    </div>
    <div className={checkActive('Dụng cụ ăn uống')}>
            <p >Dụng cụ ăn uống</p> 
    </div>
    <div className={checkActive('Dụng cụ vệ sinh')}>
            <p >Dụng cụ vệ sinh</p> 
    </div>
    </>
  )
}

export default MenuContentTab