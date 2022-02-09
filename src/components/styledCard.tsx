import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type Props = {
  imageAdress: string;
  alt: string;
  cardContentFirst: string;
  cardContentSecond: string;
  link: string;
};

export default function StyledCard(props: Props) {
  return (
    <Card sx={{ maxWidth: "auto", maxHeight: "auto" }}>
      <CardActionArea href={props.link}>
        <CardMedia
          component="img"
          width="100%"
          height="auto"
          image={props.imageAdress}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.cardContentFirst}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.cardContentSecond}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
