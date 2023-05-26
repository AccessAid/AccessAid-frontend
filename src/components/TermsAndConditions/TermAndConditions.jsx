import React from 'react';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { SIGNUP } from '../../config/routes';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from '@material-tailwind/react';

const TermAndConditions = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = () => setOpen(!open);
  
  return (
    <div>
      
    </div>
  )
}

export default TermAndConditions
