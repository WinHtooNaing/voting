"use client";

import VoteUICard from "@/components/vote-ui-card";
import api from "@/utils/api";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

type VotePageProps = {
  _id: number;
  name: string;
  vote_count: number;
  images: string;
};
const VotePage = () => {
  const [votes, setVotes] = useState<VotePageProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getVotingData = async () => {
    setLoading(true);
    try {
      const response = await api.get("/get-votes");
      setVotes(response.data.votes);
    } catch (error) {
      toast.error("Something went wrong, please try again");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVotingData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-semibold font-mono text-center text-blue-500 pt-6">
        မြန်မာ့ရိုးရာ ရွေးကောက်ပွဲ
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-[50vh] mt-[5%]">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
        </div>
      ) : (
        votes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-16 mb-40">
            {votes.map((vote, index) => (
              <VoteUICard vote={vote} key={index} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default VotePage;
