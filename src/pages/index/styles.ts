import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';


export const rotate360 = {
  animation: 'rotate 1s linear infinite',
}

export const customStyles = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  height:'6rem',
  padding:0,

};
export const CustomButton1 = styled(Button)({
  color: 'var(--color-srccess)',
})


export const CustomButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'var(--color-srccess)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  '&:hover':{
    color:'var(--bg-color)',
    background: 'linear-gradient(45deg,rgb(124, 246, 99) 30%,rgb(21, 226, 155) 90%)',
    fontSize:'1rem'
  },
  '&:active':{
    color:'red'
  },
  '&:focus': {

  }
}));