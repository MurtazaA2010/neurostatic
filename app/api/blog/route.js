import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModal from '../../../lib/models/BlogModels';
import { connectDB } from '../../../lib/config/db.js';

async function loadDB(connectDB) {
  await connectDB();
  console.log("connected to db");
}

loadDB(connectDB);

export async function GET() {
  try {
    await connectDB();
    const blogs = await BlogModal.find().sort({ date: -1 });
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ blogs: [], error: "Server error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");
    if (!image) {
      return NextResponse.json({ success: false, msg: "No image provided" }, { status: 400 });
    }

    const imageByte = await image.arrayBuffer();
    const buffer = Buffer.from(imageByte);

    // Save image in public/blogImages folder with timestamp prefix
    const path = `./public/blogImages/${timestamp}_${image.name}`;
    await writeFile(path, buffer);

    // IMPORTANT: Add leading slash '/' so URL resolves correctly in frontend
    const imageURL = `/blogImages/${timestamp}_${image.name}`;

    const blogData = {
      title: `${formData.get("title")}`,
      description: `${formData.get("description")}`,
      category: `${formData.get("category")}`,
      image: imageURL,
      readTime: `${formData.get("readTime") || "5 min read"}`,
      // you might want to add date, author etc here if needed
    };

    await BlogModal.create(blogData);
    console.log("New Blog Saved");

    return NextResponse.json({ success: true, msg: "BlogAdded" });
  } catch (error) {
    console.error("Error in POST /api/blog:", error);
    return NextResponse.json({ success: false, msg: "Server error" }, { status: 500 });
  }
}

