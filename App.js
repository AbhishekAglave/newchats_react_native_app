import React, {useState, useEffect} from 'react';
import {
  Text,
  Linking,
  TextInput,
  StyleSheet,
  View,
  Pressable,
  Appearance,
} from 'react-native';

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  const [darkMode, setDarkMode] = useState();
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  let styles = {};

  useEffect(() => {
    setDarkMode(colorScheme === 'dark');
  }, []);

  if (darkMode) {
    styles = StyleSheet.create({
      input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 8,
      },
      button: {
        height: 40,
        margin: 10,
        marginTop: 30,
        backgroundColor: '#0fd319',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      },
      buttonText: {
        color: 'white',
      },
      heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        padding: 20,
        textAlign: 'center',
        marginTop: 30,
        color: 'white',
      },
      app: {
        backgroundColor: 'black',
        height: '100%',
      },
      container: {
        padding: 40,
        margin: 20,
        borderRadius: 8,
        backgroundColor: '#bfd9f363',
      },
      label: {
        marginLeft: 10,
        marginTop: 10,
      },
      copyrightText: {
        textAlign: 'center',
        position: 'absolute',
        bottom: 10,
        width: '100%',
        fontSize: 12,
      },
      linkText: {
        color: 'blue',
      },
    });
  } else {
    styles = StyleSheet.create({
      input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
      },
      button: {
        height: 40,
        margin: 10,
        marginTop: 30,
        backgroundColor: '#0fd319',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      },
      buttonText: {
        color: 'white',
      },
      heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        padding: 20,
        textAlign: 'center',
        marginTop: 30,
      },
      app: {
        height: '100%',
      },
      container: {
        padding: 40,
        margin: 20,
        borderRadius: 8,
        backgroundColor: '#eaf2fa',
      },
      label: {
        color: 'black',
        marginLeft: 10,
        marginTop: 10,
      },
      copyrightText: {
        textAlign: 'center',
        position: 'absolute',
        bottom: 10,
        width: '100%',
        fontSize: 12,
      },
      linkText: {
        color: 'blue',
      },
    });
  }

  function openChat() {
    let phone = number.replace(/\s/g, '');
    if (phone.length == 0) {
      alert('Mobile number cannot be empty!');
    } else if (regex.test(phone)) {
      const link =
        'https://api.whatsapp.com/send/?phone=91' +
        phone.slice(-10) +
        '&text=' +
        message;
      Linking.openURL(link);
    } else {
      alert('Invalid Mobile Number');
    }
  }
  return (
    <View style={styles.app}>
      <Text style={styles.heading}>WhatsApp Chat</Text>
      <View style={styles.container}>
        <Text style={styles.label}>
          Mobile<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInput
          textContentType="telephoneNumber"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={num => {
            setNumber(num);
          }}
          value={number}
          placeholder="Enter WhatsApp Number"
          autoFocus={true}
          required
        />
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={styles.input}
          onChangeText={msg => {
            setMessage(msg);
          }}
          value={message}
          placeholder="Write Message..."
        />
        <Pressable style={styles.button} onPress={openChat}>
          <Text style={styles.buttonText}>Open Chat</Text>
        </Pressable>
      </View>
      <Text style={styles.copyrightText}>
        © 2022{' '}
        <Text
          style={styles.linkText}
          onPress={() => {
            Linking.openURL('https://www.newchats.in');
          }}>
          newchats.in
        </Text>
        , all rights reserved
      </Text>
    </View>
  );
};

export default App;
