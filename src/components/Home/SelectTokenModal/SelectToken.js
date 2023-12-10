import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  ListItemButton,
  ListItemAvatar,
  DialogContent,
  Avatar,
  ListItemText,
  ListItem,
  IconButton,
  List,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { styled } from "@mui/material/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    display: "flex",

    flexDirection: "column", // Set flex direction to column
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const SelectTokenModal = (props) => {
  const { open, onClose } = props;

  return (
    <BootstrapDialog onClose={onClose} open={open}>
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          fontSize: 22,
          fontStyle: "bold",
          width: 450,
          color: "#000",
        }}
        id="Modal-title"
      >
        Select a token
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <FontAwesomeIcon
          icon={faTimes}
          style={{
            color: "#333",
            paddingTop: 8,
            marginLeft: 5,
            fontSize: "large",
          }}
        />
      </IconButton>

      <DialogContent
        sx={{ flexGrow: 1, display: "flex", alignItems: "flex-start" }}
      >
        <List sx={{ pt: 0 }}>
          <ListItem disableGutters>
            <ListItemButton autoFocus>
              <ListItemText primary="Add account" />
            </ListItemButton>
          </ListItem>
        </List>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default SelectTokenModal;
