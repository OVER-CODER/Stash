"use client"
import {
  TextInput,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ActionIcon,
  Tooltip,
  rem,
  Card,
} from "@mantine/core";
import {
  IconSearch,
  IconPlus,
  IconSettings,
  IconHome,
  IconClockHour4,
  IconZoomQuestion,
  IconReport,
  IconRocket,
} from "@tabler/icons-react";
// import { UserButton } from '../UserButton/UserButton';
import classes from "./NavbarSearch.module.css";
import { dumpLayout , getLayouts } from "../utils/api";

import Link from "next/link";
import { Dark } from "./Dark";
import { useState ,useEffect} from "react";

const links = [
  { redirect: "/", icon: IconHome, label: "Home" },
  { redirect: "/configlayout", icon: IconSettings, label: "Config Layout" },
  { redirect: "/timebased", icon: IconReport, label: "Time-Interval based" },
  { redirect: "conditional", icon: IconZoomQuestion, label: "Conditional" },
  { redirect: "startup", icon: IconRocket, label: "Startup" },
];


var emojis = [
  '😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮'

];

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}
export function NavbarSearch() {
  const [active, setActive] = useState("Home");
  const [sessions, setSessions] = useState([]);
    
  async function dump() {
    setLoading(true);
    const res = await dumpLayout(config);
    console.log(res);
    setLoading(false);
    close();
    getSessions();
  }
  
  async function getSessions() {
    const res = await getLayouts();
    setSessions(res);
  }
  
  useEffect(() => {
   
    getSessions();
  }, []);


  const mainLinks = links.map((link) => (
    <Link
      href={link.redirect}
      key={link.label}
      className={classes.link}
      data-active={link.label === active || undefined}
      onClick={() => setActive(link.label)}
    >
      <link.icon className={classes.linkIcon} stroke={1.5} />
      <span>{link.label}</span>
    </Link>
  ));

  const collectionLinks = sessions.map((collection) => (
    <a
      href="#"
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
        {getRandomEmoji()}
      </span>{" "}
      {collection}
    </a>
  ));

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.section}>{/* <UserButton /> */}</div>

        <TextInput
          placeholder="Search"
          size="xs"
          leftSection={
            <IconSearch
              style={{ width: rem(12), height: rem(12) }}
              stroke={1.5}
            />
          }
          rightSectionWidth={70}
          rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
          styles={{ section: { pointerEvents: "none" } }}
          mb="sm"
        />

        <div className={classes.section}>
          <div className={classes.mainLinks}>{mainLinks}</div>
        </div>

        <div className={classes.section}>
          <Group className={classes.collectionsHeader} justify="space-between">
            <Text size="xs" fw={500} c="dimmed">
              Collections
            </Text>
            <Tooltip label="Create collection" withArrow position="right">
              <ActionIcon variant="default" size={18}>
                <IconPlus
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
          </Group>
          <div className={classes.collections}>{collectionLinks}</div>
        </div>

        <div className={classes.themer}>
          <Group>
            <Card withBorder flex={1} bg={"transparent"} py={7} p={5}>
              <Text fw={600} fz={18} c={"indigo"} ml={10}>
                Stash.
              </Text>
            </Card>
            <Dark />
          </Group>
        </div>
      </nav>
    </>
  );
}
