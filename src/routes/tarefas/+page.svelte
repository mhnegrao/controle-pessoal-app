<script>
  import Container from "$lib/components/Container.svelte";
  import DescriptionList from "$lib/components/DescriptionList.svelte";
  import Input from "$lib/components/Input.svelte";
  import TextArea from "$lib/components/TextArea.svelte";
  import Titulo from "$lib/components/Titulo.svelte";
  import Icon from "@iconify/svelte";
  let exibirTarefas = false;
  let exibirForm = false;

  const ocultaForm = () => {
    exibirForm = !exibirForm;
    exibirTarefas = false;
  };
  const ocultarTarefas = () => {
    exibirForm = false;
    exibirTarefas = !exibirTarefas;
  };
</script>

<Container>
  <Icon
    icon="mdi:book-clock-outline"
    height="none"
    style="width: 96px; height: 96px; color:lightblue;"
  />

  <Titulo title="Tarefas" myClass="h1" />

  <div class="p-2">
    <button class="bg-teal-600 p-4 rounded-md ml-1" on:click={ocultaForm}
      >Nova Tarefa</button
    >
    <button class="bg-blue-600 p-4 rounded-md ml-1" on:click={ocultarTarefas}
      >Exibir Tarefas</button
    >
  </div>

  {#if exibirTarefas}
    <Titulo title="Listagem das Tarefas" myClass="h3" />
    <DescriptionList />
  {/if}
  {#if exibirForm}
    <Titulo title="Adicionar Nova Tarefa" myClass="h3" />
    <Input labelInput="Título" placeholder="Digite o título da tarefa" />
    <TextArea
      labelTextArea="Descrição"
      placeholder="Digite a descrição da tarefa"
    />
    <div class="p-2">
      <button class="bg-teal-600 p-4 rounded-md ml-1">Salvar</button>
      <button class="bg-slate-600 p-4 rounded-md ml-1" on:click={ocultaForm}
        >Fechar</button
      >
    </div>
  {/if}
</Container>
