# Supabase Realtime ep:00

A short intro of subscribing to database changes.

## Getting Started

- Setup a supabase table called `demo-realtime`, keep RLS disabled, check `Enable Realtime`.
- Add a column called `amount` with a type of `int2`.
- Clone this repo.
- Add a `.env` file to the root of your app directory, and create two entries of `VITE_SUPABASE_ANON_KEY=` and `VITE_SUPABASE_URL=` with your supabase project's public key and url.
- `cd` into the directory, run `[p]npm install`, then `[p]npm run dev`.

## Resources

[YouTube Tutorial](https://www.youtube.com/channel/UCO9nARQJ8G2ekcUBE4yTQMg)
[Realtime Docs](https://supabase.com/docs/reference)
