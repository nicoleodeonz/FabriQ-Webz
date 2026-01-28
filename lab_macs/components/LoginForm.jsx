import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, Platform } from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    console.log('Login button pressed');
    
    if (!username.trim() || !password.trim()) {
      console.error('Validation Error: Username and password are required');
        alert('Error: Please enter both username and password');
      return;
    }
    
    console.log('Username:', username);
    console.log('Password:', password);
    setLoading(true);
    console.log('Logging in...');
    
    setTimeout(() => {
      setLoading(false);
        alert('Success: Logged in successfully!');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      
      <Image 
        source={{ uri: 'https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png' }} 
        style={styles.logo}
        resizeMode="contain"
      />
      
      <Text style={styles.title}>Welcome Back</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        placeholderTextColor="#999"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#999"
      />
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? 'Logging in...' : 'Login'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.forgotButton}
        onPress={() => console.log('Forgot password button pressed')}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  forgotButton: {
    alignItems: 'center',
  },
  forgotText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default LoginForm;
