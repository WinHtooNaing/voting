"use client";
import ResultUICard from "@/components/result-ui-card";
import api from "@/utils/api";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";

type ResultPageProps = {
  _id: number;
  name: string;
  vote_count: number;
  images: string;
};

const ResultPage = () => {
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

    const interval = setInterval(() => {
      getVotingData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-semibold font-mono text-center text-blue-500 pt-6">
        ရွေးကောက်ပွဲ ရလဒ်များ
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-[50vh] mt-[5%]">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
        </div>
      ) : (
        votes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-16 mb-40">
            {votes.map((vote, index) => (
              <ResultUICard vote={vote} key={index} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default ResultPage;
