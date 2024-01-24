import { GET_PORTFOLIO_DATA } from '@/app/grapql/queries';
import { client } from '@/app/lib/apollo-client';
import { NextRequest, NextResponse } from 'next/server';
const url = `${process.env.BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`;

export async function GET(request: NextRequest, res: NextResponse) {
  try {
    const { data } = await client.query({
      query: GET_PORTFOLIO_DATA,
      fetchPolicy: 'network-only',
    });

    return NextResponse.json({ portfolio: data.portfolioCollection.items });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
