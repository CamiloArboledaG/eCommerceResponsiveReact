import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import accounting from 'accounting';
import DeleteIcon from '@material-ui/icons/Delete';
import {useStateValue} from "../StateProvider";
import { actionTypes } from '../reducer';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#1F1D2B",
  },
  action: {
      marginTop: "1rem",
      color: "#E0E6E9",
  },
  Color: {
    color: "#E0E6E9",
},
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  cardRating: {
    display: "flex",
  },
}));

export default function CheckoutCard({product : {id, name, productType, image, price, rating, description}}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue();


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () =>dispatch ({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.Color}
        action={
            <Typography
            className={classes.action}
            variant='h6'
            color='textSecondary'
            >
                {accounting.formatMoney(price, { symbol: "COP",  format: "%v %s" })}
            </Typography>
        }
        title={name}
        subheader={<Typography className={classes.Color}>En stock</Typography>}
      />
      <CardMedia 
        className={classes.media}
        image={image}
        title={name}
      />
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
        {Array(rating)
        .fill()
        .map((_, i) => (
            <p>&#11088;</p>
        ))}
        </div>
        <IconButton>
        <DeleteIcon  fontSize="large" className={classes.Color} onClick={removeItem}/>
        </IconButton>

      </CardActions >
    </Card>
  );
}
