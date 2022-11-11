import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import photo from './Food.jpg';
import { image } from 'ionicons/icons';
import { Button } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

  

const localContent = [
  {
    id: '1',
    image: require('../../components/assets/image.jpeg'),
    date: new Date(),
    desc: 'as;llluhiuhsduifhsdfhkusdd',
    name: 'Shawn',
  },
  {
    id: '2',
    image: require('../../components/assets/image.jpeg'),
    date: new Date(),
    desc: 'sjsdjkgjsodfjas;llluhiuhsduifhsdfhkusdd',
    name: 'Emma',
  },

  {
    id: '3',
    image: require('../../components/assets/image.jpeg'),
    date: new Date(),
    desc: 'sjsdjkgjsodfjas;llluhiuhsduifhsdfhkusdd',
    name: 'john',
  },
  {
    id: '4',
    image: require('../../components/assets/bg-4.jpg'),
    date: new Date(),
    desc: 'sjsdjkgjsodfjas;llluhiuhsduifhsdfhkusdd',
    name: 'DOn',
    a: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and',
    b: " Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet",
    c: "Add rice and stir very gently to distribute. Top with artichokes and"
  }

]

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [product, setProduct] = React.useState(localContent)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleRemove = (id) => {
    const arr = product.filter((item) => item.id !== id)
    setProduct(arr)
    console.log(arr)
  }

  return (

    <>
    {
      product.map((item, index) => {
          return (
            <Card key={index} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        // source={{uri: {item.image}}}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <BookmarkIcon />
        </IconButton>
        <button onClick={() => handleRemove(item.id)}>Delete</button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {item.a}
          </Typography>
          <Typography paragraph>
           {item.b}
          </Typography>
          <Typography paragraph>
            {item.c}
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
          )
      })
    }
    </>
    
  );
}