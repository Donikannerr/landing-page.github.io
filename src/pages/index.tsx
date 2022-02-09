import { Stack } from "@mui/material";
import { NextPage } from "next/types";
import StyledAppBar from "../components/styledAppBar";
import StyledCard from "../components/styledCard";
import Card from "@mui/material/Card";

const Home: NextPage = () => {
  return (
    <Stack direction="column" spacing={2}>
      <StyledAppBar />
      <Stack direction="row" spacing={20} alignSelf="center">
        <StyledCard
          alt="Github-Repo"
          cardContentSecond="Bitte QR-Code scannen, um zu meinem Github-Repo zu gelangen. Andernfalls die Karte anklicken"
          imageAdress="https://i.ibb.co/8mHzBnJ/Github.jpg"
          cardContentFirst="Github-Repo"
          link="https://github.com/Donikannerr"
        />
        <StyledCard
          alt="RBZ-Forum"
          cardContentSecond="Bitte QR-Code scannen, um zum RBZ-Forum zu gelangen. Andernfalls die Karte anklicken"
          imageAdress="https://i.ibb.co/F0TBQL2/RBZ.jpg"
          cardContentFirst="RBZ-Forum"
          link="https://rbz-community.com/forum/forum/index.php?thread/983-koding-1o1/&postID=17281#post17283"
        />
        <StyledCard
          alt="Github-Repo"
          cardContentSecond="Bitte QR-Code scannen, um zur Charakterbeschreibung zu gelangen. Andernfalls die Karte anklicken"
          imageAdress="https://i.ibb.co/rxgJ1wV/SecreSwa.jpg"
          cardContentFirst="Beschreibung"
          link="https://blackclover.fandom.com/wiki/Secre_Swallowtail"
        />
        <StyledCard
          alt="RBZ-Newsletter"
          cardContentSecond="Bitte QR-Code scannen, um zum Anmeldeformular zu gelangen. Andernfalls die Karte anklicken"
          imageAdress="https://i.ibb.co/njR933J/newsletter.jpg"
          cardContentFirst="Formular"
          link="https://mailchi.mp/a9bfc20f8179/rbz-newsletter"
        />
      </Stack>
    </Stack>
  );
};

export default Home;
