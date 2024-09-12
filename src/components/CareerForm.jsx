import * as React from 'react';
import { useState } from 'react';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { color, styled } from '@mui/system';
import { Button } from '@mui/material';
import clsx from 'clsx';
import axios from "axios";

const CenteredFormContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '60px 20px',
  gridTemplateColumns: '1fr',
  marginLeft: "20px",
  color: "red",
  [theme.breakpoints.up('sm')]: {
    marginLeft: "180px",
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: "300px",
  },
  [theme.breakpoints.up('lg')]: {
    marginLeft: "500px",
  },
}));

const pdf = "application/pdf";
const word = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

export default function BasicFormControl() {
  const [step, setStep] = useState(0);
  const [file, setFile] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || (file.type !== pdf && file.type !== word)) {
      alert("Please select a valid PDF or Word file.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isValidPhone(phone)) {
      alert("Please enter a valid 11-digit phone number.");
      return;
    }

    if (!isValidDescription(description)) {
      alert("Please enter a description between 10 and 200 characters.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('description', description);

    try {
      const response = await axios.post('http://localhost:8000/api/mymodel/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        alert("File Submitted Successfully");
      }
      console.log(response.status);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNext = () => {
    if (step === 0 && !isValidFirstName(firstName)) {
      alert("Please enter a valid first name.");
      return;
    }
    if (step === 1 && !isValidLastName(lastName)) {
      alert("Please enter a valid last name.");
      return;
    }
    if (step === 2 && !isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (step === 3 && !isValidPhone(phone)) {
      alert("Please enter a valid 11-digit phone number.");
      return;
    }
    if (step === 4 && !isValidDescription(description)) {
      alert("Please enter a description between 10 and 200 characters.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => setStep((prev) => prev - 1);

  const steps = [
    <FormControl required key="firstName" sx={{ gridColumn: 'span 1' }}>
      <Label sx={{ color: "white", fontWeight: "bold" }}>First Name</Label>
      <StyledInput
        placeholder="Enter your first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <HelperText />
    </FormControl>,
    <FormControl required key="lastName" sx={{ gridColumn: 'span 1' }}>
      <Label sx={{ color: "white", fontWeight: "bold" }}>Last Name</Label>
      <StyledInput
        placeholder="Enter your last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <HelperText />
    </FormControl>,
    <FormControl required key="email" sx={{ gridColumn: 'span 1' }}>
      <Label sx={{ color: "white", fontWeight: "bold" }}>Email Address</Label>
      <StyledInput
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <HelperText />
    </FormControl>,
    <FormControl required key="phone" sx={{ gridColumn: 'span 1' }}>
      <Label sx={{ color: "white", fontWeight: "bold" }}>Phone Number</Label>
      <StyledInput
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <HelperText />
    </FormControl>,
    <FormControl required key="description" sx={{ gridColumn: 'span 1' }}>
      <Label sx={{ color: "white", fontWeight: "bold" }}>Description</Label>
      <StyledInput
        placeholder="Describe Yourself..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <HelperText />
    </FormControl>,
    <FormControl required key="file" sx={{ gridColumn: 'span 1' }}>
      <Label sx={{ color: "white", fontWeight: "bold" }}>Upload File</Label>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ color: "white" }}
        accept=".pdf, .docx"
        required
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{
          justifySelf: 'center',
          backgroundColor: '#d0140f',
          '&:hover': {
            backgroundColor: '#a60f0d',
          },
        }}
      >
        Submit
      </Button>
    </FormControl>,
  ];

  return (
    <CenteredFormContainer>
      {steps[step]}
      <div>
        {step > 0 && (
          <Button
            onClick={handlePrev}
            sx={{
              color: white[100],
              marginRight: '10px',
              backgroundColor: '#d0140f',
              '&:hover': { backgroundColor: '#a60f0d' },
            }}
          >
            Previous
          </Button>
        )}
        {step < steps.length - 1 && (
          <Button
            onClick={handleNext}
            sx={{
              color: white[100],
              backgroundColor: '#d0140f',
              '&:hover': { backgroundColor: '#a60f0d' },
            }}
          >
            Next
          </Button>
        )}
        <p style={{ color: "white" }}>Steps Left: {steps.length - step - 1}/5</p>
      </div>
    </CenteredFormContainer>
  );
}

const isValidFirstName = (firstName) => {
  return firstName.trim().length > 2;
};

const isValidLastName = (lastName) => {
  return lastName.trim().length > 2;
};

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const isValidPhone = (phone) => {
  const numericPhone = phone.replace(/\D/g, '');
  return numericPhone.length === 11;
};

const isValidDescription = (description) => {
  return description.trim().length >= 10 && description.trim().length <= 500;
};


const StyledInput = styled(Input)(
  ({ theme }) => `
  .${inputClasses.input} {
    width: 100%;
    max-width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;

    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? white[100] : white[100]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[900]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[900]};
    box-shadow: 0px 1px 1px ${theme.palette.mode === 'dark' ? grey[600] : grey[20]};

    &:hover {
      border-color: ${red[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${red[400]};
      box-shadow: 0 0 0 2px ${theme.palette.mode === 'dark' ? red[600] : red[900]};
    }
  }
`,
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  margin-top: 30px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const red = {
  100: '#FFD7D7',
  200: '#FFAFAF',
  400: '#FF5252',
  500: '#FF0000',
  600: '#E50000',
  900: '#750000',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
  1000: '#444950',
};

const white = {
  100: '#FFFFFF',
  200: '#F5F5F5',
  400: '#E0E0E0',
  500: '#CCCCCC',
  600: '#B3B3B3',
  900: '#666666',
};
