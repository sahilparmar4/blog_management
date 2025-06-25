import { blogData } from "@/lib/blog";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function GET (request: NextRequest){
    const allBlogs = blogData;
    return Response.json({status: 200, message: "Blogs fetched Successfully", data:allBlogs})
}