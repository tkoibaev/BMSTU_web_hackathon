import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "components/Header";
import ProfileWindow from "components/ProfileWindow";
import ModalWindow from "components/ModalWindow";
// import Button from "components/Button";
// import AuthForm from "components/AuthForm";
// import LockingScreen from "components/LockingScreen";
import styles from "./MainPage.module.scss";
import cn from "classnames";

import video from "assets/main.mp4";
import Button from "components/Button";
import Card from "components/Card";
import Input from "components/Input";
import CheckBox from "components/CheckBox";
import Loader from "components/Loader";
// import ModalWindow from "components/ModalWindow";
// import Slider from "components/Slider";
import ThemeSwitcher from "components/ThemeSwitcher";
import useLocalStorage from "use-local-storage";
import userSvg from "assets/icons/sun.png";
import rootStore from "store/RootStore";
import MultiDropdown from "components/DropDown";
import ThreeD from "components/ThreeD";
import HightMap from "components/HightMap";
import MapChart from "components/HightMap";

const MainPage = () => {
  const [sliderValues, setSliderValues] = useState([0, 10000]);

  const handleSliderChange = (values: number[]) => {
    setSliderValues(values);
  };

  return (
    <>
      <div
        className={cn(styles.main__page, {
          [styles.dark]: rootStore.theme.isDark,
        })}
      >
        <Header></Header>
        <div className={styles["main__page-wrapper"]}>
          <div className={styles["main__page-content"]}>
            <h1 className={styles["main__page-title"]}>
              Панель управления космическим устройством
              <br /> EUROPA AQUATIC EXPLORER{" "}
            </h1>
            <h2 className={styles["main__page-subtitle"]}>
              Чтобы управлять устройством нажмите на кнопку
            </h2>
            <Link to="/satellite">
              <Button className={styles["main__page-btn"]}>
                <svg
                  width="60px"
                  height="60px"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.3252 239.768C72.7365 236.126 100.343 205.529 126.88 200.224C156.411 194.323 376.233 189.119 381.321 224.704C383.558 240.339 379.926 258.269 366.242 267.385C337.21 286.721 179.562 292.892 143.215 286.841C115.975 282.305 66.1265 248.523 49.6044 241.649"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M131.756 208.131C137.859 229.736 135.668 253.809 132.884 275.583"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M77.5284 212.178C79.4278 205.369 77.21 200.176 75.834 194.641"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M71.6552 192.485C38.1358 181.349 49.2311 222.543 46.0234 233.763"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M76.5077 266.14C77.5006 272.708 74.4248 276.97 72.002 282.328"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.2585 286.073C43.7978 295.004 42.8809 265.583 45.9594 248.602"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.1278 229.715C23.2522 240.774 21.4175 251.617 19 262.092"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32.8702 244.555C31.7424 244.555 30.62 244.555 29.4922 244.555"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M180.927 190.593C189.155 184.065 194.066 173.979 199.813 164.961"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M206.559 163.168C226.335 160.842 246.229 161.652 265.916 158.662"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M274.011 159.565C281.366 166.599 284.424 176.227 290.199 183.848"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M342.706 217.574C397.241 217.853 305.32 275.075 333.466 222.013"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M303.324 216.225C369.09 234.366 252.185 269.03 298.81 217.506"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M268.322 217.574C307.418 245.142 228.195 263.525 257.909 219.484"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M253.775 151.471C255.607 143.619 250.051 118.216 263.219 111"
                    stroke="#fff"
                    stroke-opacity="0.9"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
