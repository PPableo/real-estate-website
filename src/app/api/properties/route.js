// src/app/api/properties/route.js
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import dbConnect from '@/lib/mongodb';
import Property from '@/models/Property';

// Get all properties
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type'); // rent, sell, or buy
  const query = searchParams.get('query') || '';

  const filter = {};
  if (type) filter.propertyType = type;
  if (query) {
    filter.$or = [
      { name: { $regex: query, $options: 'i' } },
      { address: { $regex: query, $options: 'i' } }
    ];
  }

  try {
    await dbConnect();
    const properties = await Property.find(filter);
    return NextResponse.json(properties);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
  }
}

// Add new property
export async function POST(request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await dbConnect();
    const data = await request.json();
    const property = await Property.create({
      ...data,
      owner: session.user.id
    });
    return NextResponse.json(property, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create property' }, { status: 500 });
  }
}
