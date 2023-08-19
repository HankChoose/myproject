import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <InputGroup>
        <Form.Control
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          isInvalid={password.length < 8} // Add your validation logic here
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={toggleShowPassword}>
            {showPassword ? 'Hide' : 'Show'}
          </Button>
        </InputGroup.Append>
        <Form.Control.Feedback type="invalid">
          Password must be at least 8 characters long.
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
};

export default PasswordInput;