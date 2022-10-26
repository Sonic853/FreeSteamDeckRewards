import {
  ButtonItem,
  definePlugin,
  PanelSection,
  PanelSectionRow,
  Router,
  ServerAPI,
  staticClasses,
} from "decky-frontend-lib";
import { VFC } from "react";
import { FaBrush } from "react-icons/fa";

const Content: VFC<{ serverAPI: ServerAPI }> = ({ }) => {

  return (
    <PanelSection title="解锁独家 Steam 主题">
      <PanelSectionRow>
        点击下面的按钮进入解锁独家 Steam 社区个人资料捆绑包和独家虚拟键盘主题！
      </PanelSectionRow>
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.NavigateToExternalWeb("http://page.853lab.com/SteamDeckReadRewards/");
          }}
        >
          打开
        </ButtonItem>
      </PanelSectionRow>
    </PanelSection>
  );
};

export default definePlugin((serverApi: ServerAPI) => {
  return {
    title: <div className={staticClasses.Title}>主题解锁器</div>,
    content: <Content serverAPI={serverApi} />,
    icon: <FaBrush />,
    onDismount() {
    },
  };
});
