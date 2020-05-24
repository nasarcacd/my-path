import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    title: {
      fontWeight: 700
    },
    span: {
      fontWeight: 700,
      cursor: 'pointer'
    },
    secondaryNode: {
      color: theme.palette.text.secondary
    }
  }),
);

export default useStyles;