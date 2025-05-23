import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { Button, Dialog, Portal, Paragraph } from "react-native-paper";
import axios from "axios";
import Toast from "react-native-toast-message";

type VoteUICardProps = {
  vote: {
    _id: number;
    name: string;
    vote_count: number;
    images: string;
  };
};

const VoteUICard = ({ vote }: VoteUICardProps) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVote = async (id: number) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://voting-nogy.onrender.com/update-vote",
        { vote_id: id }
      );
      if (response.status === 200) {
        Toast.show({
          type: "success",
          text1: "Vote ပေးခြင်းအောင်မြင်ပါသည်",
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Vote ပေးခြင်းမအောင်မြင်ပါ",
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Vote ပေးခြင်းမအောင်မြင်ပါ",
      });
    }
    setLoading(false);
    setVisible(false);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: vote.images }} style={styles.image} />
      <Text style={styles.title}>{vote.name}</Text>
      <Button
        mode="contained"
        onPress={() => setVisible(true)}
        style={styles.button}
        disabled={loading}
      >
        Vote Now
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>ဒီကောင့်ကို သင် vote မေးမှာ သေချာပါသလား ?</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              သေချာစဉ်းစားပြီး vote လုပ်ပါ။ သင့်ရဲ့ vote က အရေးကြီးပါတယ်။
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Cancel</Button>
            <Button onPress={() => handleVote(vote._id)} disabled={loading}>
              {loading ? <ActivityIndicator size="small" /> : "Vote"}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
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
    width: "100%",
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
  button: {
    width: "100%",
    marginTop: 8,
    backgroundColor: "#3b82f6",
    borderRadius: 8,
  },
});

export default VoteUICard;
