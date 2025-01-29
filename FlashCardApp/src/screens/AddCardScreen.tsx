import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import Button from "../components/Button"; // 自定義按鈕組件
import { useDispatch } from "react-redux";
import { addCard } from "../redux/slices/cardSlice"; // 引入 addCard action

const AddCardScreen = ({ navigation }: { navigation: any }) => {
  const [question, setQuestion] = useState(""); // 問題
  const [answer, setAnswer] = useState("");     // 答案
  const dispatch = useDispatch(); // 用於發送 Redux action

  // 處理新增卡片邏輯
  const handleAddCard = () => {
    if (question.trim() === "" || answer.trim() === "") {
      // 檢查是否填寫了問題和答案
      Alert.alert("Invalid Input", "Please enter both question and answer.");
      return;
    }

    // 創建新卡片
    const newCard = {
      id: new Date().toISOString(), // 使用 ISO 格式的時間戳作為卡片的唯一 ID
      question,
      answer,
    };

    // 發送 action 更新 Redux store
    dispatch(addCard(newCard));

    // 跳轉回主頁
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Card</Text>
      
      {/* 問題輸入框 */}
      <TextInput
        style={styles.input}
        placeholder="Enter question"
        value={question}
        onChangeText={setQuestion}
      />
      
      {/* 答案輸入框 */}
      <TextInput
        style={styles.input}
        placeholder="Enter answer"
        value={answer}
        onChangeText={setAnswer}
      />
      
      {/* 新增卡片按鈕 */}
      <Button title="Add Card" onPress={handleAddCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
});

export default AddCardScreen;
