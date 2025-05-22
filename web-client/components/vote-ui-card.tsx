"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import api from "@/utils/api";
import { toast } from "sonner";

type VoteUICardProps = {
  vote: {
    _id: number;
    name: string;
    vote_count: number;
    images: string;
  };
};

const VoteUICard = ({ vote }: VoteUICardProps) => {
  const [loading, setLoading] = useState(false);
  const handleVote = async (id: number) => {
    setLoading(true);
    const response = await api.post("/update-vote", { vote_id: id });
    if (response.status === 200) {
      toast.success("Vote ပေးခြင်းအောင်မြင်ပါသည်");
    } else {
      toast.error("Vote ပေးခြင်းမအောင်မြင်ပါ");
    }
    setLoading(false);
  };
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
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-full hover:cursor-pointer">Vote Now </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                ဒီကောင့်ကို သင် vote မေးမှာ သေချာပါသလား ?
              </AlertDialogTitle>
              <AlertDialogDescription>
                သေချာစဉ်းစားပြီး vote လုပ်ပါ။ သင့်ရဲ့ vote က အရေးကြီးပါတယ်။
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="hover:cursor-pointer">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="hover:cursor-pointer"
                onClick={() => handleVote(vote._id)}
              >
                {loading ? "Voting..." : "Vote"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
};

export default VoteUICard;
