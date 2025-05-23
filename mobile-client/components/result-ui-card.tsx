import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

type ResultUICardProps = {
  vote: {
    _id: number;
    name: string;
    vote_count: number;
    images: string;
  };
};

const ResultUICard = ({ vote }: ResultUICardProps) => {
  return (
    <Card style={styles.card}>
      <Image source={{ uri: vote.images }} style={styles.image} />
      <Text style={styles.title}>{vote.name}</Text>
      <View style={styles.content}>
        <Text style={styles.description}>
          Voting Count: <Text style={styles.count}>{vote.vote_count}</Text>
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    alignItems: "center",
    elevation: 2,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  content: {
    alignItems: "center",
    marginTop: 16,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
  },
  count: {
    color: "#3b82f6",
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
});

export default ResultUICard;
