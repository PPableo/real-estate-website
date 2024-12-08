// src/app/api/saved-properties/route.js
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import dbConnect from '@/lib/mongodb';
import SavedProperty from '@/models/SavedProperty';

export async function GET(request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const savedProperties = await SavedProperty.find({
      userId: session.user.id
    });

    return NextResponse.json(savedProperties);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch saved properties' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const { propertyId } = await request.json();

    if (!propertyId) {
      return NextResponse.json({ error: 'Property ID is required' }, { status: 400 });
    }

    const existingSave = await SavedProperty.findOne({
      userId: session.user.id,
      propertyId: Number(propertyId)
    });

    if (existingSave) {
      return NextResponse.json({ message: 'Property already saved' }, { status: 200 });
    }

    const savedProperty = await SavedProperty.create({
      userId: session.user.id,
      propertyId: Number(propertyId)
    });

    return NextResponse.json({ message: 'Property saved successfully', savedProperty }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save property' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const propertyId = searchParams.get('propertyId');

    if (!propertyId) {
      return NextResponse.json({ error: 'Property ID is required' }, { status: 400 });
    }

    await dbConnect();
    await SavedProperty.findOneAndDelete({
      userId: session.user.id,
      propertyId: Number(propertyId)
    });

    return NextResponse.json({ message: 'Property removed from saved' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to remove property' }, { status: 500 });
  }
}
