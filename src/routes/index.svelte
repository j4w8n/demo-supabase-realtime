<script>
  import { supabase } from '$lib/supabase'
  export let revenue, last_sale, sales

  const sales_subscription = supabase
    .from('demo-realtime')
    .on('INSERT', (payload) => {
      sales += 1
      last_sale = payload.new.amount
      revenue += last_sale
    })
    .subscribe()

  /**
   * to remove subscription, perhaps when a user logs out
   * * supabase.removeSubscription(sales_subscription)
  */
  
  const record_sale = async () => {
    await supabase
      .from('demo-realtime')
      .insert([
        { amount: Math.floor(Math.random() * (100 - 25 + 1) + 25) }
      ])
  }
</script>

<main class="m-4 text-center">
  <h1 class="h1">Supabase Realtime</h1>
  <p class="subheading text-gray-300">Visit the <a class="text-purple-400" href="https://supabase.com/docs/reference">supabase reference</a> to read the documentation</p>
  <button on:click={record_sale} class="mt-6 button-green-700 button-md rounded-md">
    Record New Sale
  </button>
  <p class="h5 font-thin text-gray-400">
    Total Sales: <span class="font-semibold text-blue-500">
      {sales}
    </span>
  </p>
  <p class="h5 font-thin text-grays-400">
    Last sale amount: <span class="font-semibold text-green-400">
      ${last_sale}
    </span>
  </p>
  <p class="h5 font-thin text-gray-400">
    Total Revenue: <span class="font-semibold text-green-700">
      ${revenue}
    </span>
  </p>
</main>