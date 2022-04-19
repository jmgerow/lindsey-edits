import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import StyledCard from "../StyledCard/StyledCard";

export default function Services() {
    const serviceCards = [
        {
            title: "Developmental Editing",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim erat, laoreet non posuere in, vehicula at ipsum. Nam ornare placerat tristique. Ut interdum feugiat ante at suscipit. Proin consequat elementum sapien, cursus efficitur odio tempor at. Vestibulum mollis eleifend nisi vel faucibus. Vivamus tincidunt vulputate odio ac iaculis. Quisque eget efficitur diam, vulputate pharetra mi. In ex dolor, mollis a nisi placerat, fringilla finibus nunc. Donec accumsan nisi et mauris lacinia convallis. Nullam suscipit, elit ac aliquet lacinia, nunc mauris gravida massa, et laoreet ligula nisi at justo. Nulla sit amet porta lorem, sit amet consectetur ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean et mollis ipsum. Suspendisse consectetur interdum rutrum.Praesent vel mattis lorem, non ultrices ipsum. Donec facilisis nisl sapien. Duis ac faucibus mauris. Maecenas et porta arcu. Vivamus non mollis quam. In nibh mauris, cursus cursus risus et, fringilla varius orci. Morbi rhoncus ligula quis urna egestas ultricies. In non blandit massa. Sed volutpat egestas libero in dapibus. Mauris elementum libero est, nec scelerisque neque congue eu. Donec mollis quis lacus quis pretium."
        },
        {
            title: "Copy Editing",
            text: "Nullam porta aliquet euismod. Morbi faucibus non arcu ut finibus. Pellentesque ut velit maximus, suscipit massa sed, accumsan massa. Nulla at ante ultrices elit malesuada aliquet. Duis bibendum magna gravida, eleifend justo ut, molestie eros. Curabitur nec consectetur urna. Integer hendrerit metus massa, sit amet lobortis eros dapibus eget. Nulla purus nulla, rhoncus a nisi vel, mollis rhoncus massa. Aenean eleifend mollis ante, eu dictum orci finibus eu. Morbi quam nulla, posuere nec vestibulum et, rutrum eu augue. Maecenas non vehicula felis. Praesent vulputate libero in turpis egestas, quis sagittis risus sagittis. Aenean molestie suscipit tortor, et volutpat neque fermentum quis. Sed at urna lacus."
        },
        {
            title: "Writing",
            text: "In elit arcu, malesuada a lectus et, auctor ornare nibh. Duis libero est, posuere at ex id, venenatis consectetur nulla. Sed condimentum lorem vel commodo vulputate. Suspendisse dapibus malesuada molestie. Quisque eu tellus non orci consectetur faucibus. Nunc iaculis odio a magna venenatis, in aliquam lorem sollicitudin. Sed ac molestie nunc, eu blandit dui. Proin eget scelerisque purus. Phasellus a libero placerat, euismod est vel, blandit nisl. Praesent auctor finibus eros, quis pulvinar magna pulvinar id. Cras turpis justo, fringilla eget porttitor at, posuere quis libero. Curabitur ut sapien convallis, aliquet nisi eu, ullamcorper diam. In hac habitasse platea dictumst. Nullam convallis pharetra nibh, eu mattis neque pretium a. In eu fringilla magna. In sed ultrices mauris."
        }
    ]

    return (
        <Box className="App-page-body">
            <Typography variant="h1" color="primary.light">
                Services
            </Typography>
            <Grid container sx={{ marginTop: "30px" }} spacing={3}>
                {serviceCards.map((card, i) => (
                    <Grid key={`service-card-${i}`} item xs={12}>
                        <StyledCard title={card.title} text={card.text} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}