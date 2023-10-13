<script>
  import Container from "$lib/components/Container.svelte";
</script>

<Container>
  <h1 class="h1">Financeiro</h1>
  <button
    class="p-4 bg-red-400 rounded-full hover:bg-red-600"
    data-sveltekit-preload-data="hover">Contas a Pagar</button
  >
  <button
    class="p-4 bg-green-500 rounded-full hover:bg-green-600"
    data-sveltekit-preload-data="hover">Contas a Receber</button
  >
</Container>
