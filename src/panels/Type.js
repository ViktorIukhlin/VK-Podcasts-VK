import React from "react";
import PropTypes from "prop-types";
import { platform, IOS, Banner } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import Icon28TargetOutline from "@vkontakte/icons/dist/28/target_outline";
import Icon28CalendarOutline from "@vkontakte/icons/dist/28/calendar_outline";

const osName = platform();

const Type = (props) => (
  <Panel id={props.id}>
    <PanelHeader
      left={
        <PanelHeaderButton onClick={props.go} data-to="home">
          {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </PanelHeaderButton>
      }
    >
      Тип сбора
    </PanelHeader>
    <Group
      style={{
        height: "calc(100vh - 57px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Group style={{ width: "100%" }}>
        <Banner
          header="Целевой сбор"
          asideMode="expand"
          before={<Icon28TargetOutline fill="var(--accent)" />}
          subheader="Когда есть определённая цель"
          onClick={props.go}
          data-to="target"
        />
        <Banner
          header="Регулярный сбор"
          asideMode="expand"
          before={<Icon28CalendarOutline fill="var(--accent)" />}
          subheader="Если помощь нужна ежемесячно"
          onClick={props.go}
          data-to="regular"
        />
      </Group>
    </Group>
  </Panel>
);

Type.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Type;
