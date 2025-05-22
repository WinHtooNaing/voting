import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

type VoteUICardProps = {
  vote: {
    _id: number;
    name: string;
    vote_count: number;
    images: string;
  };
};
const ResultUICard = ({ vote }: VoteUICardProps) => {
  return (
    <Card className="h-[300px] max-sm:h-[400px]">
      <CardHeader>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={vote.images}
            alt={vote.name}
            className="h-[150px] max-sm:h-[240px] w-full object-cover rounded-md"
            width={100}
            height={100}
          />
          <CardTitle className="text-center pt-4">{vote.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">
          Voting Count :{"  "}
          <span className="text-blue-500 text-xl font-bold font-mono">
            {vote.vote_count}
          </span>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ResultUICard;
