import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { OPENWEATHERMAP_API_KEY } from '@env';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) {
      setError('請輸入城市名稱');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError('無法獲取天氣資訊，請檢查城市名稱');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>天氣預報應用程式</Text>
      <TextInput
        style={styles.input}
        placeholder="輸入城市名稱"
        value={city}
        onChangeText={setCity}
      />
      <Button title="獲取天氣" onPress={fetchWeather} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {weather && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>城市：{weather.name}</Text>
          <Text style={styles.weatherText}>溫度：{weather.main.temp}°C</Text>
          <Text style={styles.weatherText}>天氣：{weather.weather[0].description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  weatherContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 5,
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default WeatherApp;