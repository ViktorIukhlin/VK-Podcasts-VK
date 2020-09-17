import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Type from "./panels/Type";
import Target from "./panels/Target";
import Regular from "./panels/Regular";
import Extra from "./panels/Extra";
import Snippet from "./panels/Snippet";

const App = () => {
	const [history, setHistory] = useState(["home"]);
  const [activePanel, setActivePanel] = useState("home");

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
  }, []);

  const goForward = (e) => {
		const newActivePanel = e.currentTarget.dataset.to;
		const newHistory = [...history];
		newHistory.push(newActivePanel);
		if (newActivePanel === "home") {
			bridge.send("VKWebAppEnableSwipeBack");
		}
		window.history.pushState({ panel: newActivePanel }, newActivePanel);
		setHistory(newHistory);
		setActivePanel(newActivePanel);
  };

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <View activePanel={activePanel}>
      <Home id="home" go={go} />
      <Type id="type" go={go} />
      <Target id="target" go={go} />
      <Regular id="regular" go={go} goForward={goForward}/>
      <Extra id="extra" go={go} goForward={goForward}/>
      <Snippet id="snippet" go={go}/>
    </View>
  );
};

export default App;
