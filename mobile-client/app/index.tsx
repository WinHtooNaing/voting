import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from "react-native";
import axios from "axios";
import Toast from "react-native-toast-message";
import VoteUICard from "../components/vote-ui-card";

type Vote = {
  _id: number;
  name: string;
  vote_count: number;
  images: string;
};

const Index = () => {
  const [votes, setVotes] = useState<Vote[]>([]);
  const [loading, setLoading] = useState(false);

  const getVotingData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://voting-nogy.onrender.com/get-votes"
      );
      setVotes(response.data.votes);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Something went wrong, please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVotingData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>မြန်မာ့ရိုးရာ ရွေးကောက်ပွဲ</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#3b82f6" style={styles.loader} />
      ) : (
        <FlatList
          data={votes}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => <VoteUICard vote={item} />}
          contentContainerStyle={styles.list}
        />
      )}
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 30, backgroundColor: "#fff" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3b82f6",
    marginBottom: 16,
  },
  loader: { flex: 1 },
  list: { paddingHorizontal: 16, paddingBottom: 40 },
});

export default Index;
