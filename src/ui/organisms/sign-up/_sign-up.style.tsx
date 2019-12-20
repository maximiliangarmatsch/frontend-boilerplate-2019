import { makeStyles } from "@material-ui/styles";

// Component Style
const style: any = {
	paper: {
		marginTop: 24,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	  },
	  avatar: {
		margin: 8,
		backgroundColor: '#CCC',
	  },
	  form: {
		width: '100%',
		marginTop: 24,
	  },
	  submit: {
		margin: '24px 0px 8px 0px',
	  }
};
export const styles = makeStyles(style); 