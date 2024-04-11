import redis from '@/app/databaseClient';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const textarea = await redis.get('textarea');
  return NextResponse.json(textarea);
}
