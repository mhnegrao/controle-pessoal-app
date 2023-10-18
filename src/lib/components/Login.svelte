<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import Titulo from "$lib/components/Titulo.svelte";
  import { autenticado } from "../../stores/store";
  export let email: string = "";
  export let password: string = "";
  
  const fazerLogin = () => {
    autenticado.set(true)
  };
  const limparCampos = () => {
    email = "";
    password = "";
  };
</script>

<Container>
  <Titulo title="Credenciais de Acesso" myClass="h2" />
  <form>
    <input
      class="mb-3 rounded-md bg-blue-200 font-semibold text-slate-900 text-slate-900"
      type="text"
      placeholder="E-mail"
      bind:value={email}
    />
    <input
      class="mb-3 rounded-md bg-blue-300 font-semibold text-slate-900"
      type="password"
      placeholder="Senha"
      bind:value={password}
    />

    <button
      class=" mb-3 bg-violet-700 rounded-lg p-2 font-semibold text-1xl"
      on:click={fazerLogin}>Entrar</button
    >
    <button
      class="mb-3 bg-gray-400 rounded-lg p-2 font-semibold text-1xl"
      on:click={limparCampos}>Limpar</button
    >
  </form>
  
</Container>
