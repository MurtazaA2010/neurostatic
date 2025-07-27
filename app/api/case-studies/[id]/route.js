import { connection, NextResponse } from "next/server";
import ProjectModal from "../../../../lib/models/projectModels";
import { connectDB } from "../../../../lib/config/db";
import mongoose from "mongoose";

export async function GET(request, { params }) {
  try {
    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "Invalid project ID format" },
        { status: 400 }
      );
    }

    const project = await ProjectModal.findById(params.id);

    if (!project) {
      return NextResponse.json(
        { error: "The project is not available" },
        { status: 404 }
      );
    }

    return NextResponse.json({ project });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}



export  async function DELETE(request, {params}) {
  try {
    await connectDB();
  
  if(!mongoose.Types.ObjectId.isValid(params.id)){
    return NextResponse.json({ success: false, msg: "Invalid blog ID" }, { status: 400 });
  }
  const deleted = await ProjectModal.findByIdAndDelete(params.id)

  if (!deleted) {
    return NextResponse.json({ success: false, msg: "project not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, msg: "Project Deleted" });
  }
 catch (error){
    console.error("Error in DELETE /api/project/[id]:", error);
    return NextResponse.json({ success: false, msg: "Server error" }, { status: 500 });
 }

}