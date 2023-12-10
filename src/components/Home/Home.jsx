import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../Navbar";
import "./Home.css";
import SelectTokenModal from "./SelectTokenModal/SelectToken";

const Home = () => {
  const [tabValue, setTabValue] = useState(0);
  const [Token, setToken] = useState(false);
  const [selectToggle2, setSelectToggle2] = useState(false);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangeButton2 = () => {
    setSelectToggle2(true);
  };

  const handleCloseTokenModal = () => {
    setSelectToggle2(false);
  };

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Card
          sx={{ width: 632, borderRadius: 5, background: "#111621" }}
          variant="outlined"
        >
          <CardContent>
            <Box sx={{ borderBottom: 1, borderColor: "#fff" }}>
              <Tabs value={tabValue} onChange={handleChange}>
                <Tab
                  label="Swap"
                  style={{ color: "#ffff", fontSize: "18px" }}
                />
              </Tabs>
            </Box>
            <Card
              className="home-sub-card1"
              sx={{ width: 600, background: "#191F2D", borderRadius: 4, mt: 2 }}
            >
              <CardContent sx={{ color: "#ffff" }}>
                You pay
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pl: 1,
                    pb: 1,
                    pt: 2,
                  }}
                >
                  <Typography sx={{ fontSize: 28, color: "#fff" }}>
                    0
                  </Typography>
                  <Button
                    sx={{
                      color: "#FFB900",
                      width: "120px",
                      border: "1px solid #FFB900",
                      borderRadius: 10,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faEthereum}
                      style={{ color: "#868DAC", marginRight: 8 }}
                      fontSize="medium"
                    />
                    ETH
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    pr: 2,
                    pt: 1,
                  }}
                >
                  <Typography sx={{ fontSize: 16, color: "#fff" }}>
                    Balance:
                  </Typography>
                  <Typography sx={{ fontSize: 16, pl: 1 }}>0</Typography>
                  <Typography sx={{ fontSize: 16, color: "#FFB900", pl: 1 }}>
                    Max
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card
              className="home-sub-card1"
              sx={{ width: 600, background: "#191F2D", borderRadius: 4, mt: 2 }}
            >
              <CardContent sx={{ color: "#ffff" }}>
                You receive
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pl: 1,
                    pb: 1,
                    pt: 2,
                  }}
                >
                  <Typography sx={{ fontSize: 28, color: "#fff" }}>
                    0
                  </Typography>
                  <Button
                    sx={{
                      color: "#FFB900",
                      width: Token ? "120px" : "170px",
                      border: "1px solid #FFB900",
                      borderRadius: 10,
                    }}
                    onClick={handleChangeButton2}
                  >
                    {Token ? "WETH" : "Select Token"}
                    {!Token && (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{ color: "#FFB900", marginLeft: 5 }}
                        fontSize="medium"
                      />
                    )}
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    pr: 2,
                    pt: 1,
                  }}
                >
                  <Typography sx={{ fontSize: 16, color: "#fff" }}>
                    Balance:
                  </Typography>
                  <Typography sx={{ fontSize: 16, pl: 1 }}>0</Typography>
                  <Typography sx={{ fontSize: 16, color: "#FFB900", pl: 1 }}>
                    Max
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
      <SelectTokenModal open={selectToggle2} onClose={handleCloseTokenModal} />
    </div>
  );
};

export default Home;
