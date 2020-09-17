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

const Extra = (props) => (
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

    <FormLayout style={{ paddingBottom: 60 }}>
      <Select defaultValue="default" top="Автор">
        <option value="default">Матвей Правосудов</option>
        <option>Батон Батонович</option>
      </Select>
      <Group top="Сбор завершится">
        <Radio name="radio" value="asap">
          Когда соберём сумму
        </Radio>
        <Radio name="radio" value="date" defaultChecked>
          В определенную дату
        </Radio>
      </Group>
      <Select top="Дата окончания" placeholder="Выберите дату">
        <option>20 сентября</option>
        <option>Без указания даты окончания</option>
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

Extra.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Extra;
