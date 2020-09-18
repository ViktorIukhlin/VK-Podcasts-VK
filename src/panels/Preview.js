import React from "react";
import PropTypes from "prop-types";
import {
  platform,
  IOS,
  FormLayout,
  Select,
  Group,
  Radio,
  Button,
  FixedLayout,
  Div,
} from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";

const osName = platform();

const Preview = (props) => (
  <Panel id={props.id}>
    <PanelHeader
      left={
        <PanelHeaderButton onClick={props.go} data-to="target">
          {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </PanelHeaderButton>
      }
    >
      Дополнительно
    </PanelHeader>



    <FixedLayout vertical="bottom">
      <Div>
        <Button size="xl" onClick={props.goForward} data-to="snippet" stretched>
          Создать сбор
        </Button>
      </Div>
    </FixedLayout>
  </Panel>
);

Preview.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Preview;
