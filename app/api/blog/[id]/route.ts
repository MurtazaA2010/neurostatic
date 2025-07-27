import { NextResponse } from "next/server";
import BlogModalImport from 'lib/models/BlogModels';
const BlogModal = BlogModalImport.default || BlogModalImport;
import { connectDB } from 'lib/config/db.js';
import mongoose from 'mongoose';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "Invalid blog ID format" },
        { status: 400 }
      );
    }

    const blog = await BlogModal.findById(params.id);
    
    if (!blog) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, msg: "Invalid blog ID" }, { status: 400 });
    }

    const deleted = await BlogModal.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ success: false, msg: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, msg: "BlogDeleted" });
  } catch (error) {
    console.error("Error in DELETE /api/blog/[id]:", error);
    return NextResponse.json({ success: false, msg: "Server error" }, { status: 500 });
  }
}

