import { AlertColor } from "@mui/material";

export interface IAlert{
  open: boolean,
  type: AlertColor ,
  title: string, 
  onClose?: () => void
}