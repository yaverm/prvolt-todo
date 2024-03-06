import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';
import { Box, Typography } from '@mui/material';

const NoData: React.FC = () => {
   return (
      <Box display='flex' flexDirection='column' alignContent='center' bgcolor='#f8f8f8' padding={1}>
         <Typography variant='h6' textAlign='center'>
            {`No available Data`}
         </Typography>
         <ContentPasteOffIcon sx={{ margin: '0 auto' }} />
      </Box>
   );
};

export default NoData;
