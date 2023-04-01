import { useState } from "react";
import InputShadow from "../../components/InputShadow/InputShadow";
import personalImg from "../../assets/personal-img.png";
import "./PersonalSettings.scss";
import ButtonRed from "../../components/ButtonRed/ButtonRed";

function PersonalSettings() {
    const [storeName, setStoreName] = useState("Lorem ipsum");
    const [storeDescr, setStoreDescr] = useState(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    );
    const [storeAdress, setStoreAdress] = useState("Проспект Туран 48, Алматы");
    const [additionalInfo, setAdditionalInfo] = useState("Пн-Вс 09:00 - 21:00");
    const [storeWhatsapp, setStoreWhatsapp] = useState("+7 700 000 0000");
    const [storePhoneNumber, setStorePhoneNumber] = useState("+7 700 000 0000");
    const [storeTwogisLink, setStoreTwogisLink] = useState(
        "https://go.2gis.com/q2zh8"
    );

    return (
        <div className="personal-settings-wrap">
            <form className="personal-settings-form">
                <div className="personal-settings-top">
                    <div className="personal-settings-img-upl">
                        <div className="personal-settings-img">
                            <img
                                src={personalImg}
                                alt="personal settings image"
                            />
                        </div>
                        <label
                            htmlFor="imgUpload"
                            className="img-lbl-btn btn-red">
                            Загрузить фото
                        </label>
                        <input
                            className="personal-settings-inp-img-upl"
                            type="file"
                            name="imageUpload"
                            id="imgUpload"
                            accept="image/jpg, image/png, image/jpeg"
                        />
                    </div>
                    <div className="personal-settings-store-info">
                        <InputShadow
                            wrapClass="inp-wrap-storename"
                            type="text"
                            lblTxt="Название магазина"
                            name="storeName"
                            value={storeName}
                            onChange={(ev) => setStoreName(ev.target.value)}
                        />
                        <div className="inp-wrap-storedescr">
                            <label
                                className="inp-lbl-shadow"
                                htmlFor="storeDescr">
                                Краткое описание
                            </label>
                            <textarea
                                className="inp-base"
                                id="storeDescr"
                                value={storeDescr}
                                onChange={(ev) =>
                                    setStoreDescr(ev.target.value)
                                }
                                name="storeDescr"
                                minLength={0}
                                maxLength={40}
                                rows="5"
                            />
                        </div>
                        <div className="store-descr-length">
                            {`${storeDescr.length}/40`}
                        </div>
                        <InputShadow
                            type="text"
                            lblTxt="Полный адрес"
                            name="storeAdress"
                            id="storeAdress"
                            value={storeAdress}
                            onChange={(ev) => setStoreAdress(ev.target.value)}
                        />
                    </div>
                </div>
                <div className="personal-settings-bttm">
                    <InputShadow
					wrapClass="inp-wrap-additional-info"
                        lblTxt="Дополнительная информация"
                        id="additionalInfo"
                        value={additionalInfo}
                        onChange={(ev) => setAdditionalInfo(ev.target.value)}
                    />
                    <div className="personal-settings-bttm-center">
                        <InputShadow
                            wrapClass="center-inp-wrap"
                            id="storeWhatsapp"
                            lblTxt="whatsapp "
                            value={storeWhatsapp}
                            onChange={(ev) =>
                                setStoreWhatsapp(ev.target.value)
                            }
                        />
                        <InputShadow
                            wrapClass="center-inp-wrap"
                            id="storePhoneNumber"
                            lblTxt="Номер телефона"
                            value={storePhoneNumber}
                            onChange={(ev) =>
                                setStorePhoneNumber(ev.target.value)
                            }
                        />
                    </div>
                    <InputShadow
					wrapClass="inp-wrap-twogis-link"
                        id="storeTwogisLink"
                        lblTxt="Ссылка на 2gis"
                        value={storeTwogisLink}
                        onChange={(ev) => setStoreTwogisLink(ev.target.value)}
                    />
                    <ButtonRed txt="Сохранить" />
                </div>
            </form>
        </div>
    );
}

export default PersonalSettings;
