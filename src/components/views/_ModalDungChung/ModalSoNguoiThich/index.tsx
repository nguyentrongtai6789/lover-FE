import { Modal } from "antd";
import React, { CSSProperties, useEffect, useState } from "react";
import { ButtonCustom } from "../../../customComponents/ButtonCustom";
import "./styles.scss";
import { INguoiThich } from "../../../../global/interface";
import { listNguoiThichLike } from "../../../../fakeData";
interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalSoNguoiThich: React.FC<IModalProps> = (props) => {
  const { isOpen, onClose } = props;

  const [listNguoiThich, setListNguoiThich] = useState<INguoiThich[]>([]);

  const [tabSelect, setTabSelect] = useState<number>(1);

  const styleTabSelect: CSSProperties = {
    backgroundColor: "antiquewhite",
  };

  useEffect(() => {
    if (tabSelect === 2) {
      setListNguoiThich(listNguoiThichLike);
    } else {
      setListNguoiThich([]);
    }
  }, [tabSelect]);

  return (
    <>
      <Modal
        title=""
        closeIcon={false}
        open={isOpen}
        centered
        footer={null}
        onCancel={onClose}
        maskClosable={false}
      >
        <div className="noi-dung-modal">
          <div className="header-modal">
            <span
              style={tabSelect === 1 ? styleTabSelect : {}}
              onClick={() => setTabSelect(1)}
            >
              Tất cả
            </span>
            <span
              style={tabSelect === 2 ? styleTabSelect : {}}
              onClick={() => setTabSelect(2)}
            >
              <img
                src="https://scontent.fhan5-1.fna.fbcdn.net/m1/v/t6/An-HX414PnqCVzyEq9OFFdayyrdj8c3jnyPbPcierija6hpzsUvw-1VPQ260B2M9EbxgmP7pYlNQSjYAXF782_vnvvpDLxvJQD74bwdWEJ0DhcErkDga6gazZZUYm_Q.png?ccb=10-5&oh=00_AYACBbFRLO6kauIZsuNIgPZ9ePUIPZbE8gLXJ7Tnp-mXxA&oe=669612A3&_nc_sid=7da55a"
                alt=""
              />
              <span> 50</span>
            </span>
            <span
              style={tabSelect === 3 ? styleTabSelect : {}}
              onClick={() => setTabSelect(3)}
            >
              <img
                src="https://scontent.fhan5-1.fna.fbcdn.net/m1/v/t6/An8VnwvdkGMXIQcr4C62IqyP-g1O5--yQu9PnL-k4yvIbj8yTSE32ea4ORp0OwFNGEWJbb86MHBaLY-SMvUKdUYJnNFcexEoUGoVzcVd50SaAIzBE-K5dxR8Y-MJn5E.png?ccb=10-5&oh=00_AYA9vaJYbT0H01ZDXMI2FHS3GIF8KKyM8nCzFVKa7YvQ1g&oe=6696164C&_nc_sid=7da55a"
                alt=""
              />
              <span> 40</span>
            </span>
            <span
              style={tabSelect === 4 ? styleTabSelect : {}}
              onClick={() => setTabSelect(4)}
            >
              <img
                src="https://scontent.fhan5-1.fna.fbcdn.net/m1/v/t6/An855a_dxeehKWf2PSOqZw5jG_X5jD0RtPu4XCOJEiUkOgEjN08FocslKz_Ex-1X4l2nyxwET8fM7vQtp4UWea1ndn808NC5OXHaPll4vMdgaoE8ttu-hOlUSetdVjU.png?ccb=10-5&oh=00_AYARZkZiQtuo6pkB5b2MslXdC16dk44GxoV4ZfOb1T13Cw&oe=669617A4&_nc_sid=7da55a"
                alt=""
              />
              <span> 30</span>
            </span>
            <span
              style={tabSelect === 5 ? styleTabSelect : {}}
              onClick={() => setTabSelect(5)}
            >
              <img
                src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.8'/%3E%3Cpath d='M12.5278 8.1957c.4057.1104.6772.4854.623.9024-.3379 2.6001-2.5167 4.9012-5.1542 4.9012s-4.8163-2.3011-5.1542-4.9012c-.0542-.417.2173-.792.623-.9024.8708-.237 2.5215-.596 4.5312-.596 2.0098 0 3.6605.359 4.5312.596Z' fill='%234B280E'/%3E%3Cpath d='M11.5809 12.3764c-.9328.9843-2.1948 1.6228-3.5841 1.6228-1.3892 0-2.6512-.6383-3.5839-1.6225a1.5425 1.5425 0 0 0-.016-.0174c.4475-1.0137 2.2-1.3599 3.5999-1.3599 1.4 0 3.1514.3468 3.5998 1.3599l-.0157.0171Z' fill='url(%23paint3_linear_15251_63610)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.3049 5.8793c.1614-1.1485-.6387-2.2103-1.7872-2.3717l-.0979-.0138c-1.1484-.1614-2.2103.6388-2.3717 1.7872l-.0163.1164a.5.5 0 0 0 .9902.1392l.0163-.1164c.0846-.6016.6408-1.0207 1.2424-.9362l.0978.0138c.6016.0845 1.0207.6407.9362 1.2423l-.0164.1164a.5.5 0 0 0 .9903.1392l.0163-.1164ZM2.6902 5.8793c-.1614-1.1485.6387-2.2103 1.7872-2.3717l.0979-.0138c1.1484-.1614 2.2103.6388 2.3717 1.7872l.0164.1164a.5.5 0 1 1-.9903.1392l-.0163-.1164c-.0846-.6016-.6408-1.0207-1.2423-.9362l-.098.0138c-.6015.0845-1.0206.6407-.936 1.2423l.0163.1164a.5.5 0 0 1-.9902.1392l-.0164-.1164Z' fill='%231C1C1D'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23FF5758' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FF5758' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5272 10.9202) scale(10.1818)'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23FFF287' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.396' y1='2.3999' x2='13.5954' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23F68628'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear_15251_63610' x1='5.1979' y1='10.7996' x2='5.245' y2='14.2452' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF60A4'/%3E%3Cstop offset='.2417' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23BC0A26'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.002 0h16v15.9992h-16z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                alt=""
              />
              <span> 30</span>
            </span>
          </div>
          <hr />
          <div className="body-modal">
            {listNguoiThich.map((item: INguoiThich) => (
              <div className="content-in-row">
                <div>
                  <img src={item.user.avatar} alt="" />
                  <span>{item.user.name}</span>
                </div>
                <span>Bày tỏ cảm xúc lúc: {item.thoiGianThich}</span>
              </div>
            ))}
          </div>
          <hr />
          <div className="footer-modal">
            <ButtonCustom title="Đóng" onClick={onClose} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalSoNguoiThich;
