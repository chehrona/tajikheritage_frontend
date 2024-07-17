import React, { useState } from 'react';

// Service
import { sendLogin } from '../../services/request';

// Hooks
import { useGlobalData } from '../../App';

// Styled components
import {
    PageContainer,
    LoginContainer,
    UsernameField,
    PasswordField,
    SubmitButton,
    InputAlert,
} from './loginPageStyles';
import ManagementPage from '../../landingPages/management/ManagementPage';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameAlert, setUsernameAlert] = useState('');
    const [passwordAlert, setPasswordAlert] = useState('');
    const { setShowAdmin, showAdmin } = useGlobalData();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Clear previous alerts
        setUsernameAlert('');
        setPasswordAlert('');

        try {
            const response = await sendLogin({
                username,
                password,
            });

            if (response.data.message === 'Login successful') {
                setShowAdmin(true);
            } else {
                if (response.data.message === 'Invalid username') {
                    setUsernameAlert('Invalid username');
                    setUsername('');
                } else if (response.data.message === 'Invalid password') {
                    setPasswordAlert('Invalid password');
                    setPassword('');
                }
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setUsernameAlert('Invalid username');
            setPasswordAlert('Invalid password');
            setPassword('');
            setUsername('');
        }
    };

    return (
        <PageContainer>
            {showAdmin ? (
                <LoginContainer>
                    <UsernameField
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    {usernameAlert && <InputAlert>{usernameAlert}</InputAlert>}
                    <PasswordField
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    {passwordAlert && <InputAlert>{passwordAlert}</InputAlert>}
                    <SubmitButton onClick={handleLogin}>Submit</SubmitButton>
                </LoginContainer>
            ) : (
                <ManagementPage />
            )}
        </PageContainer>
    );
}
