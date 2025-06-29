import { blogData } from "@/lib/blog";
import { commentType } from "@/lib/types";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const newComment = {
      id: `comment${blogData?.comments?.length + 1}`,
      authorName: body?.name,
      email: body?.email,
      comment: body?.description,
      rating: body?.rating,
      date: new Date().toISOString(),
    };

    blogData?.comments.unshift(newComment);

    return Response.json({
      status: 200,
      message: "Comment added successfully",
      data: newComment,
    });
  } catch (error) {
    return Response.json({ status: 500, message: "Failed to add comment" });
  }
}
