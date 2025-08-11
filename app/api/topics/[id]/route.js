import connectToDatabase from '@/libs/mongodb';
import Topic from '@/models/topic';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params;

  await connectToDatabase();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}


// Continuar daqui
// esse get tá retornando todos os itens