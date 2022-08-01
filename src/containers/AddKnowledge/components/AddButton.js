import React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const AddButton = () => {
  return (
    
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ mt: 2 }}>
        <Button
          size="medium"
          variant="contained"
          sx={{ mr: 2, pl: 4, pr: 4, background: "#8bc34a" }} 
          >
            <Typography color="#fff">บันทึก</Typography>
            </Button>
            <Button
              size="medium"
              variant="contained"
              color="btRed"
              sx={{ mr: 2, pl: 4, pr: 4 }}
                >
            <Typography color="#fff">ยกเลิก</Typography>
        </Button>
      </Stack>
      </Box>
  )
}

export default AddButton
