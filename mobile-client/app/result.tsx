import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from "react-native";
import api from "../utils/api";
import ResultUICard from "../components/result-ui-card";

type ResultPageProps = {
  _id: number;
  name: string;
  vote_count: number;
  images: string;
};

const ResultsPage = () => {
  const [votes, setVotes] = useState<ResultPageProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getVotingData = async () => {
    setLoading(true);
    try {
      const response = await api.get("/get-results");
      setVotes(response.data.votes);
    } catch (error) {
      console.error("Error fetching votes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVotingData();
    const interval = setInterval(getVotingData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ရွေးကောက်ပွဲ ရလဒ်များ</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#3b82f6" style={styles.loader} />
      ) : (
        <FlatList
          data={votes}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => <ResultUICard vote={item} />}
          contentContainerStyle={styles.list}
        />
      )}
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

export default ResultsPage;
