import React from "react";
import { Icon } from "@iconify/react";
import './MenuProductLayout2.css'
const MenuProductLayout2 = ({ activeProduct2, onHandleClickTab }) => {
    const checkActive = (idtab) => {
        let classTab = 'Menu_item_content_product_second '
        if (idtab === activeProduct2) {
            classTab += 'active_menu_product2'
        }
        return classTab
    }
    const handleClickTab = (idtab) => {
        onHandleClickTab(idtab)
    }
    return (
        <div className="MenuProductLayout2_container">
            <button className={checkActive('Tất cả sản phẩm')}
                onClick={() => { handleClickTab('Tất cả sản phẩm') }}
            >
                <span>
                    Tất cả sản phẩm
                </span>
            </button>
            <button className={checkActive('Thức ăn')}
                onClick={() => { handleClickTab('Thức ăn') }}

            >
                <Icon
                    icon="game-icons:canned-fish"
                    className="icon_menu_product_second"
                />
                <span>
                Thức ăn
                </span>
            </button>
            <button className={checkActive('Quần áo - phụ kiện')}
                onClick={() => {handleClickTab('Quần áo - phụ kiện') }}
            >
                <Icon
                    icon="icon-park-outline:basketball-clothes"
                    className="icon_menu_product_second"
                />
                <span>
                Quần áo - phụ kiện
                </span>
            </button>
            <button className={checkActive('Đồ chơi')}
                onClick={() => { handleClickTab('Đồ chơi') }}
            >
                <Icon
                    icon="ph:soccer-ball-duotone"
                    className="icon_menu_product_second"
                />
                <span>
                Đồ chơi
                </span>
            </button>
            <button className={checkActive('Nhà - Lồng')}
                onClick={() => { handleClickTab('Nhà - Lồng') }}
            >
                <Icon icon="clarity:house-solid" className="icon_menu_product_second" />
                <span>
                Nhà - Lồng
                </span>
            </button>
            <button className={checkActive('Dụng cụ ăn uống')}
                onClick={() => { handleClickTab('Dụng cụ ăn uống') }}
            >
                <Icon icon="game-icons:dog-bowl" className="icon_menu_product_second" />
                <span>
                Dụng cụ ăn uống
                </span>
            </button>
            <button className={checkActive('Dụng cụ vệ sinh')}
                onClick={() => { handleClickTab('Dụng cụ vệ sinh') }}
            >
                <Icon icon="el:broom" className="icon_menu_product_second" />
                <span>
                Dụng cụ vệ sinh
                </span>
            </button>
        </div>
    );
};

export default MenuProductLayout2;
