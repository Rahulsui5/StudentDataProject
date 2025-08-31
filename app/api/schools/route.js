import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// 📌 POST: Add a new school
export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const contact = formData.get("contact");
    const email_id = formData.get("email_id");
    const imageFile = formData.get("image");

    // Save image in /public/schoolImages
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const fileName = Date.now() + "-" + imageFile.name;
    const filePath = path.join(process.cwd(), "public/schoolImages", fileName);
    fs.writeFileSync(filePath, buffer);

    // Insert into DB
    const db = await connectDB();
    await db.execute(
      "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state, contact, email_id, fileName]
    );

    return NextResponse.json({ message: "School added successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error adding school" }, { status: 500 });
  }
}

// 📌 GET: Fetch schools list
export async function GET() {
  try {
    const db = await connectDB();
    const [rows] = await db.execute(
      "SELECT id, name, address, city, image FROM schools"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching schools" }, { status: 500 });
  }
}
