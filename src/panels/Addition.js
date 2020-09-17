import React, {useState} from "react";
import PropTypes from "prop-types";
import { platform, IOS, Banner, FixedLayout, Button, FormLayout, Div, PanelHeader, Panel, PanelHeaderButton, File, Input, Textarea, Card, Placeholder } from "@vkontakte/vkui";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import Icon32PictureOutline from '@vkontakte/icons/dist/32/picture_outline';
import Icon24DismissOverlay from '@vkontakte/icons/dist/24/dismiss_overlay';
import './Addition.css';
const osName = platform();

const Addition = (props) => {
  const [cover, setCover] = useState(null);
  const [podcastName, setPodcastName] = useState("");
  const [description, setDescription] = useState("");

  return(
  <Panel id={props.id}>
    <PanelHeader
      left={
        <PanelHeaderButton onClick={props.go} data-to="home">
          {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </PanelHeaderButton>
      }
    >
      Новый подкаст
    </PanelHeader>
		<div className="main-title">
      {cover == null ?
        <File 
          className="hed" 
          before=
              {<Icon32PictureOutline 
                  className="Icon-56"
              />} 
          controlSize="xl" 
          mode="outline"
          onChange={e => {
              const file = e.target.files[0]
              if(file.type.substring(0,5)==="image"){ //Type check
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onloadend = () => {
                      setCover(reader.result)
                  };
              }
              }}
          >
          {""}
        </File>:
        <div>
          <img className="main-img" src={cover} alt="Cover"/>
          <Icon24DismissOverlay className="icon-24" onClick={() => setCover(null)}/>
        </div>
      }
      <div className="main-text">
        <FormLayout>
        <Input 
            top="Название" 
            onChange = {e => setPodcastName(e.target.value)}
            value = {podcastName}
            placeholder="Введите название подкаста" />
        </FormLayout>
      </div>
      </div>
      <div className="decsription-main">
          <FormLayout>
              <Textarea 
              grow={false}
              top="Описание подкаста" 
              onChange = {e => setDescription(e.target.value)}
              value = {description}
              />
          </FormLayout>
      </div>
    




      






     
    
    <FixedLayout vertical="bottom">
      <Div>
        <Button size="xl" stretched onClick={props.go} data-to="extra">
          Далее
        </Button>
      </Div>
    </FixedLayout>
  </Panel>
)};

Addition.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Addition;
