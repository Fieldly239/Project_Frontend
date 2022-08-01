import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as homeActions from "../../redux/actions/home.action";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import { DataGrid } from "@mui/x-data-grid";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import PersonIcon from "@mui/icons-material/Person";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import AddInfo from "./components/AddInfo";
import { color, minHeight } from "@mui/system";

const data = [
  { label: "How to", year: 1994 },
  { label: "VPN", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

export default function AddKnowledge() {
  const [pageSize, setPageSize] = React.useState(5);
  const [colorFocus, setColorFocus] = React.useState(false);
  let navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeActions.loadHome());
  }, [dispatch]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (




    <Box sx={{ width: "100%" }}>
      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} textAlign="start" justifyContent="center" mb={1}>
        <Grid item xs={12} md={12}>
          <Card sx={{ minWidth: "275px", height: "50px", backgroundColor: "#0E769C" }}>
            <CardContent>
              <Grid  item xs={12} md={12} sx={{mt:-1}}>
                <Typography variant="h6" color="#fff" ><b>ADD NEW KNOWLEDGE</b></Typography>
                {/* <AddInfo /> */}
                </Grid>
            </CardContent>


            {/* <CardContent>
              <Box mb={2}>
                <Typography variant="h5" sx={{ ml: 2 }}>
                  ADD New Knowladge
                </Typography>
                <Divider sx={{ my: 4, mx: 30 }} color="#024BB5" />
              </Box>
              <Grid container spacing={5}>
                <Grid item xs={0} md={2}></Grid>
                <Grid item xs={3} md={2}>
                  <Typography variant="h6" >
                    Topic*
                  </Typography>
                </Grid>
                <Grid item xs={7} md={6}>
                  <TextField
                    sx={{
                      // p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 10,
                      borderColor: "#8A8887",
                      boxShadow: 0,
                    }}
                    // sx={{ m: 1 }}
                    margin="dense"
                    size="small"
                    id="outlined-basic"
                    // label="ค้นหา Knowladge"
                    placeholder="กรุณาใส่ Topic"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    color="textfield"
                  />
                </Grid>
                <Grid item xs={0} md={2}></Grid>
              </Grid>

              <Grid container spacing={5}>
                <Grid item xs={0} md={2}></Grid>
                <Grid item xs={4} md={2}>
                  <Typography variant="h6" >
                    Catagory*
                  </Typography>
                </Grid>
                <Grid item xs={6  } md={6}>
                  <Autocomplete
                    id="combo-box-demo"
                    size="small"
                    options={data}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        margin="dense"
                        // label="Category"
                        placeholder="เลือก Category"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={0} md={2}></Grid>
              </Grid>

              <Grid container spacing={5}>
                <Grid item xs={0} md={2}></Grid>
                <Grid item xs={4} md={2}>
                  <Typography variant="h6" >
                    Application
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Autocomplete
                    id="combo-box-demo"
                    size="small"
                    options={data}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        margin="dense"
                        // label="Category"
                        placeholder="เลือก Application"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={0} md={2}></Grid>
              </Grid>

              <Grid container spacing={5}>
                <Grid item xs={0} md={2}></Grid>
                <Grid item xs={4} md={2}>
                  <Typography variant="h6" >
                    Descriptions*
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 10,
                      borderColor: "#8A8887",
                      boxShadow: 0,
                    }}
                    multiline
                    rows={4}
                    margin="dense"
                    size="small"
                    id="outlined-basic"
                    placeholder="กรุณาใส่ Topic"
                    variant="outlined"
                    fullWidth
                    color="textfield"
                  />
                </Grid>
                <Grid item xs={0} md={2}></Grid>
              </Grid>

              <Grid container spacing={5}>
                <Grid item xs={0} md={2}></Grid>
                <Grid item xs={5} md={2}>
                  <Typography variant="h6">
                    Attach File
                  </Typography>
                </Grid>
                <Grid item xs={5} md={6}>
                  <TextField
                    sx={{
                      // p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 10,
                      borderColor: "#8A8887",
                      boxShadow: 0,
                    }}
                    multiline
                    rows={4}
                    // sx={{ m: 1 }}
                    margin="dense"
                    size="small"
                    id="outlined-basic"
                    // label="ค้นหา Knowladge"
                    // placeholder="กรุณาใส่ Topic"
                    variant="outlined"
                    fullWidth
                    color="textfield"
                  />
                </Grid>
                <Grid item xs={0} md={2}></Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mt: 2, mb: 3 }}>
                <Grid item xs={6} md={7}></Grid>
                <Grid item xs={6} md={5} sx={{ mt: 1 }}>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Button
                      size="medium"
                      variant="contained"
                      sx={{ mr: 2, pl: 4, pr: 4, background: "#8bc34a" }}
                      // startIcon={<AddIcon sx={{ color: "#fff" }} />}
                      // startIcon={<CheckIcon sx={{ color: "#fff" }} />}
                      
                      onClick={() => {
                        navigate(-1)
                      }}
                    >
                      <Typography color="#fff">บันทึก</Typography>
                    </Button>
                    <Button
                      size="medium"
                      variant="contained"
                      color="btRed"
                      sx={{ mr: 2, pl: 4, pr: 4 }}
                      // startIcon={<AddIcon sx={{ color: "#fff" }} />}
                      // startIcon={<ClearIcon sx={{ color: "#fff" }} />}

                      onClick={() => {
                        navigate("/addknowledge", { replace: true });
                      }}
                    >
                      <Typography color="#fff">ยกเลิก</Typography>
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>  */}
          </Card>
        </Grid>
      </Grid>


      <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" >
        <Grid item xs={12} md={12} >
          <Card sx={{ minWidth: "275px" }}>
            <CardContent>
              <AddInfo />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
