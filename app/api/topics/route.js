import connectToDatabase from '@/libs/mongodb';
import Topic from '@/models/topic';
import { NextResponse } from 'next/server';



export async function POST(request) {
  const { title, description } = await request.json();

  await connectToDatabase();
  const existing = await Topic.findOne({ title });
  if (existing) {
    return NextResponse.json({ message: 'Topico já existe' }, { status: 400 });
  }

  await Topic.create({ title, description });
  return NextResponse.json({ message: 'Topico criado' }, { status: 201 });
}



export async function GET() {
  await connectToDatabase();
  const topics = await Topic.find();
  return NextResponse.json({ topics }, { status: 200 });
}



export async function DELETE(req) {
  const body = await req.json();
  const { id } = body;

  await connectToDatabase();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Topico deletado' }, { status: 200 });
}
