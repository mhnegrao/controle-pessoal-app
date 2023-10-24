<script lang="ts">
  import Titulo from "$lib/components/Titulo.svelte";
  import Icon from "@iconify/svelte";
  import { PlanoDeContas, EnumToObject } from "$lib/utils/enumerations";

  let planoDeContas = EnumToObject(PlanoDeContas);
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container mx-auto p-8 space-y-8">
  <Icon
    icon="mdi:arrow-decision"
    height="none"
    style="width: 96px; height: 96px; color:lightgreen;"
  />
  <Titulo title="MCP - Meu Controle Pessoal de Atividades" myClass="h1" />
  <select class="text-black font-semibold" bind:value={planoDeContas}>
    {#each planoDeContas as conta}
      <option value="{conta.value}}">{conta.key.toUpperCase()}</option>
      
    {/each}
  </select>
  <p class="font-semibold text-2xl">
    Plataforma para administração das atividades pessoais e profissionais
  </p>
  <section>
    <a class="btn variant-filled-tertiary" href="https://github.com/mhnegrao"
      >GitHub</a
    >
  </section>
</div>
