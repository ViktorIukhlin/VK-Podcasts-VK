import React from "react";
import PropTypes from "prop-types";
import {
  platform,
  IOS,
  FormLayout,
  Select,
  Textarea,
  Button,
  Div,
  FixedLayout,
} from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";

import UploadPreview from "../components/UploadPreview/UploadPreview";

const osName = platform();

const Regular = (props) => (
  <Panel id={props.id}>
    <PanelHeader
      left={
        <PanelHeaderButton onClick={props.go} data-to="type">
          {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </PanelHeaderButton>
      }
    >
      Регулярный сбор
    </PanelHeader>
    <FormLayout style={{ paddingBottom: 60 }}>
      <UploadPreview />
      <Input type="text" placeholder="Название сбора" top="Название сбора" />
      <Input type="text" top="Сумма, ₽" placeholder="Сколько нужно собрать?" />
      <Input type="text" top="Цель" placeholder="Например, лечение человека" />
      <Textarea
        top="Описание"
        placeholder="На что пойдут деньги и как они кому-то помогут?"
      />
      <Select defaultValue="default" top="Куда получать деньги">
        <option value="default">Счёт VK Pay · 1234</option>
        <option>Счёт VKMay Pay · 7777</option>
      </Select>
      <Select defaultValue="default" top="Автор">
        <option value="default">Матвей Правосудов</option>
        <option>Батон Батонович</option>
      </Select>
    </FormLayout>
    <FixedLayout vertical="bottom">
      <Div>
        <Button size="xl" onClick={props.goForward} data-to="snippet" stretched>
          Создать сбор
        </Button>
      </Div>
    </FixedLayout>
  </Panel>
);

Regular.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Regular;
