import { blogData, recommendedArticles, relatedArticles, tourGuides } from "@/lib/blog";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function GET (request: NextRequest){
    return Response.json({status: 200, message: "Articles fetched Successfully", data:relatedArticles})
}
