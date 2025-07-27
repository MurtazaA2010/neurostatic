import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import ProjectModal from '../../../lib/models/projectModels';
import { connectDB } from "../../../lib/config/db";


export async function loadDB(connectDB) {
    await connectDB();
    console.log("Connected to DB")
}

loadDB(connectDB)


export async function GET(request){
    try{
        await connectDB();
        const projects = await ProjectModal.find().sort({date : -1})
        return NextResponse.json({projects})
    } catch(error){
        console.error("error couldnot get the blogs")
        return NextResponse.json({ projects: [], error: "Server error" }, { status: 500 });    }
}

export async function POST(request) {
    try {
      const formData = await request.formData();
      const timestamp = Date.now();
  
      const image = formData.get("image");
      if (!image) {
        return NextResponse.json({ success: false, msg: "No image provided" }, { status: 400 });
      }
  
      const imageBytes = await image.arrayBuffer();
      const buffer = Buffer.from(imageBytes);
  
      const fileName = `${timestamp}_${image.name}`;
      const filePath = `./public/projects/${fileName}`;
      await writeFile(filePath, buffer);
  
      const imageURL = `/projects/${fileName}`;
  
  
      const testimonial = {
        content: formData.get("testimonialContent"),
        author: formData.get("testimonialAuthor"),
        position: formData.get("testimonialPosition")
      };
  
      const projectData = {
        title: formData.get("title"),
        description: formData.get("description"),
        image: imageURL,
        industry: formData.get("industry"),
        duration: formData.get("duration"),
        client: formData.get("client"),
        year: formData.get("year"),
        solution: formData.get("solution"),
        results: formData.get("results"),
        testimonial,
        date: timestamp
      };
  
      await ProjectModal.create(projectData);
  
      return NextResponse.json({ success: true, msg: "Project added" });
    } catch (error) {
      return NextResponse.json({ success: false, msg: "Server error" }, { status: 500 });
    }
  }
  