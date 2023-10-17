<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import Icon from "@iconify/svelte";
  import type { User } from "../../models/userModel";
  import Titulo from "$lib/components/Titulo.svelte";
  import { onMount } from "svelte";
  import { fakeUsers } from "../../repository/fake/fakeData";
  import moment from "moment";
 

  let usuario: User = {
    name: "",
    email: "",
    password: "",
    status: "",
    role: "",
    created_at: new Date(),
  };
  let usuarios: User[] = [];
  let exibeFormulario: boolean = false;
  let exibeLista: boolean = true;

  onMount(async () => {
    let users = await fakeUsers();
    usuarios = [...users];
  });
  
</script>

<Container>
  <span>
    <Icon icon="mdi:users" height="none" style="width: 96px; height: 96px" />
  </span>
  <Titulo title="Usuários" myClass="h2" />
  <button class="btn btn-primary">Novo Usuário</button>

  {#if exibeFormulario}
    <form>
      <input type="text" placeholder="Nome" bind:value={usuario.name} />
      <input type="text" placeholder="E-mail" bind:value={usuario.email} />
      <input type="text" placeholder="Senha" bind:value={usuario.password} />
    </form>
  {/if}

  {#if usuarios.length > 0}
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Nível</th>
          <th>Status</th>
          <th>Criado Em</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {#each usuarios as usuario}
          <tr>
            <td>{usuario.id}</td>
            <td>{usuario.name}</td>
            <td>{usuario.email}</td>
            <td>{usuario.role}</td>
            <td>{usuario.status}</td>
            <td>{usuario.created_at.toLocaleString()}</td>
            <td>
              <button class="btn btn-primary">Editar</button>
              <button class="btn btn-danger">Excluir</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</Container>
