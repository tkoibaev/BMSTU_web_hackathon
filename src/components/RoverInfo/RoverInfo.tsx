import * as React from "react";

import { observer } from "mobx-react-lite";

import cn from "classnames";
import styles from "./RoverInfo.module.scss";
import Button from "components/Button";
import ProfileLogoIcon from "components/icons/ProfileLogoIcon";
import { Link } from "react-router-dom";
import rootStore from "store/RootStore";

const ProfileWindow: React.FC = () => {
  return (
    <div className={styles.info}>
      <div className={styles.info__wrapper}>
        <div className={styles.info__content}>
          <h3>Название: {rootStore.satellite.rover.name}</h3>
          <h3>
            Координаты: x: {rootStore.satellite.rover.x} y:{" "}
            {rootStore.satellite.rover.y}
          </h3>
          <h3>Угол поворота: {rootStore.satellite.rover.angle} градусов</h3>
          <h3>Заряд: {rootStore.satellite.rover.charge}%</h3>
        </div>

        <div className={styles.info__actions}>
          <Button className={styles.info__actions_button}>
            Включить освещение
          </Button>
          <Button className={styles.info__actions_button}>
            Включить освещение
          </Button>
          <Button className={styles.info__actions_button}>
            Включить освещение
          </Button>
        </div>

        <div className={styles.info__manage}>
          <Button onClick={() => rootStore.satellite.setMove({uuid: rootStore.satellite.rover.uuid, move: 'up'})}>W</Button>
          <Button onClick={() => rootStore.satellite.setMove({uuid: rootStore.satellite.rover.uuid, move: 'down'})}>S</Button>
          <Button onClick={() => rootStore.satellite.setMove({uuid: rootStore.satellite.rover.uuid, move: 'left'})}>A</Button>
          <Button onClick={() => rootStore.satellite.setMove({uuid: rootStore.satellite.rover.uuid, move: 'right'})}>D</Button>
        </div>
      </div>
    </div>
  );
};

export default observer(ProfileWindow);