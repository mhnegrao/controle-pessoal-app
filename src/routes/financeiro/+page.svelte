<script>
  import Container from "$lib/components/Container.svelte";
  import Titulo from "$lib/components/Titulo.svelte";
  import Icon from "@iconify/svelte";
</script>

<Container>
  <span>
    <Icon
        icon="mdi:account-cash-outline"
        height="none"
        style="width: 96px; height: 96px"
    />
  </span>
  <Titulo title="Financeiro" myClass="h2" />
  <button
    class="p-4 bg-red-400 rounded-full hover:bg-red-600"
    data-sveltekit-preload-data="hover">Contas a Pagar</button
  >
  <button
    class="p-4 bg-green-500 rounded-full hover:bg-green-600"
    data-sveltekit-preload-data="hover">Contas a Receber</button
  >
  <Container>
   
    
  </Container>
</Container>
