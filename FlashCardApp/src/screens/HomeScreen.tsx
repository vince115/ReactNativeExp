import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteCard } from "../redux/slices/cardSlice";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const cards = useSelector((state: RootState) => state.cards.cards); // 獲取卡片數據
  const dispatch = useDispatch();

  const handleDeleteCard = (id: string) => {
    dispatch(deleteCard(id)); // 刪除卡片
  };

  const renderCard = ({ item }: { item: typeof cards[0] }) => (
    <View style={styles.card}>
      <Text style={styles.question}>{item.question}</Text>
      <Text style={styles.answer}>{item.answer}</Text>
      <Button title="Delete" onPress={() => handleDeleteCard(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlashCard App</Text>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        contentContainerStyle={styles.list}
      />
      <Button title="Add Card" onPress={() => navigation.navigate("AddCard")} />
      <Button title="Study Mode" onPress={() => navigation.navigate("Study")} />
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
  list: {
    flexGrow: 1,
    marginBottom: 16,
  },
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
  },
  answer: {
    fontSize: 16,
    color: "#555",
    marginTop: 8,
  },
});

export default HomeScreen;
