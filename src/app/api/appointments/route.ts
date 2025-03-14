import { fetchMockData } from '@/lib/data-utils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (Math.random() < 0.2) {
      return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
    }

    const data = await fetchMockData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in appointments API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
