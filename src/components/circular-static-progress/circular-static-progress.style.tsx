import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#6577A0',
      fontWeight: 700
    },
    title: {
      fontWeight: 700,
    },
    secondTitle: {
      fontWeight: 700,
      fontSize: '1rem'
    },
    span: {
      fontWeight: 700,
      cursor: 'pointer'
    },
    primaryNode: {
      color: '#6577A0'
    },
    secondaryNode: {
      color: '#9AB2E7'
    },
    link: {
      textDecoration: 'none'
    }
  }),
);

export default useStyles;