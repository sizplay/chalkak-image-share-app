'use server';

import { ApolloQueryResult } from '@apollo/client';
import { DocumentNode } from 'graphql';

function getGqlString(doc: DocumentNode) {
  return doc.loc && doc.loc.source.body;
}

export async function query<Result, Variables>({
  cacheTags,
  query,
  variables,
}: {
  query: DocumentNode;
  variables: Variables;
  cacheTags: string[];
}) {
  const res = await fetch(process.env.HASURA_PROJECT_ENDPOINT || '', {
    method: 'POST',
    body: JSON.stringify({
      query: getGqlString(query),
      variables,
    }),
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET || '',
    },
    next: { tags: cacheTags },
  });

  return res.json() as Promise<ApolloQueryResult<Result>>;
}
