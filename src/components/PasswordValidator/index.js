const { useState } = require('react');
const {
  Container,
  Input,
  ErrorText,
  PasswordValidatorHeading,
  DescriptionText,
} = require('./styledComponents');

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showErrorText, setShowErrorText] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8 && value.length >= 0) {
      setShowErrorText(true);
      setError('Your password must be at least 8 characters');
    } else {
      setShowErrorText(false);
      setError('');
    }
  };

  return (
    <Container>
      <PasswordValidatorHeading> Password Validator </PasswordValidatorHeading>
      {showErrorText && (
        <p>Your password must be at least 8 characters</p>
      )}
      <DescriptionText>
        Check how strong and secure is your password
      </DescriptionText>
      <Input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

module.exports = PasswordValidator;