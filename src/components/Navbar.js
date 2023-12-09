import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Web3 from "web3";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1B1246",
    padding: "0 20px",
    margin: 0,
    width: "100%",
  },
  title: {
    textDecoration: "none",
    color: "#FFFFFF",
    padding: "4px",
    "&:hover": {
      borderRadius: "50px",
      backgroundColor: "#5b5967", // Change text color on hover
    },
  },
  connectButton: {
    marginLeft: "5px",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#4e4b61", // Change background color on hover
    },
  },
  accountInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  address: {
    marginRight: "10px",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [accountBalance, setAccountBalance] = useState(null);

  const handleConnectWallet = async () => {
    try {
      // Request account access
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Use Web3.js with the injected provider
      const web3 = new Web3(window.ethereum);

      // Get the connected account
      const accounts = await web3.eth.getAccounts();
      const connectedAddress = accounts[0];
      setConnectedAccount(connectedAddress);

      // Get the account balance
      const balance = await web3.eth.getBalance(connectedAddress);
      setAccountBalance(web3.utils.fromWei(balance, "ether"));
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Container maxWidth="xl" className={classes.container}>
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              className={classes.title}
            >
              OpenSwap
            </Typography>
            <Button
              color="inherit"
              className={classes.connectButton}
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </Button>
            {connectedAccount && (
              <div className={classes.accountInfo}>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.address}
                >
                  Address: {connectedAccount}
                </Typography>
                <Typography variant="body1" color="inherit">
                  Balance: {accountBalance} ETH
                </Typography>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
