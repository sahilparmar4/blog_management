import { blogData } from "@/lib/blog";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET (request: NextApiRequest, response: NextApiResponse){
    const allBlogs = blogData;
    return Response.json({status: 200, message: "Blogs fetched Successfully", data:allBlogs})
}