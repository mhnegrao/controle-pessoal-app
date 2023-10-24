<script>
  import Container from "$lib/components/Container.svelte";
  import Titulo from "$lib/components/Titulo.svelte";
  import Icon from "@iconify/svelte";

  let exibirLancamentos = false;
  let exibirFormulario = false;

  const exibirForm = () => {
    exibirFormulario = true;
    exibirLancamentos = !exibirLancamentos;
  };
  const exibirLanctos = () => {
    exibirLancamentos = true
    exibirFormulario = false;
  };
</script>

<Container>
  <Icon
    icon="material-symbols:currency-exchange-rounded"
    height="none"
    style="width: 96px; height: 96px color:lightblue;"
  />

  <Titulo title="Financeiro" myClass="h2" />
  <button
    class="p-4 bg-blue-400 rounded-full hover:bg-blue-600"
    data-sveltekit-preload-data="hover"
    on:click={exibirForm}>Incluir Lançamento</button
  >
  <button
    class="p-4 bg-red-400 rounded-full hover:bg-red-600"
    data-sveltekit-preload-data="hover"
    on:click={exibirLanctos}>Contas a Pagar</button
  >
  <button
    class="p-4 bg-green-500 rounded-full hover:bg-green-600"
    data-sveltekit-preload-data="hover" on:click={exibirLanctos}>Contas a Receber</button
  >
  <Container>
    {#if exibirFormulario}
      <h2>Formulário de Lançamento</h2>
    {/if}
    {#if exibirLancamentos}
      <h2>Grade de Lançamnetos</h2>
      <form>
        <label for="conta">Conta</label>
        <select id="conta" name="conta">
          <option value="conta1">Conta 1</option>
          <option value="conta2">Conta 2</option>
          <option value="conta3">Conta 3</option>
        </select>
        <label for="descricao">Descrição</label>
        <input type="text" id="descricao" name="descricao" />
        <label for="valor">Valor</label>
        <input type="text" id="valor" name="valor" />
        <label for="data">Data</label>
        <input type="date" id="data" name="data" />
        <label for="tipo">Tipo</label>
        <select id="tipo" name="tipo">
          <option value="receita">Receita</option>
          <option value="despesa">Despesa</option>
        </select>
        <input type="submit" value="Submit" />  
      </form>
    {/if}
  </Container>
</Container>
