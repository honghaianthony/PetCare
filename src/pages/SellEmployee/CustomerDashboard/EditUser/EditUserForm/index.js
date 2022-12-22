import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { getUserById, updateUser } from "../../../../../apis/userApi";

export default function EditUserForm({ onClose, submitSuccess, idUser }) {
    const [dataUser, setDataUser] = useState({});

    useEffect(() => {
        async function fetchData() {
            const resUser = await getUserById(idUser);
            reset({
                firstName: resUser.user.firstName,
                lastName: resUser.user.lastName,
                phone: resUser.user.phone,
                email: resUser.user.email,
                address: resUser.user.address,
            });
            setDataUser(resUser);
        }
        fetchData();
    }, []);
    console.log("dataUser", dataUser);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        async function updateData() {
            await updateUser(
                {
                    ...dataUser,
                    ...dataUser.user,
                    ...data,
                },
                dataUser.user._id
            );
            submitSuccess();
            onClose();
        }
        updateData();
    };
    return (
        <div className="add-product-container">
            <div className="layer"></div>
            <div className={`add-product-form-container`}>
                <div className="heading">
                    <h4 className="title">Cập nhật người dùng </h4>
                    <Icon
                        icon="ci:close-big"
                        onClick={() => {
                            onClose();
                        }}
                    />
                </div>
                <form
                    className="product-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="product-name">
                        <label>Tên người dùng</label>
                        <input
                            defaultValue=""
                            {...register("firstName", { required: true })}
                            className={errors.firstName ? "invalid" : ""}
                        />
                        {errors.firstName && (
                            <p className="invalid">
                                Trường dữ liệu không được để trống
                            </p>
                        )}
                        <p></p>
                    </div>
                    <div className="product-amount">
                        <label>Họ</label>
                        <input
                            {...register("lastName", {
                                required: true,
                            })}
                            className={errors.lastName ? "invalid" : ""}
                        />
                        {errors.lastName && (
                            <p className="invalid">
                                Trường dữ liệu không được để trống
                            </p>
                        )}
                    </div>
                    <div className="product-price">
                        <label>Email</label>
                        <input
                            {...register("email", { required: true })}
                            className={errors.email ? "invalid" : ""}
                        />
                        {errors.email && (
                            <p className="invalid">
                                Trường dữ liệu không được để trống
                            </p>
                        )}
                    </div>
                    <div className="product-discount">
                        <label>Số điện thoại</label>
                        <input
                            {...register("phone", { required: true })}
                            className={errors.phone ? "invalid" : ""}
                        />
                        {errors.phone && (
                            <p className="invalid">
                                Trường dữ liệu không được để trống
                            </p>
                        )}
                    </div>

                    <div className="product-description">
                        <label>Địa chỉ</label>
                        <input
                            {...register("address", { required: true })}
                            className={errors.address ? "invalid" : ""}
                        />
                        {errors.address && (
                            <p className="invalid">
                                Trường dữ liệu không được để trống
                            </p>
                        )}
                    </div>
                    <div className="button-group">
                        <input type="submit" value="Cập nhật" />
                        <input
                            type="submit"
                            value="Hủy"
                            onClick={() => {
                                onClose();
                            }}
                            className="cancel"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
