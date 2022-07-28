import { supabase } from '$lib/supabase'

export async function GET() {
  let { data, count } = await supabase
    .from('demo-realtime')
    .select('amount', { count: 'exact' })
  
  let revenue = data.reduce((total, current) => {
    return total + current.amount
  }, 0)

  return {
    status: 200,
    body: {
      sales: count,
      last_sale: data.at(-1)?.amount | 0,
      revenue
    }
  }
}